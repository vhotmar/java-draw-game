package draw.common.behaviour.model;

import java.io.Serializable;

public class VisibleForEveryone implements VisibilityValidator, Serializable {
  private static final long serialVersionUID = 159572585672930267L;

  @Override
  public boolean isVisibleFor(String clientId) {
    return true;
  }
}
