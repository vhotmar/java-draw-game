package draw.common.behaviour.services;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.map.IMap;
import com.hazelcast.topic.ITopic;
import draw.common.Constants;
import draw.common.behaviour.tasks.ChooseWordRandomlyTask;
import draw.common.behaviour.tasks.EndRoundTask;
import draw.common.behaviour.transitions.*;
import draw.common.messages.DrawCommand;
import draw.common.messages.ServerMessage;
import draw.common.behaviour.model.*;

import java.security.SecureRandom;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

public class RoomService {
  private final String roomId;

  private final IMap<String, Room> rooms;
  private final ITopic<RoomMessageWrapper> roomTopic;
  private final HazelcastInstance hazelcastInstance;

  public RoomService(HazelcastInstance hazelcastInstance, String roomId) {
    this.hazelcastInstance = hazelcastInstance;
    this.roomId = roomId;

    rooms = hazelcastInstance.getMap("draw/rooms");
    roomTopic = hazelcastInstance.getTopic("draw/room/" + roomId);
  }

  public Room join(Client client) {
    Room room = rooms.executeOnKey(roomId, new JoinRoomProcessor(client.getId()));

    sendOthersMessage(
        ServerMessage.newBuilder()
            .setPlayerConnected(
                ServerMessage.PlayerConnectedMessage.newBuilder()
                    .setPlayerId(client.getId())
                    .setPlayerName(client.getName())
                    .build())
            .build(),
        client.getId());

    return room;
  }

  public void leave(Client client) {
    LeaveRoomProcessor.Result result =
        rooms.executeOnKey(roomId, new LeaveRoomProcessor(client.getId()));

    if (result.getRoom() == null) return;

    if (!result.getPreviousOwnerId().equals(result.getRoom().getOwnerId())) {
      sendOthersMessage(
          ServerMessage.newBuilder()
              .setLobbyOwnerChange(
                  ServerMessage.LobbyOwnerChanged.newBuilder()
                      .setNewOwnerId(result.getRoom().getOwnerId())
                      .build())
              .build(),
          client.getId());
    }

    if (result.getRoom().getRoomState() == Room.RoomState.GAME) {

      if (result.getRoom().getPlayers().size() == 1) {
        endCurrentRound(ServerMessage.WordRevealMessage.RevealReason.NOONE_LEFT);

        sendEveryoneMessage(
            ServerMessage.newBuilder()
                .setGameEnd(ServerMessage.GameEndMessage.newBuilder().build())
                .build());

        rooms.executeOnKey(roomId, new EndGameProcessor());
      } else {
        if (result.getRoom().getDrawingId().equals(client.getId())) {
          endCurrentRound(ServerMessage.WordRevealMessage.RevealReason.DRAWER_LEFT);
          initiateNextRound();
        }
      }
    }

    sendOthersMessage(
        ServerMessage.newBuilder()
            .setPlayerDisconnected(
                ServerMessage.PlayerDisconnectedMessage.newBuilder()
                    .setPlayerId(client.getId())
                    .build())
            .build(),
        client.getId());
  }

  public Room getRoom() {
    return rooms.get(roomId);
  }

  public void sendMessage(RoomMessageWrapper wrapper) {
    roomTopic.publish(wrapper);
  }

  public void sendEveryoneMessage(ServerMessage message) {
    sendMessage(new RoomMessageWrapper(message, new VisibleForEveryone()));
  }

  public void sendOthersMessage(ServerMessage message, String exceptClientId) {
    sendMessage(new RoomMessageWrapper(message, new VisibleForOthers(exceptClientId)));
  }

  public void draw(List<DrawCommand> commandsList, String byId) {
    rooms.executeOnKey(roomId, new DrawProcessor(commandsList));

    sendOthersMessage(
        ServerMessage.newBuilder()
            .setDrawMessage(
                ServerMessage.DrawMessage.newBuilder().addAllCommands(commandsList).build())
            .build(),
        byId);
  }

  public boolean exists() {
    return getRoom() != null;
  }

  public void sendOneMessage(ServerMessage message, String toClientId) {
    sendMessage(new RoomMessageWrapper(message, new VisibleForOne(toClientId)));
  }

  public void clearCanvas() {
    rooms.executeOnKey(roomId, new ClearCanvasProcessor());

    sendEveryoneMessage(
        ServerMessage.newBuilder()
            .setClearCanvas(ServerMessage.ClearCanvasMessage.newBuilder().build())
            .build());
  }

  public void clearCanvas(String byId) {
    rooms.executeOnKey(roomId, new ClearCanvasProcessor());

    sendOthersMessage(
        ServerMessage.newBuilder()
            .setClearCanvas(ServerMessage.ClearCanvasMessage.newBuilder().build())
            .build(),
        byId);
  }

  public void initiateNextRound() {
    Room room = getRoom();

    System.out.println("message: " + room.getGameState());

    if (room.getGameState() != Room.GameState.NONE && room.getGameState() != Room.GameState.SCORE)
      return;

    List<String> words =
        new SecureRandom()
            .ints(0, Constants.WORDS.size())
            .distinct()
            .limit(3)
            .boxed()
            .map(index -> Constants.WORDS.get(index))
            .collect(Collectors.toList());

    Room updatedRoom = rooms.executeOnKey(roomId, new InitiateGameProcessor(words));

    sendOthersMessage(
        ServerMessage.newBuilder()
            .setChooseWord(
                ServerMessage.ChooseWordMessage.newBuilder()
                    .setPlayerId(updatedRoom.getDrawingId())
                    .build())
            .build(),
        updatedRoom.getDrawingId());

    sendOneMessage(
        ServerMessage.newBuilder()
            .setChooseWord(
                ServerMessage.ChooseWordMessage.newBuilder()
                    .setPlayerId(updatedRoom.getDrawingId())
                    .addAllWords(words)
                    .build())
            .build(),
        updatedRoom.getDrawingId());

    hazelcastInstance
        .getScheduledExecutorService("scheduledExecutorService")
        .schedule(
            new ChooseWordRandomlyTask(room.getId(), updatedRoom.getGameId()),
            10,
            TimeUnit.SECONDS);
  }

  public void endCurrentRound(ServerMessage.WordRevealMessage.RevealReason reason) {
    Room room = rooms.executeOnKey(roomId, new EndRoundProcessor());

    sendEveryoneMessage(
        ServerMessage.newBuilder()
            .setWordReveal(
                ServerMessage.WordRevealMessage.newBuilder()
                    .setWord(room.getCurrentWord())
                    .setReason(reason)
                    .build())
            .build());
  }

  public void chooseWord(int wordIndex) {
    Room room = rooms.executeOnKey(roomId, new ChooseWordProcessor(wordIndex));

    sendEveryoneMessage(
        ServerMessage.newBuilder()
            .setUpdatePlayerDrawing(
                ServerMessage.UpdateDrawingPlayerMessage.newBuilder()
                    .setDrawingId(room.getDrawingId())
                    .build())
            .build());

    sendOthersMessage(
        ServerMessage.newBuilder()
            .setCurrentWordUpdate(
                ServerMessage.CurrentWordUpdateMessage.newBuilder()
                    .setWord(
                        String.join("", Collections.nCopies(room.getCurrentWord().length(), "_")))
                    .build())
            .build(),
        room.getDrawingId());

    sendOneMessage(
        ServerMessage.newBuilder()
            .setCurrentWordUpdate(
                ServerMessage.CurrentWordUpdateMessage.newBuilder()
                    .setWord(room.getCurrentWord())
                    .build())
            .build(),
        room.getDrawingId());

    clearCanvas();

    hazelcastInstance
        .getScheduledExecutorService("scheduledExecutorService")
        .schedule(new EndRoundTask(room.getId(), room.getGameId()), 10, TimeUnit.SECONDS);
  }
}
