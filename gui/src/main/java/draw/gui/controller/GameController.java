package draw.gui.controller;

import draw.common.messages.ServerMessage;
import draw.gui.AppContainer;
import draw.gui.DrawClient;
import draw.gui.model.ClientService;
import draw.gui.model.State;
import draw.gui.view.GameView;
import javafx.application.Platform;
import javafx.scene.Node;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.ResourceBundle;

public class GameController implements Controller {
  private static final Logger logger = LogManager.getLogger(GameController.class);

  private final ScoreController scoreController;
  private final ChatController chatController;
  private final CanvasController canvasController;

  private GameView view;
  private final AppContainer container;
  private final ResourceBundle resources;
  private ClientService clientService;

  private final DrawClient.MessageHandler messageHandler =
      (message) -> {
        Platform.runLater(
            () -> {
              if (message.hasChooseWord()) {
                ServerMessage.ChooseWordMessage chooseWordMessage = message.getChooseWord();
                State state = clientService.getStateManager().getState();

                if (!chooseWordMessage.getPlayerId().equals(state.getClientId())) {
                  view.showAnotherPlayerIsChoosingWordOverlay(
                      state.getClientName(chooseWordMessage.getPlayerId()));
                  return;
                }

                view.showWordsOverlay(chooseWordMessage.getWordsList());
              } else if (message.hasUpdatePlayerDrawing()) {
                view.hideOverlay();
              }
            });
        // choose word (id, word list) <-
        // choose word (word index) -> // only the selected user
        // player drawing (id) <-
        // current word (word) <-
        // canvas clear <-

        // draw begins!!

        // player guessed word <- / timeout
        // lobby reveal
      };

  public GameController(
      AppContainer container, ResourceBundle resources, ClientService clientService) {
    this.container = container;
    this.resources = resources;
    this.clientService = clientService;

    view = new GameView(resources);

    chatController = new ChatController(view.getChatView(), clientService);
    scoreController = new ScoreController(view.getScoreView(), clientService);
    canvasController = new CanvasController(view.getCanvasView(), clientService);
  }

  @Override
  public Node getRoot() {
    return view.getRoot();
  }

  @Override
  public void initialize() {
    clientService.getDrawClient().addMessageListener(messageHandler);

    chatController.initialize();
    scoreController.initialize();
    canvasController.initialize();

    view.getCurrentWordLabel().textProperty().bind(clientService.getStateManager().getState().currentWordProperty());
  }

  public void destroy() {
    clientService.getDrawClient().removeMessageListener(messageHandler);

    chatController.destroy();
    scoreController.destroy();
    canvasController.destroy();

    view.getCurrentWordLabel().textProperty().unbind();
  }
}
