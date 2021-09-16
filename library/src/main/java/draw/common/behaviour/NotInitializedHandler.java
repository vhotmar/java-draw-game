package draw.common.behaviour;

import com.hazelcast.core.HazelcastInstance;
import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;
import draw.common.behaviour.services.ClientService;
import draw.common.RandomUtils;
import draw.common.behaviour.services.RoomService;
import draw.common.behaviour.model.Client;
import draw.common.behaviour.model.Player;
import draw.common.behaviour.model.Room;

import java.util.Map;
import java.util.stream.Collectors;

public class NotInitializedHandler extends ClientMessageHandler {
  private final HazelcastInstance hazelcastInstance;
  private final ClientService clientService;

  public NotInitializedHandler(HazelcastInstance hazelcastInstance, ClientService clientService) {
    this.hazelcastInstance = hazelcastInstance;
    this.clientService = clientService;
  }

  @Override
  protected void handleConnectMessage(ClientMessage.ConnectMessage connectMessage) {
    String clientName = connectMessage.getName();

    if (clientName.isEmpty()) {
      clientService.sendError("User name can't be empty");
      return;
    }

    String roomId = connectMessage.getRoomId();

    if (!roomId.isEmpty() && !(new RoomService(hazelcastInstance, roomId)).exists()) {
      clientService.sendError("Room with id: \"" + roomId + "\" does not exists");
      return;
    } else {
      if (roomId.isEmpty()) {
        roomId = RandomUtils.generateId();
      }
    }

    Client client = clientService.updateInfo(clientName, roomId);

    RoomService roomService = new RoomService(hazelcastInstance, roomId);
    Room room = roomService.join(client);
    clientService.joinedRoom(roomId);

    Map<String, Client> clients =
        clientService.getClients(
            room.getPlayers().values().stream()
                .map(Player::getId)
                .collect(Collectors.toSet()));

    clientService.sendMessage(
        ServerMessage.newBuilder()
            .setShowRoom(
                ServerMessage.ShowRoomMessage.newBuilder()
                    .setRoomId(roomId)
                    .setClientId(clientService.getClientId())
                    .setInGame(room.getRoomState() == Room.RoomState.GAME)
                    .setOwnerId(room.getOwnerId())
                    .addAllPlayers(
                        clients.values().stream()
                            .filter(item -> !item.getId().equals(clientService.getClientId()))
                            .map(
                                item ->
                                    ServerMessage.ShowRoomMessage.Player.newBuilder()
                                        .setPlayerId(item.getId())
                                        .setPlayerName(item.getName())
                                        .build())
                            .collect(Collectors.toList()))
                    .addAllDrawCommands(room.getDrawCommands())
                    .build())
            .build());
  }
}
