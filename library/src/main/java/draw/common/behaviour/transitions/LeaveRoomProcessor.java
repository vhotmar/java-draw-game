package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Room;

import java.io.Serializable;
import java.util.Map;
import java.util.Objects;

public class LeaveRoomProcessor implements EntryProcessor<String, Room, LeaveRoomProcessor.Result> {
  private final String clientId;

  public LeaveRoomProcessor(String clientId) {
    this.clientId = clientId;
  }

  @Override
  public Result process(Map.Entry<String, Room> entry) {
    Room room = entry.getValue();

    if (room == null) return null;

    String previousOwnerId = room.getOwnerId();

    room.getPlayers().remove(clientId);
    room.getRoundPlan().remove(clientId);

    if (room.getPlayers().isEmpty()) {
      room = null;
    } else {
      if (previousOwnerId.equals(clientId)) {
        room.setOwnerId(room.getPlayers().values().iterator().next().getId());
      }
    }

    entry.setValue(room);

    return new Result(room, previousOwnerId);
  }

  public static class Result implements Serializable {
    private static final long serialVersionUID = -1189102950566881626L;

    private final Room room;
    private final String previousOwnerId;

    public Result(Room room, String previousOwnerId) {
      this.room = room;
      this.previousOwnerId = previousOwnerId;
    }

    public Room getRoom() {
      return room;
    }

    public String getPreviousOwnerId() {
      return previousOwnerId;
    }
  }
}
