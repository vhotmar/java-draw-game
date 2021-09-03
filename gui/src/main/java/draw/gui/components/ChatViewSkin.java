package draw.gui.components;

import javafx.scene.control.ListView;
import javafx.scene.control.SkinBase;
import javafx.scene.control.TextField;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Priority;
import javafx.scene.layout.RowConstraints;

public class ChatViewSkin extends SkinBase<ChatView> {
  private final ListView<ChatItem> chatListView;
  private final GridPane gridPane;
  private final TextField messageTextField;

  protected ChatViewSkin(ChatView control) {
    super(control);

    gridPane = new GridPane();

    chatListView = new ListView<>();
    chatListView.itemsProperty().bind(control.itemsProperty());
    chatListView.setCellFactory((listView) -> new ChatViewCell(listView));
    chatListView.setSelectionModel(new NoSelectionModel<ChatItem>());
    chatListView.setFocusTraversable(false);

    messageTextField = new TextField();

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
