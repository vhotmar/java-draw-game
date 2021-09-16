package draw.gui.model;

import draw.common.messages.DrawCommand;
import javafx.beans.Observable;
import javafx.beans.property.*;
import javafx.collections.FXCollections;

import java.util.List;
import java.util.Map;

public class State {
  private StringProperty clientId;
  private StringProperty name;
  private StringProperty ownerId;
  private StringProperty drawId;
  private ListProperty<DrawCommand> drawCommands;
  private MapProperty<String, ClientInfo> clients;
  private StringProperty roomId;
  private BooleanProperty inGame;
  private StringProperty currentWord;

  public StringProperty ownerIdProperty() {
    if (ownerId == null) {
      ownerId = new SimpleStringProperty(this, "ownerId");
    }

    return ownerId;
  }

  public String getOwnerId() {
    return ownerIdProperty().get();
  }

  public void setOwnerId(String ownerId) {
    ownerIdProperty().set(ownerId);
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

  public StringProperty drawIdProperty() {
    if (drawId == null) {
      drawId = new SimpleStringProperty(this, "drawId");
    }

    return drawId;
  }

  public String getDrawId() {
    return drawIdProperty().get();
  }

  public void setDrawId(String drawId) {
    drawIdProperty().set(drawId);
  }

  private ListProperty<DrawCommand> drawCommandsProperty() {
    if (drawCommands == null) {
      drawCommands =
          new SimpleListProperty<>(this, "drawCommands", FXCollections.observableArrayList());
    }

    return drawCommands;
  }

  public List<DrawCommand> getDrawCommands() {
    return drawCommandsProperty().get();
  }

  public MapProperty<String, ClientInfo> clientsProperty() {
    if (clients == null) {
      clients = new SimpleMapProperty<>(this, "clients", FXCollections.observableHashMap());
    }

    return clients;
  }

  public Map<String, ClientInfo> getClients() {
    return clientsProperty().get();
  }

  public StringProperty clientIdProperty() {
    if (clientId == null) {
      clientId = new SimpleStringProperty(this, "clientId");
    }

    return clientId;
  }

  public String getClientId() {
    return clientIdProperty().get();
  }

  public String getClientName(String clientId) {
    ClientInfo info = getClient(clientId);

    if (info == null) return null;

    return info.getName();
  }

  public void setClientId(String clientId) {
    clientIdProperty().set(clientId);
  }

  public StringProperty roomIdProperty() {
    if (roomId == null) {
      roomId = new SimpleStringProperty(this, "roomId");
    }

    return roomId;
  }

  public String getRoomId() {
    return roomIdProperty().get();
  }

  public void setRoomId(String roomId) {
    roomIdProperty().set(roomId);
  }

  public BooleanProperty inGameProperty() {
    if (inGame == null) {
      inGame = new SimpleBooleanProperty(this, "inGame");
    }

    return inGame;
  }

  public boolean isInGame() {
    return inGameProperty().get();
  }

  public void setInGame(boolean inGame) {
    inGameProperty().set(inGame);
  }

  public StringProperty currentWordProperty() {
    if (currentWord == null) {
      currentWord = new SimpleStringProperty(this, "currentWord");
    }

    return currentWord;
  }

  public String getCurrentWord() {
    return currentWordProperty().get();
  }

  public void setCurrentWord(String currentWord) {
    currentWordProperty().set(currentWord);
  }

  public ClientInfo getClient(String clientId) {
    return this.getClients().get(clientId);
  }

  public Observable[] getObservables() {
    return new Observable[] {
      clientIdProperty(),
      ownerIdProperty(),
      drawIdProperty(),
      drawCommandsProperty(),
      clientsProperty(),
      roomIdProperty(),
      inGameProperty(),
      currentWordProperty()
    };
  }
}
