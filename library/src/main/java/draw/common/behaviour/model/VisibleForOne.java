package draw.common.behaviour.model;

import java.io.Serializable;

public class VisibleForOne implements VisibilityValidator, Serializable {
  private static final long serialVersionUID = -8181843357373613491L;

  private final String clientId;

  public VisibleForOne(String ClientId) {
    this.clientId = ClientId;
  }

  @Override
  public boolean isVisibleFor(String clientId) {
    return this.clientId.equals(clientId);
  }
}
