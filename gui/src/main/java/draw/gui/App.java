package draw.gui;

import draw.gui.controller.ConnectController;
import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

import java.util.Locale;
import java.util.ResourceBundle;

public class App extends Application {
  @Override
  public void start(Stage stage) {
    StackPane root = new StackPane();

    AppContainer container = new AppContainer(root);
    ResourceBundle bundle = ResourceBundle.getBundle("bundles.DrawBundle", new Locale("en", "EN"));

    Scene scene = new Scene(root, 800, 600);
    //noinspection ConstantConditions
    scene.getStylesheets().add(getClass().getResource("styles/main.css").toExternalForm());

    container.nextScreen(new ConnectController(container, bundle));

    stage.setScene(scene);
    stage.show();
  }

  public static void main(String[] args) {
    launch(args);
  }
}
