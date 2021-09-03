package draw.gui;

import com.google.inject.Guice;
import com.google.inject.Injector;
import draw.gui.components.Router;
import draw.gui.model.DrawClient;
import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

import java.net.URI;

public class App extends Application {
  @Override
  public void start(Stage stage) throws Exception {
    Group root = new Group();

    DrawClient client = new DrawClient(URI.create("ws://localhost:51234/draw"));

    Injector injector = Guice.createInjector(new DrawModule(root));
    AppContainer container = injector.getInstance(AppContainer.class);

    Scene scene = new Scene(root, 800, 600);
    scene.getStylesheets().add(getClass().getResource("styles/main.css").toExternalForm());

    stage.setScene(scene);
    stage.show();

    container.goTo("game");
  }

  public static void main(String[] args) {
    launch(args);
  }
}
