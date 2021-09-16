package draw.gui.controller;

import draw.common.messages.ClientMessage;
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

import java.io.IOException;
import java.util.ResourceBundle;
import java.util.function.Consumer;

public class GameController implements Controller {
  private static final Logger logger = LogManager.getLogger(GameController.class);

  private final ScoreController scoreController;
  private final ChatController chatController;
  private final CanvasController canvasController;

  private final GameView view;
  private final AppContainer container;
  private final ResourceBundle resources;
  private final ClientService clientService;

  private final DrawClient.MessageHandler messageHandler;
  private final Consumer<Integer> wordSelectedHandler;

  public GameController(
      AppContainer container, ResourceBundle resources, ClientService clientService) {
    this.container = container;
    this.resources = resources;
    this.clientService = clientService;

    view = new GameView(resources);

    chatController = new ChatController(view.getChatView(), clientService);
    scoreController = new ScoreController(view.getScoreView(), clientService);
    canvasController = new CanvasController(view.getCanvasView(), clientService);

    messageHandler =
        (message) -> {
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
          } else if (message.hasWordReveal()) {
            ServerMessage.WordRevealMessage wordReveal = message.getWordReveal();
            view.showWordReveal(wordReveal.getWord(), wordReveal.getReason());
          } else if (message.hasGameEnd()) {
            container.nextScreen(new LobbyController(container, resources, clientService));
          }
        };

    wordSelectedHandler =
        index -> {
          try {
            clientService
                .getDrawClient()
                .sendMessage(
                    ClientMessage.newBuilder()
                        .setChooseWord(
                            ClientMessage.ChooseWordMessage.newBuilder()
                                .setWordIndex(index)
                                .build())
                        .build());
          } catch (IOException e) {
            logger.error("Could not send wordSelected message", e);
          }
        };
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

    view.getCurrentWordLabel()
        .textProperty()
        .bind(clientService.getStateManager().getState().currentWordProperty());

    view.setWordSelectedHandler(wordSelectedHandler);
  }

  public void destroy() {
    clientService.getDrawClient().removeMessageListener(messageHandler);

    chatController.destroy();
    scoreController.destroy();
    canvasController.destroy();

    view.getCurrentWordLabel().textProperty().unbind();

    view.setWordSelectedHandler(null);
  }
}
