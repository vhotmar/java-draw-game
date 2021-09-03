package draw.gui.controllers;

import draw.gui.AppContainer;
import javafx.beans.binding.Bindings;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.*;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.StackPane;
import javax.inject.Inject;
import java.net.URL;
import java.util.ResourceBundle;

public class ConnectController implements Initializable {
  @FXML private Label codeLabel;
  @FXML private Button connectButton;
  @FXML private TextField codeTextField;
  @FXML private TextField nameTextField;
  @FXML private CheckBox existingGameCheckBox;

  private Alert errorDialog;
  private AppContainer container;

  @Inject
  public ConnectController(AppContainer container) {
    this.container = container;
  }

  @Override
  public void initialize(URL location, ResourceBundle resources) {
    errorDialog =
        new Alert(Alert.AlertType.ERROR, resources.getString("invalid_server_uri_message"));

    codeTextField.managedProperty().bind(existingGameCheckBox.selectedProperty());
    codeTextField.visibleProperty().bind(existingGameCheckBox.selectedProperty());

    codeLabel.managedProperty().bind(existingGameCheckBox.selectedProperty());
    codeLabel.visibleProperty().bind(existingGameCheckBox.selectedProperty());

    connectButton.disableProperty().bind(Bindings.or(
        nameTextField.textProperty().isEmpty(),
        Bindings.and(existingGameCheckBox.selectedProperty(), codeTextField.textProperty().isEmpty())
    ));
  }

  public void handleConnectClick(ActionEvent actionEvent) {
    container.getLoadingOverlay().show();
    errorDialog.showAndWait();
    container.getLoadingOverlay().hide();
  }
}
