package draw.common.behaviour;

import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;
import draw.common.behaviour.services.ClientService;
import draw.common.behaviour.services.RoomService;
import draw.common.behaviour.model.Room;

public class LobbyHandler extends ClientMessageHandler {
  private final ClientService clientService;
  private final RoomService roomService;

  public LobbyHandler(ClientService clientService, RoomService roomService) {
    this.clientService = clientService;
    this.roomService = roomService;
  }

  @Override
  protected void handleStartGameMessage(ClientMessage.StartGameMessage startGame) {
    Room room = roomService.getRoom();

    if (room == null) {
      clientService.sendError("Invalid state");
      clientService.close();
      return;
    }

    if (!room.getOwnerId().equals(clientService.getClientId())) {
      clientService.sendError("Can't start game - Only leader can start game");
      return;
    }

    if (room.getPlayers().size() == 1) {
      clientService.sendError("Can't start game - Only one person in lobby");
      return;
    }

    roomService.sendEveryoneMessage(
        ServerMessage.newBuilder()
            .setGameStarted(ServerMessage.GameStartedMessage.newBuilder().build())
            .build());

    roomService.initiateNextRound();
  }
}
