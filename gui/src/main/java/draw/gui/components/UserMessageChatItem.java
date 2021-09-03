package draw.gui.components;

import javafx.scene.paint.Color;
import javafx.scene.text.*;

public class UserMessageChatItem implements ChatItem {
  private final TextFlow flow;

  public UserMessageChatItem(String from, String to) {
    Text fromText = new Text(from + ":");
    Text toText = new Text(" " + to);

    fromText.setFont(Font.font(null, FontWeight.BOLD, FontPosture.REGULAR, -1));
    fromText.setStroke(Color.BLUE);

    this.flow = new TextFlow(fromText, toText);
  }

  @Override
  public TextFlow getFlow() {
    return flow;
  }
}
