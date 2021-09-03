package draw.gui.components;

import javafx.scene.control.ListCell;
import javafx.scene.control.ListView;
import javafx.scene.text.TextFlow;

public class ChatViewCell extends ListCell<ChatItem> {
  private final ListView<ChatItem> view;

  public ChatViewCell(ListView<ChatItem> view) {
    this.view = view;
  }

  @Override
  protected void updateItem(ChatItem item, boolean empty) {
    super.updateItem(item, empty);

    if (empty || item == null) {
      setText(null);
      setGraphic(null);
    } else {
      TextFlow flow = item.getFlow();

      flow.setPrefWidth(view.getWidth() - 20);

      setGraphic(flow);
    }
  }
}
