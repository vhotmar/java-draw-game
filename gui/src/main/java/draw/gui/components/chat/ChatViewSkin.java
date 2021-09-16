package draw.gui.components.chat;

import draw.gui.components.NoSelectionModel;
import javafx.scene.control.ListView;
import javafx.scene.control.SkinBase;
import javafx.scene.control.TextField;
import javafx.scene.layout.*;
import javafx.scene.paint.Color;

public class ChatViewSkin extends SkinBase<ChatView> {
  private final ListView<ChatItem> chatListView;
  private final GridPane gridPane;
  private final TextField messageTextField;

  protected ChatViewSkin(ChatView control) {
    super(control);

    gridPane = new GridPane();

    chatListView = new ListView<>();
    chatListView.itemsProperty().bind(control.itemsProperty());
    chatListView.setCellFactory(ChatViewCell::new);
    chatListView.setSelectionModel(new NoSelectionModel<>());
    chatListView.setFocusTraversable(false);

    messageTextField = new TextField();
    messageTextField.onActionProperty().bind(control.onNewMessageProperty());
    messageTextField.textProperty().bindBidirectional(control.messageTextProperty());

    gridPane.add(chatListView, 0, 0);
    gridPane.add(messageTextField, 0, 1);

    RowConstraints viewConstraint = new RowConstraints();
    viewConstraint.setVgrow(Priority.ALWAYS);
    RowConstraints fieldConstraint = new RowConstraints();
    fieldConstraint.setVgrow(Priority.SOMETIMES);

    gridPane.getRowConstraints().addAll(viewConstraint, fieldConstraint);

    getChildren().add(gridPane);
  }
}
