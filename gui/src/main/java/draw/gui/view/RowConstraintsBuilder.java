package draw.gui.view;

import javafx.scene.layout.Priority;
import javafx.scene.layout.Region;
import javafx.scene.layout.RowConstraints;

public class RowConstraintsBuilder {
  private final RowConstraints rowConstraints;

  public RowConstraintsBuilder() {
    rowConstraints = new RowConstraints();
  }

  public RowConstraintsBuilder setVgrow(Priority value) {
    rowConstraints.setVgrow(value);

    return this;
  }

  public RowConstraintsBuilder setMinHeight(double value) {
    rowConstraints.setMinHeight(value);

    return this;
  }

  public RowConstraintsBuilder minHeightUsePrefSize() {
    rowConstraints.setMinHeight(Region.USE_PREF_SIZE);

    return this;
  }

  public RowConstraints build() {
    return rowConstraints;
  }

  public RowConstraintsBuilder minHeightUseComputedSize() {
    rowConstraints.setMinHeight(Region.USE_COMPUTED_SIZE);

    return this;
  }
}
