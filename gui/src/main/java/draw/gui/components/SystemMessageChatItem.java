package draw.gui.components;

import javafx.scene.paint.Paint;
import javafx.scene.text.Text;
import javafx.scene.text.TextFlow;

public class SystemMessageChatItem implements ChatItem {
  private final TextFlow flow;

  public SystemMessageChatItem(String message, Paint paint) {
    Text messageText = new Text(message);

    messageText.setStroke(paint);

    flow = new TextFlow(messageText);
  }

  @Override
  public TextFlow getFlow() {
    return flow;
  }
}
