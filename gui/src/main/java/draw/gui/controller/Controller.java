package draw.gui.controller;

import javafx.scene.Node;

public interface Controller {
  void destroy();

  Node getRoot();

  void initialize();
}
