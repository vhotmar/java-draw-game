package draw.gui.view;

import draw.gui.components.LoadingOverlay;
import javafx.geometry.Insets;
import javafx.scene.control.Button;
import javafx.scene.control.CheckBox;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Priority;
import javafx.scene.layout.StackPane;

import java.util.ResourceBundle;

public class ConnectView {
  private final StackPane root = new StackPane();
  private final GridPane background;
  private final GridPane form;

  private final Label codeLabel;
  private final Button connectButton;
  private final TextField codeTextField;
  private final TextField nameTextField;
  private final CheckBox existingGameCheckBox;
  private final Label nameLabel;
  private final LoadingOverlay loadingOverlay = new LoadingOverlay();

  public ConnectView(ResourceBundle bundle) {
    background = createBackgroundGrid();
    form = createFormGrid();

    nameLabel = new Label(bundle.getString("connect_screen.your_name"));
    GridPane.setMargin(nameLabel, new Insets(0, 0, 5, 0));

    nameTextField = new TextField();
    nameTextField.setMinWidth(200);
    GridPane.setMargin(nameTextField, new Insets(0, 0, 10, 0));

    existingGameCheckBox =
        new CheckBox(bundle.getString("connect_screen.connect_to_existing_game"));
    GridPane.setMargin(existingGameCheckBox, new Insets(0, 0, 10, 0));

    codeLabel = new Label(bundle.getString("connect_screen.existing_game_code"));
    GridPane.setMargin(codeLabel, new Insets(0, 0, 5, 0));

    codeTextField = new TextField();
    codeTextField.setMinWidth(200);
    GridPane.setMargin(codeTextField, new Insets(0, 0, 10, 0));

    connectButton = new Button(bundle.getString("connect_screen.connect"));

    form.add(nameLabel, 0, 0);
    form.add(nameTextField, 0, 1);
    form.add(existingGameCheckBox, 0, 2);
    form.add(codeLabel, 0, 3);
    form.add(codeTextField, 0, 4);
    form.add(connectButton, 0, 5);

    background.add(form, 1, 1);

    root.getChildren().addAll(background, loadingOverlay);
  }

  private GridPane createBackgroundGrid() {
    GridPane background = new GridPane();

    background.setMaxSize(Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY);

    background
        .getRowConstraints()
        .addAll(
            new RowConstraintsBuilder().setVgrow(Priority.ALWAYS).minHeightUsePrefSize().build(),
            new RowConstraintsBuilder().minHeightUsePrefSize().build(),
            new RowConstraintsBuilder().setVgrow(Priority.ALWAYS).minHeightUsePrefSize().build());

    background
        .getColumnConstraints()
        .addAll(
            new ColumnConstraintsBuilder().setHgrow(Priority.ALWAYS).build(),
            new ColumnConstraintsBuilder().build(),
            new ColumnConstraintsBuilder().setHgrow(Priority.ALWAYS).build());

    return background;
  }

  private GridPane createFormGrid() {
    GridPane form = new GridPane();

    form.getRowConstraints()
        .addAll(
            new RowConstraintsBuilder().minHeightUsePrefSize().build(),
            new RowConstraintsBuilder().minHeightUsePrefSize().build(),
            new RowConstraintsBuilder().minHeightUsePrefSize().build(),
            new RowConstraintsBuilder().minHeightUsePrefSize().build());

    form.getColumnConstraints()
        .addAll(
            new ColumnConstraintsBuilder()
                .setHgrow(Priority.SOMETIMES)
                .minWidthUsePrefSize()
                .build());

    GridPane.setMargin(form, new Insets(10));

    return form;
  }

  public StackPane getRoot() {
    return root;
  }

  public Button getConnectButton() {
    return connectButton;
  }

  public TextField getCodeTextField() {
    return codeTextField;
  }

  public TextField getNameTextField() {
    return nameTextField;
  }

  public CheckBox getExistingGameCheckBox() {
    return existingGameCheckBox;
  }

  public Label getCodeLabel() {
    return codeLabel;
  }

  public LoadingOverlay getLoadingOverlay() {
    return loadingOverlay;
  }
}
