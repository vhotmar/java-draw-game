package draw.common.behaviour;

import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;
import draw.common.behaviour.services.ClientService;
import draw.common.behaviour.services.RoomService;

public class ChatHandler extends ClientMessageHandler {
  private final ClientService clientService;
  private final RoomService roomService;

  public ChatHandler(ClientService clientService, RoomService roomService) {
    this.clientService = clientService;
    this.roomService = roomService;
  }

  @Override
  protected void handleChatMessage(ClientMessage.ChatMessage chatMessage) {
    roomService.sendOthersMessage(
        ServerMessage.newBuilder()
            .setChatMessage(
                ServerMessage.ChatMessage.newBuilder()
                    .setMessage(chatMessage.getMessage())
                    .setPlayerId(clientService.getClientId())
                    .build())
            .build(),
        clientService.getClientId());
  }
}
