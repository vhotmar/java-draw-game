package draw.gui.controller;

import draw.common.messages.ServerMessage;
import draw.gui.AppContainer;
import draw.gui.DrawClient;
import draw.gui.model.ClientService;
import draw.gui.view.ConnectView;
import jakarta.websocket.DeploymentException;
import javafx.application.Platform;
import javafx.beans.binding.Bindings;
import javafx.event.ActionEvent;
import javafx.scene.Node;
import javafx.scene.control.Alert;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.ResourceBundle;

public class ConnectController implements Controller {
  private static final Logger logger = LogManager.getLogger(ConnectController.class);

  private final ConnectView view;
  private final ResourceBundle resources;
  private Alert errorDialog;
  private AppContainer container;

  public ConnectController(AppContainer container, ResourceBundle resources) {
    this.container = container;
    this.resources = resources;

    errorDialog = new Alert(Alert.AlertType.ERROR, "");

    view = new ConnectView(resources);
  }

  @Override
  public void destroy() {}

  @Override
  public Node getRoot() {
    return view.getRoot();
  }

  @Override
  public void initialize() {
    view.getCodeTextField()
        .managedProperty()
        .bind(view.getExistingGameCheckBox().selectedProperty());
    view.getCodeTextField()
        .visibleProperty()
        .bind(view.getExistingGameCheckBox().selectedProperty());

    view.getCodeLabel().managedProperty().bind(view.getExistingGameCheckBox().selectedProperty());
    view.getCodeLabel().visibleProperty().bind(view.getExistingGameCheckBox().selectedProperty());

    view.getConnectButton()
        .disableProperty()
        .bind(
            Bindings.or(
                view.getNameTextField().textProperty().isEmpty(),
                Bindings.and(
                    view.getExistingGameCheckBox().selectedProperty(),
                    view.getCodeTextField().textProperty().isEmpty())));

    view.getConnectButton().setOnAction(this::handleConnectClick);
  }

  public void handleConnectClick(ActionEvent actionEvent) {
    view.getLoadingOverlay().show();

    String name = view.getNameTextField().getText().trim();
    String roomId = view.getCodeTextField().getText().trim();

    URI serverURI;

    try {
      serverURI = new URI("ws://localhost:8080/server/draw");
    } catch (URISyntaxException e) {
      logger.error("Error while parsing URI", e);

      showErrorAndWait("connect_screen.invalid_server_uri_message");
      view.getLoadingOverlay().hide();

      return;
    }

    ClientService service;

    try {
      DrawClient client = new DrawClient(serverURI);

      service = new ClientService(client);
    } catch (DeploymentException e) {
      logger.error("Error while parsing URI", e);

      showErrorAndWait("connect_screen.invalid_server_uri_message");
      view.getLoadingOverlay().hide();

      return;
    } catch (IOException e) {
      logger.error("Error while connecting", e);

      showErrorAndWait("connect_screen.error_while_connecting_message");
      view.getLoadingOverlay().hide();

      return;
    }

    try {
      service.connect(
          name,
          roomId,
          new ClientService.ConnectHandler() {
            @Override
            public void handleShowRoom(ServerMessage.ShowRoomMessage showRoom) {
              if (showRoom.getInGame()) {
                container.nextScreen(new GameController(container, resources, service));
              } else {
                container.nextScreen(new LobbyController(container, resources, service));
              }
              view.getLoadingOverlay().hide();
            }

            @Override
            public void handleError(ServerMessage.ErrorMessage errorMessage) {
              showErrorAndWait("connect_screen.server_returned_error");
              view.getLoadingOverlay().hide();
            }
          });
    } catch (IOException e) {
      logger.error("Error while sending connect message to server");

      showErrorAndWait("connect_screen.server_returned_error");
      view.getLoadingOverlay().hide();
    }
  }

  private void showErrorAndWait(String resource) {
    errorDialog.getDialogPane().setContentText(resources.getString(resource));
    errorDialog.showAndWait();
  }
}
