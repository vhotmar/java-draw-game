package draw.gui;

import draw.gui.components.LoadingOverlay;
import draw.gui.components.Router;
import javafx.fxml.FXMLLoader;
import javafx.scene.Group;
import javafx.scene.layout.StackPane;
import javax.inject.Provider;
import java.io.IOException;

public class AppContainer {
  private final Router router;
  private final LoadingOverlay loadingOverlay;
  private final StackPane mainViewPane;
  private Group appRoot;

  public AppContainer(@DrawModule.AppRoot Group appRoot, Provider<FXMLLoader> fxmlLoaderProvider) {
    this.appRoot = appRoot;

    this.loadingOverlay = new LoadingOverlay();
    this.mainViewPane = new StackPane();

    this.appRoot.getChildren().addAll(this.mainViewPane, this.loadingOverlay);

    this.router = new Router(this.mainViewPane, fxmlLoaderProvider);
  }

  public Router getRouter() {
    return router;
  }

  public LoadingOverlay getLoadingOverlay() {
    return loadingOverlay;
  }

  public void goTo(String routeLabel) throws IOException {
    loadingOverlay.show();
    router.goTo(routeLabel);
    loadingOverlay.hide();
  }
}
