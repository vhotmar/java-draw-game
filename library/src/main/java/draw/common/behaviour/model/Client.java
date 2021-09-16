package draw.common.behaviour.model;

import java.io.Serializable;

public class Client implements Serializable {
  private static final long serialVersionUID = -1588617305837837188L;

  private String id;
  private String roomId;
  private String name;

  public Client(String id, String name, String roomId) {
    this.id = id;
    this.name = name;
    this.roomId = roomId;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getRoomId() {
    return roomId;
  }

  public void setRoomId(String roomId) {
    this.roomId = roomId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
