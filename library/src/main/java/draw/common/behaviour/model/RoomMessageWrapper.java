package draw.common.behaviour.model;

import draw.common.messages.ServerMessage;

import java.io.Serializable;

public class RoomMessageWrapper implements Serializable {
  private static final long serialVersionUID = 4613060807360058717L;

  private final ServerMessage serverMessage;
  private final VisibilityValidator visibilityValidator;

  public RoomMessageWrapper(ServerMessage serverMessage, VisibilityValidator publishValidator) {
    this.serverMessage = serverMessage;
    this.visibilityValidator = publishValidator;
  }

  public ServerMessage getServerMessage() {
    return serverMessage;
  }

  public boolean isVisibleFor(String clientId) {
    return visibilityValidator.isVisibleFor(clientId);
  }
}
