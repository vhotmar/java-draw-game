package draw.common.behaviour.model;

import java.io.Serializable;

public class VisibleForOthers implements VisibilityValidator, Serializable {
  private static final long serialVersionUID = -4617994352626961265L;

  private final String clientId;

  public VisibleForOthers(String clientId) {
    this.clientId = clientId;
  }

  @Override
  public boolean isVisibleFor(String clientId) {
    return !this.clientId.equals(clientId);
  }
}
