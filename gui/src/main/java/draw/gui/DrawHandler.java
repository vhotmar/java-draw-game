package draw.gui;

import javafx.scene.input.MouseEvent;

public interface DrawHandler {
  void onMousePressed(MouseEvent e);

  void onMouseMoved(MouseEvent e);

  void onMouseReleased(MouseEvent mouseEvent);
}
