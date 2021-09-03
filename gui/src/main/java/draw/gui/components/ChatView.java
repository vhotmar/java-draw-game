package draw.gui.components;

import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.collections.ObservableList;
import javafx.scene.control.Control;
import javafx.scene.control.Skin;

public class ChatView extends Control {
  public ChatView() {

  }

  @Override
  protected Skin<?> createDefaultSkin() {
    return new ChatViewSkin(this);
  }

  private ObjectProperty<ObservableList<ChatItem>> items;

  public final void setItems(ObservableList<ChatItem> value) {
    itemsProperty().set(value);
  }

  public final ObservableList<ChatItem> getItems() {
    return items == null ? null : items.get();
  }

  public final ObjectProperty<ObservableList<ChatItem>> itemsProperty() {
    if (items == null) {
      items = new SimpleObjectProperty<>(this, "items");
    }

    return items;
  }
}
