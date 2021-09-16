package draw.common.behaviour.model;

import draw.common.messages.ServerMessage;

import java.io.Serializable;

public class ClientMessageWrapper implements Serializable {
  private static final long serialVersionUID = -614046463424781486L;

  private final ServerMessage serverMessage;
  private final String roomId;

  public ClientMessageWrapper(ServerMessage serverMessage) {
    this.serverMessage = serverMessage;
    this.roomId = null;
  }

  public ClientMessageWrapper(String roomId) {
    this.serverMessage = null;
    this.roomId = roomId;
  }

  public boolean hasServerMessage() {
    return serverMessage != null;
  }

  public ServerMessage getServerMessage() {
    return serverMessage;
  }

  public boolean hasRoomId() {
    return roomId != null;
  }

  public String getRoomId() {
    return roomId;
  }
}
