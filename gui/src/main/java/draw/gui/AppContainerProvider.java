package draw.gui;

import draw.gui.components.Router;
import javafx.fxml.FXMLLoader;
import javafx.scene.Group;
import javafx.scene.layout.Pane;

import javax.inject.Inject;
import javax.inject.Provider;

public class AppContainerProvider implements Provider<AppContainer> {
  private final Group appRoot;
  private final Provider<FXMLLoader> fxmlLoaderProvider;

  @Inject
  public AppContainerProvider(@DrawModule.AppRoot Group appRoot, Provider<FXMLLoader> fxmlLoaderProvider) {
    this.appRoot = appRoot;
    this.fxmlLoaderProvider = fxmlLoaderProvider;
  }

  @Override
  public AppContainer get() {
    AppContainer container = new AppContainer(appRoot, fxmlLoaderProvider);
    Router router = container.getRouter();

    router.when("connect", getClass().getResource("ConnectView.fxml"));
    router.when("welcome", getClass().getResource("WelcomeView.fxml"));
    router.when("game", getClass().getResource("GameView.fxml"));

    return container;
  }
}
