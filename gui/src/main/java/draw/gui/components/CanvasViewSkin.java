package draw.gui.components;

import javafx.scene.canvas.Canvas;
import javafx.scene.control.SkinBase;

public class CanvasViewSkin extends SkinBase<CanvasView> {
  private final Canvas canvas;

  protected CanvasViewSkin(CanvasView control) {
    super(control);

    canvas = new Canvas();

    getChildren().add(canvas);
  }


}
