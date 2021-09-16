package draw.gui;

import draw.gui.controller.Controller;
import javafx.scene.layout.Pane;

public class AppContainer {

  private Pane appRoot;
  private Controller currentScreenController;

  public AppContainer(Pane appRoot) {
    this.appRoot = appRoot;
  }

  public void nextScreen(Controller screenController) {
    if (currentScreenController != null) {
      currentScreenController.destroy();
    }

    currentScreenController = screenController;
    currentScreenController.initialize();

    this.appRoot.getChildren().clear();
    this.appRoot.getChildren().add(currentScreenController.getRoot());
  }
}
