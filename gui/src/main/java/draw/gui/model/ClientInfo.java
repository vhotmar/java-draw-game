package draw.gui.model;

import javafx.beans.Observable;
import javafx.beans.property.*;

public class ClientInfo {
  private StringProperty id;
  private StringProperty name;
  private IntegerProperty score;
  private BooleanProperty guessed;
  private BooleanProperty connected;

  public ClientInfo() {}

  public ClientInfo(String id, String name, int score, boolean guessed) {
    setId(id);
    setName(name);
    setScore(score);
    setGuessed(guessed);
  }

  public StringProperty idProperty() {
    if (id == null) {
      id = new SimpleStringProperty(this, "id");
    }

    return id;
  }

  public String getId() {
    return idProperty().get();
  }

  public void setId(String id) {
    idProperty().set(id);
  }

  public StringProperty nameProperty() {
    if (name == null) {
      name = new SimpleStringProperty(this, "name");
    }

    return name;
  }

  public String getName() {
    return nameProperty().get();
  }

  public void setName(String name) {
    nameProperty().set(name);
  }

  public IntegerProperty scoreProperty() {
    if (score == null) {
      score = new SimpleIntegerProperty(this, "score");
    }

    return score;
  }

  public int getScore() {
    return scoreProperty().get();
  }

  public void setScore(int score) {
    scoreProperty().set(score);
  }

  public BooleanProperty guessedProperty() {
    if (guessed == null) {
      guessed = new SimpleBooleanProperty(this, "guessed");
    }

    return guessed;
  }

  public boolean isGuessed() {
    return guessedProperty().get();
  }

  public void setGuessed(boolean guessed) {
    guessedProperty().set(guessed);
  }

  public BooleanProperty connectedProperty() {
    if (connected == null) {
      connected = new SimpleBooleanProperty(this, "connected", true);
    }

    return connected;
  }

  public boolean isConnected() {
    return connectedProperty().get();
  }

  public void setConnected(boolean connected) {
    connectedProperty().set(connected);
  }

  public Observable[] getObservables() {
    return new Observable[] {idProperty(), nameProperty(), scoreProperty(), guessedProperty(), connectedProperty()};
  }
}
