package draw.gui.components.score;

import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.collections.ObservableList;
import javafx.scene.control.Control;
import javafx.scene.control.Skin;

public class ScoreView extends Control {
  public ScoreView() {}

  @Override
  protected Skin<?> createDefaultSkin() {
    return new ScoreViewSkin(this);
  }

  private ObjectProperty<ObservableList<ScoreItem>> items;

  public final void setItems(ObservableList<ScoreItem> value) {
    itemsProperty().set(value);
  }

  public final ObservableList<ScoreItem> getItems() {
    return itemsProperty().get();
  }

  public final ObjectProperty<ObservableList<ScoreItem>> itemsProperty() {
    if (items == null) {
      items = new SimpleObjectProperty<>(this, "items");
    }

    return items;
  }
}
