package draw.gui.components.chat;

import javafx.scene.paint.Color;
import javafx.scene.text.*;

public class UserMessageChatItem implements ChatItem {
  private final TextFlow flow;

  public UserMessageChatItem(String from, String message) {
    Text fromText = new Text(from + ":");
    Text messageText = new Text(" " + message);

    fromText.setFont(Font.font(null, FontWeight.BOLD, FontPosture.REGULAR, -1));
    fromText.setStroke(Color.BLUE);

    this.flow = new TextFlow(fromText, messageText);
  }

  @Override
  public TextFlow getFlow() {
    return flow;
  }
}
