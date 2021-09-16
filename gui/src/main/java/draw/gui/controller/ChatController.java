package draw.gui.controller;

import draw.gui.components.chat.ChatView;
import draw.gui.model.ClientService;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;

public class ChatController {
  private final ChatView view;
  private final ClientService clientService;
  private final EventHandler<ActionEvent> newMessageHandler;

  public ChatController(ChatView view, ClientService clientService) {
    this.view = view;
    this.clientService = clientService;
    this.newMessageHandler = (e) -> {
      clientService.getChatManager().sendMessage(view.getMessageText());
      view.setMessageText("");
    };
  }

  public void initialize() {
    view.setItems(clientService.getChatManager().getChatItems());
    view.setOnNewMessage(this.newMessageHandler);
  }

  public void destroy() {
    view.setItems(null);
    view.setOnNewMessage(null);
  }
}
