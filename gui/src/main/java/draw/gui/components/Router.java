package draw.gui.components;

import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.layout.Pane;

import javax.inject.Inject;
import javax.inject.Provider;
import java.io.IOException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

public class Router {
    private final Pane root;
    private final Provider<FXMLLoader> fxmlLoaderProvider;
    private final Map<String, URL> routes = new HashMap<>();

    public Router(Pane root, Provider<FXMLLoader> fxmlLoaderProvider) {
        this.root = root;
        this.fxmlLoaderProvider = fxmlLoaderProvider;
    }

    public void when(String routeLabel, URL sceneLocation) {
        routes.put(routeLabel, sceneLocation);
    }

    public void goTo(String routeLabel) throws IOException {
        loadNewRoute(routes.get(routeLabel));
    }

    private void loadNewRoute(URL location) throws IOException {
        FXMLLoader loader = fxmlLoaderProvider.get();
        loader.setLocation(location);
        Parent parent = loader.load();

        root.getChildren().clear();
        root.getChildren().add(parent);
    }
}
