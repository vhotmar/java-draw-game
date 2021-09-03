package draw.gui.controllers;

import draw.gui.components.*;
import draw.gui.components.ChatView;
import javafx.collections.FXCollections;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.paint.Color;

import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.ResourceBundle;

public class GameController implements Initializable {
  @FXML private ChatView chatView;
  @FXML private ScoreView scoreView;

  @Override
  public void initialize(URL location, ResourceBundle resources) {
    List<ScoreItem> sample = new ArrayList<>();
    sample.add(new ScoreItem(1, "First", 700, 2));
    sample.add(new ScoreItem(2, "Second", 1000, 1));

    List<ChatItem> sample2 = new ArrayList<>();
    sample2.add(new SystemMessageChatItem("Whooo system message", Color.ORANGE));
    sample2.add(new UserMessageChatItem("First", "This is my new cool message!"));
    sample2.add(new UserMessageChatItem("Second", "And I am replying to you in super cool manner! And this message is pretty long"));

    System.out.println("WHOO");

    this.scoreView.setItems(FXCollections.observableList(sample));
    this.chatView.setItems(FXCollections.observableList(sample2));
  }
}
