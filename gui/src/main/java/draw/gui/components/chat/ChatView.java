package draw.gui.components.chat;

import javafx.beans.property.*;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.control.Control;
import javafx.scene.control.Skin;

public class ChatView extends Control {
  public ChatView() {}

  @Override
  protected Skin<?> createDefaultSkin() {
    return new ChatViewSkin(this);
  }

  private ObjectProperty<ObservableList<ChatItem>> items;

  public void setItems(ObservableList<ChatItem> value) {
    itemsProperty().set(value);
  }

  public ObservableList<ChatItem> getItems() {
    return itemsProperty().get();
  }

  public ObjectProperty<ObservableList<ChatItem>> itemsProperty() {
    if (items == null) {
      items = new SimpleObjectProperty<>(this, "items");
    }

    return items;
  }

  private ObjectProperty<EventHandler<ActionEvent>> onNewMessage;

  public void setOnNewMessage(EventHandler<ActionEvent> value) {
    onNewMessageProperty().set(value);
  }

  public EventHandler<ActionEvent> getOnNewMessage() {
    return onNewMessageProperty().get();
  }

  public ObjectProperty<EventHandler<ActionEvent>> onNewMessageProperty() {
    if (onNewMessage == null) {
      onNewMessage = new SimpleObjectProperty<>(this, "onNewMessage");
    }

    return onNewMessage;
  }

  private StringProperty messageText;

  public StringProperty messageTextProperty() {
    if (messageText == null) {
      messageText = new SimpleStringProperty(this, "messageText");
    }

    return messageText;
  }

  public String getMessageText() {
    return messageTextProperty().get();
  }

  public void setMessageText(String value) {
    messageTextProperty().set(value);
  }
}
