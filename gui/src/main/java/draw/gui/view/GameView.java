package draw.gui.view;

import draw.common.messages.ServerMessage;
import draw.gui.components.DrawCanvas;
import draw.gui.components.chat.ChatView;
import draw.gui.components.score.ScoreView;
import javafx.geometry.HPos;
import javafx.geometry.Insets;
import javafx.geometry.VPos;
import javafx.scene.Node;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.*;
import javafx.scene.paint.Color;

import java.util.List;
import java.util.ResourceBundle;
import java.util.function.Consumer;

public class GameView {
  private final DrawCanvas canvasView;
  private final ChatView chatView;
  private final ScoreView scoreView;
  private final StackPane root;
  private final GridPane layoutRoot;
  private final GridPane overlayRoot;

  private final HBox wordButtonsGroup;
  private final Label chooseWordLabel;
  private final VBox wordButtonsRoot;
  private final Label anotherPlayerIsChoosingWordLabel;
  private final Label playerNameLabel;
  private final HBox anotherPlayerIsChoosingWordRoot;
  private final Label currentWordLabel;
  private final GridPane overlayInnerBox;

  private Consumer<Integer> wordSelectedHandler;

  public GameView(ResourceBundle resources) {
    root = new StackPane();

    layoutRoot = createLayoutRoot();
    overlayRoot = createOverlayRoot();
    overlayInnerBox = createOverlayInnerBox();
    overlayRoot.add(overlayInnerBox, 1, 1);

    chatView = new ChatView();
    chatView.setPrefWidth(150);
    scoreView = new ScoreView();
    canvasView = new DrawCanvas();
    scoreView.setPrefWidth(150);

    canvasView.setWidth(500);
    canvasView.setHeight(500);

    currentWordLabel = new Label();
    GridPane.setHalignment(currentWordLabel, HPos.CENTER);
    GridPane.setValignment(currentWordLabel, VPos.CENTER);

    layoutRoot.add(chatView, 0, 0, 1, 3);
    layoutRoot.add(currentWordLabel, 1, 0);
    layoutRoot.add(canvasView, 1, 1, 1, 2);
    layoutRoot.add(scoreView, 2, 0, 1, 3);

    root.getChildren().addAll(layoutRoot, overlayRoot);

    hideOverlay();

    wordButtonsGroup = new HBox();
    wordButtonsGroup.setSpacing(5);

    wordButtonsRoot = new VBox();
    wordButtonsRoot.setSpacing(5);
    chooseWordLabel = new Label(resources.getString("game_screen.choose_word"));

    wordButtonsRoot.getChildren().addAll(chooseWordLabel, wordButtonsGroup);

    anotherPlayerIsChoosingWordRoot = new HBox();
    anotherPlayerIsChoosingWordRoot.setSpacing(5);

    anotherPlayerIsChoosingWordLabel =
        new Label(resources.getString("game_screen.another_player_is_choosing_word"));
    playerNameLabel = new Label();

    anotherPlayerIsChoosingWordRoot
        .getChildren()
        .addAll(anotherPlayerIsChoosingWordLabel, playerNameLabel);
  }

  public void setWordSelectedHandler(Consumer<Integer> consumer) {
    wordSelectedHandler = consumer;
  }

  public void showAnotherPlayerIsChoosingWordOverlay(String playerName) {
    playerNameLabel.setText(playerName);

    showOverlayWith(anotherPlayerIsChoosingWordRoot);
  }

  public void showWordsOverlay(List<String> words) {
    wordButtonsGroup.getChildren().clear();

    int index = 0;

    for (String word : words) {
      int currentIndex = index;
      Button wordButton = new Button(word);
      wordButton.setOnAction((ev) -> buttonSelected(currentIndex));
      index++;

      wordButtonsGroup.getChildren().add(wordButton);
    }

    showOverlayWith(wordButtonsRoot);
  }

  private void showOverlayWith(Node node) {
    overlayInnerBox.getChildren().clear();
    overlayInnerBox.add(node, 1, 1);

    overlayRoot.setVisible(true);
    overlayRoot.setManaged(true);
  }

  private void buttonSelected(int currentIndex) {
    if (wordSelectedHandler == null) return;

    wordSelectedHandler.accept(currentIndex);
  }

  public void hideOverlay() {
    overlayRoot.setVisible(false);
    overlayRoot.setManaged(false);
  }

  private GridPane createLayoutRoot() {
    GridPane gridPane = new GridPane();

    gridPane
        .getColumnConstraints()
        .addAll(
            new ColumnConstraintsBuilder().setHgrow(Priority.SOMETIMES).build(),
            new ColumnConstraintsBuilder().setHgrow(Priority.ALWAYS).build(),
            new ColumnConstraintsBuilder().setHgrow(Priority.SOMETIMES).build());
    gridPane
        .getRowConstraints()
        .addAll(
            new RowConstraintsBuilder().setVgrow(Priority.SOMETIMES).build(),
            new RowConstraintsBuilder().setVgrow(Priority.ALWAYS).build(),
            new RowConstraintsBuilder().setVgrow(Priority.SOMETIMES).build());

    return gridPane;
  }

  private GridPane createOverlayRoot() {
    GridPane gridPane = new GridPane();

    gridPane.setBackground(
        new Background(
            new BackgroundFill(new Color(0, 0, 0, 0.4), CornerRadii.EMPTY, Insets.EMPTY)));

    gridPane
        .getColumnConstraints()
        .addAll(
            new ColumnConstraintsBuilder().setHgrow(Priority.ALWAYS).build(),
            new ColumnConstraintsBuilder().setHgrow(Priority.SOMETIMES).build(),
            new ColumnConstraintsBuilder().setHgrow(Priority.ALWAYS).build());
    gridPane
        .getRowConstraints()
        .addAll(
            new RowConstraintsBuilder().setVgrow(Priority.ALWAYS).build(),
            new RowConstraintsBuilder().setVgrow(Priority.SOMETIMES).build(),
            new RowConstraintsBuilder().setVgrow(Priority.ALWAYS).build());

    return gridPane;
  }

  private GridPane createOverlayInnerBox() {
    GridPane gridPane = new GridPane();

    gridPane.setBackground(
        new Background(
            new BackgroundFill(Color.WHITE, CornerRadii.EMPTY, Insets.EMPTY)));

    gridPane
        .getColumnConstraints()
        .addAll(
            new ColumnConstraintsBuilder().setMinWidth(10).setHgrow(Priority.SOMETIMES).build(),
            new ColumnConstraintsBuilder().setMinWidth(100).setHgrow(Priority.ALWAYS).build(),
            new ColumnConstraintsBuilder().setMinWidth(10).setHgrow(Priority.SOMETIMES).build());
    gridPane
        .getRowConstraints()
        .addAll(
            new RowConstraintsBuilder().setMinHeight(10).setVgrow(Priority.SOMETIMES).build(),
            new RowConstraintsBuilder().setMinHeight(100).setVgrow(Priority.ALWAYS).build(),
            new RowConstraintsBuilder().setMinHeight(10).setVgrow(Priority.SOMETIMES).build());

    return gridPane;
  }

  public DrawCanvas getCanvasView() {
    return canvasView;
  }

  public ChatView getChatView() {
    return chatView;
  }

  public ScoreView getScoreView() {
    return scoreView;
  }

  public Node getRoot() {
    return root;
  }

  public Label getCurrentWordLabel() {
    return currentWordLabel;
  }

  public void showWordReveal(String word, ServerMessage.WordRevealMessage.RevealReason reason) {

  }
}
