package draw.gui.view;

import draw.gui.components.chat.ChatView;
import draw.gui.components.score.ScoreView;
import javafx.geometry.Insets;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Priority;

import java.util.ResourceBundle;

public class LobbyView {
  private final GridPane root;
  private final ChatView chatView;
  private final ScoreView scoreView;
  private final GridPane mainGrid;
  private final Button startGameButton;
  private final Button copyRoomIdButton;
  private final GridPane infoGrid;
  private final Label roomIdLabel;
  private final Label roomId;

  public LobbyView(ResourceBundle resources) {
    root = createGridPane();

    chatView = new ChatView();
    chatView.setPrefWidth(150);
    mainGrid = createMainGrid();
    infoGrid = createInfoGrid();
    scoreView = new ScoreView();
    scoreView.setPrefWidth(150);

    roomIdLabel = new Label(resources.getString("lobby_screen.room_id"));
    roomId = new Label();
    startGameButton = new Button(resources.getString("lobby_screen.start_game"));
    copyRoomIdButton = new Button(resources.getString("lobby_screen.copy_room_id"));
    GridPane.setMargin(copyRoomIdButton, new Insets(15, 0, 0, 0));

    infoGrid.add(roomIdLabel, 0, 0);
    infoGrid.add(roomId, 1, 0);
    infoGrid.add(copyRoomIdButton, 1, 1);
    infoGrid.add(startGameButton, 1, 2);

    mainGrid.add(infoGrid, 1, 1);

    root.add(chatView, 0, 0);
    root.add(mainGrid, 1, 0);
    root.add(scoreView, 2, 0);
  }

  private GridPane createInfoGrid() {
    GridPane infoGrid = new GridPane();

    infoGrid.setVgap(5);
    infoGrid.setHgap(5);

    infoGrid
        .getColumnConstraints()
        .addAll(
            new ColumnConstraintsBuilder().minWidthUsePrefSize().setHgrow(Priority.NEVER).build(),
            new ColumnConstraintsBuilder().minWidthUsePrefSize().setHgrow(Priority.NEVER).build());

    return infoGrid;
  }

  private GridPane createMainGrid() {
    GridPane gridPane = new GridPane();

    gridPane
        .getColumnConstraints()
        .addAll(
            new ColumnConstraintsBuilder().minWidthUsePrefSize().setHgrow(Priority.ALWAYS).build(),
            new ColumnConstraintsBuilder()
                .minWidthUsePrefSize()
                .setHgrow(Priority.SOMETIMES)
                .build(),
            new ColumnConstraintsBuilder().minWidthUsePrefSize().setHgrow(Priority.ALWAYS).build());

    gridPane
        .getRowConstraints()
        .addAll(
            new RowConstraintsBuilder().setVgrow(Priority.ALWAYS).build(),
            new RowConstraintsBuilder().setVgrow(Priority.SOMETIMES).build(),
            new RowConstraintsBuilder().setVgrow(Priority.ALWAYS).build());

    return gridPane;
  }

  private GridPane createGridPane() {
    GridPane gridPane = new GridPane();

    gridPane
        .getColumnConstraints()
        .addAll(
            new ColumnConstraintsBuilder()
                .maxWidthUseComputedSize()
                .setHgrow(Priority.NEVER)
                .build(),
            new ColumnConstraintsBuilder().setHgrow(Priority.ALWAYS).build(),
            new ColumnConstraintsBuilder()
                .maxWidthUseComputedSize()
                .setHgrow(Priority.SOMETIMES)
                .build());
    gridPane
        .getRowConstraints()
        .addAll(new RowConstraintsBuilder().setVgrow(Priority.ALWAYS).build());

    return gridPane;
  }

  public ChatView getChatView() {
    return chatView;
  }

  public ScoreView getScoreView() {
    return scoreView;
  }

  public GridPane getRoot() {
    return root;
  }

  public Button getStartGameButton() {
    return startGameButton;
  }

  public Button getCopyRoomIdButton() {
    return copyRoomIdButton;
  }

  public Label getRoomId() {
    return roomId;
  }
}
