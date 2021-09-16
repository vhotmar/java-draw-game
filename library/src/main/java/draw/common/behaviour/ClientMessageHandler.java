package draw.common.behaviour;

import draw.common.messages.ClientMessage;

public abstract class ClientMessageHandler {
  public void handleMessage(ClientMessage message) {
    if (message.hasChatMessage()) {
      handleChatMessage(message.getChatMessage());
    } else if (message.hasConnectMessage()) {
      handleConnectMessage(message.getConnectMessage());
    } else if (message.hasStartGame()) {
      handleStartGameMessage(message.getStartGame());
    } else if (message.hasDraw()) {
      handleDrawMessage(message.getDraw());
    } else if (message.hasClearCanvas()) {
      handleClearCanvasMessage(message.getClearCanvas());
    } else if (message.hasChooseWord()) {
      handleChooseWordMessage(message.getChooseWord());
    }
  }

  protected void handleClearCanvasMessage(ClientMessage.ClearCanvasMessage clearCanvas) {}

  protected void handleChooseWordMessage(ClientMessage.ChooseWordMessage chooseWord) {}

  protected void handleDrawMessage(ClientMessage.DrawMessage draw) {}

  protected void handleStartGameMessage(ClientMessage.StartGameMessage startGame) {}

  protected void handleConnectMessage(ClientMessage.ConnectMessage connectMessage) {}

  protected void handleChatMessage(ClientMessage.ChatMessage message) {}
}
