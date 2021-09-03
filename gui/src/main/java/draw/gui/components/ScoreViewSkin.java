package draw.gui.components;

import javafx.scene.control.ListView;
import javafx.scene.control.SkinBase;

public class ScoreViewSkin extends SkinBase<ScoreView> {
  private final ListView<ScoreItem> scoreListView;

  protected ScoreViewSkin(ScoreView control) {
    super(control);

    scoreListView = new ListView<>();
    scoreListView.itemsProperty().bind(control.itemsProperty());
    scoreListView.setCellFactory((listView) -> new ScoreViewCell());
    scoreListView.setSelectionModel(new NoSelectionModel<ScoreItem>());
    scoreListView.setFocusTraversable(false);

    getChildren().add(scoreListView);
  }
}
