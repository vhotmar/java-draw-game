package draw.gui.components.score;

import javafx.geometry.HPos;
import javafx.scene.control.Label;
import javafx.scene.control.ListCell;
import javafx.scene.layout.ColumnConstraints;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Priority;

public class ScoreViewCell extends ListCell<ScoreItem>
{
  private final GridPane gridPane;
  private final Label score;
  private final Label name;
  private final Label position;

  public ScoreViewCell() {
    gridPane = new GridPane();

    name = new Label();
    position = new Label();
    score = new Label();

    gridPane.add(position, 0, 0, 1, 2);
    gridPane.add(name, 1, 0);
    gridPane.add(score, 1, 1);

    ColumnConstraints positionColumn = new ColumnConstraints();
    positionColumn.setHalignment(HPos.CENTER);
    positionColumn.setHgrow(Priority.SOMETIMES);

    ColumnConstraints labelColumn = new ColumnConstraints();
    labelColumn.setHalignment(HPos.CENTER);
    labelColumn.setHgrow(Priority.ALWAYS);

    gridPane.getColumnConstraints().addAll(positionColumn, labelColumn);
  }

  @Override
  protected void updateItem(ScoreItem item, boolean empty) {
    super.updateItem(item, empty);

    if (empty || item == null) {
      setText(null);
      setGraphic(null);
    } else {
      name.setText(item.name);
      position.setText("#" + item.position);
      score.setText(String.valueOf(item.score));

      setText(null);
      setGraphic(gridPane);
    }
  }
}


