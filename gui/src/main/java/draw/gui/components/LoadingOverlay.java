package draw.gui.components;

import javafx.beans.property.BooleanProperty;
import javafx.beans.property.SimpleBooleanProperty;
import javafx.scene.control.Control;
import javafx.scene.control.Skin;

public class LoadingOverlay extends Control {

  public LoadingOverlay() {}

  @Override
  protected Skin<?> createDefaultSkin() {
    return new LoadingOverlaySkin(this);
  }

  private BooleanProperty showing;

  public final BooleanProperty showingProperty() {
    if (showing == null) {
      showing = new SimpleBooleanProperty(this, "visible", false);
    }

    return showing;
  }

  public final boolean getShowing() {
    return showing == null ? false : showing.get();
  }

  public final void setShowing(boolean visible) {
    showingProperty().set(visible);
  }

  public final void show() {
    setShowing(true);
  }

  public final void hide() {
    setShowing(false);
  }
}
