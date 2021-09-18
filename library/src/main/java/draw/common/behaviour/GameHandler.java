package draw.common.behaviour;

import draw.common.behaviour.model.Room;
import draw.common.behaviour.services.ClientService;
import draw.common.behaviour.services.RoomService;
import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;

public class GameHandler extends ClientMessageHandler {
  private final ClientService clientService;
  private final RoomService roomService;

  public GameHandler(
      ClientService clientService, RoomService roomService) {
    this.clientService = clientService;
    this.roomService = roomService;
  }

  @Override
  protected void handleChatMessage(ClientMessage.ChatMessage message) {
    Room room = roomService.getRoom();
    if (room.getRoomState() != Room.RoomState.GAME || room.getGameState() != Room.GameState.DRAWING) {
      return;
    }

    if (room.getCurrentWord().equals(message.getMessage())) {
      roomService.playerGuessed(clientService.getClientId());

      ServerMessage.WordRevealMessage.RevealReason reason = roomService.shouldRoundEnd();

      if (reason != null) {
        roomService.endCurrentRound(reason);
        roomService.initiateNextRoundOrEndGame();
      }
    }
  }

  @Override
  protected void handleClearCanvasMessage(ClientMessage.ClearCanvasMessage clearCanvas) {
    roomService.clearCanvas(clientService.getClientId());
  }

  @Override
  protected void handleChooseWordMessage(ClientMessage.ChooseWordMessage chooseWord) {
    Room room = roomService.getRoom();

    if (room.getRoomState() != Room.RoomState.GAME || room.getGameState() != Room.GameState.WORD_CHOOSE) {
      clientService.sendError("Can't choose, word because the game is in invalid state");

      return;
    }

    if (!clientService.getClientId().equals(roomService.getRoom().getDrawingId())) {
      clientService.sendError("Can't draw, because somebody else is drawing!");

      return;
    }

    if (room.getWordSelection().size() <= chooseWord.getWordIndex()) {
      clientService.sendError("Can't choose that word (index is out of bounds)!");

      return;
    }

    roomService.chooseWord(chooseWord.getWordIndex());
  }

  @Override
  protected void handleDrawMessage(ClientMessage.DrawMessage draw) {
    Room room = roomService.getRoom();

    if (room.getRoomState() != Room.RoomState.GAME || room.getGameState() != Room.GameState.DRAWING) {
      clientService.sendError("Can't draw, because the game is in invalid state");

      return;
    }

    if (!clientService.getClientId().equals(roomService.getRoom().getDrawingId())) {
      clientService.sendError("Can't draw, because somebody else is drawing!");

      return;
    }

    roomService.draw(draw.getCommandsList(), clientService.getClientId());
  }
}
