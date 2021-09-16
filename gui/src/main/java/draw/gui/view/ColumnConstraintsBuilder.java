package draw.gui.view;

import javafx.scene.layout.ColumnConstraints;
import javafx.scene.layout.Priority;
import javafx.scene.layout.Region;

public class ColumnConstraintsBuilder {
  private final ColumnConstraints columnConstraints;

  public ColumnConstraintsBuilder() {
    columnConstraints = new ColumnConstraints();
  }

  public ColumnConstraintsBuilder setHgrow(Priority value) {
    columnConstraints.setHgrow(value);

    return this;
  }

  public ColumnConstraintsBuilder setMinWidth(double value) {
    columnConstraints.setMinWidth(value);

    return this;
  }

  public ColumnConstraintsBuilder minWidthUsePrefSize() {
    columnConstraints.setMinWidth(Region.USE_PREF_SIZE);

    return this;
  }

  public ColumnConstraintsBuilder minWidthUseComputedSize() {
    columnConstraints.setMinWidth(Region.USE_COMPUTED_SIZE);

    return this;
  }

  public ColumnConstraintsBuilder maxWidthUsePrefSize() {
    columnConstraints.setMaxWidth(Region.USE_PREF_SIZE);

    return this;
  }

  public ColumnConstraintsBuilder maxWidthUseComputedSize() {
    columnConstraints.setMaxWidth(Region.USE_COMPUTED_SIZE);

    return this;
  }

  public ColumnConstraints build() {
    return columnConstraints;
  }
}
