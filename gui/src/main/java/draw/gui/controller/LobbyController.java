package draw.gui.controller;

import draw.common.messages.ServerMessage;
import draw.gui.AppContainer;
import draw.gui.DrawClient;
import draw.gui.model.ClientService;
import draw.gui.view.LobbyView;
import javafx.application.Platform;
import javafx.beans.binding.Bindings;
import javafx.beans.binding.BooleanBinding;
import javafx.scene.Node;
import javafx.scene.input.Clipboard;
import javafx.scene.input.ClipboardContent;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ResourceBundle;

public class LobbyController implements Controller {
  private static final Logger logger = LogManager.getLogger(LobbyController.class);

  private final AppContainer container;
  private final ResourceBundle resources;
  private final ClientService clientService;

  private final DrawClient.MessageHandler handler =
      new DrawClient.MessageHandler() {
        @Override
        public void handleMessage(ServerMessage message) {
          if (message.hasGameStarted()) {
            container.nextScreen(new GameController(container, resources, clientService));
          }
        }
      };

  private LobbyView view;
  private ChatController chatController;
  private final ScoreController scoreController;

  public LobbyController(
      AppContainer container, ResourceBundle resources, ClientService clientService) {
    this.container = container;
    this.resources = resources;
    this.clientService = clientService;

    view = new LobbyView(resources);

    chatController = new ChatController(view.getChatView(), clientService);
    scoreController = new ScoreController(view.getScoreView(), clientService);

    view.getCopyRoomIdButton()
        .setOnAction(
            (e) -> {
              ClipboardContent content = new ClipboardContent();
              content.putString(clientService.getStateManager().getState().getRoomId());

              Clipboard.getSystemClipboard().setContent(content);
            });

    view.getStartGameButton().setOnAction((e) -> clientService.startGame());
  }

  @Override
  public void initialize() {
    chatController.initialize();
    scoreController.initialize();

    clientService.getDrawClient().addMessageListener(handler);

    view.getRoomId()
        .textProperty()
        .bind(clientService.getStateManager().getState().roomIdProperty());

    BooleanBinding isOwner =
        Bindings.equal(
            clientService.getStateManager().getState().clientIdProperty(),
            clientService.getStateManager().getState().ownerIdProperty());

    BooleanBinding atLeastTwoPlayers =
        Bindings.greaterThan(
            Bindings.size(clientService.getStateManager().getConnectedClientInfos()), 1);

    BooleanBinding startGameAllowed = Bindings.and(isOwner, atLeastTwoPlayers);

    view.getStartGameButton().visibleProperty().bind(startGameAllowed);
    view.getStartGameButton().managedProperty().bind(startGameAllowed);
  }

  @Override
  public void destroy() {
    chatController.destroy();
    scoreController.destroy();

    clientService.getDrawClient().removeMessageListener(handler);

    view.getRoomId().textProperty().unbind();

    view.getStartGameButton().visibleProperty().unbind();
    view.getStartGameButton().managedProperty().unbind();
  }

  @Override
  public Node getRoot() {
    return view.getRoot();
  }
}
