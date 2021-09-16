package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Player;
import draw.common.behaviour.model.Room;

import java.util.HashMap;
import java.util.Map;

public class JoinRoomProcessor implements EntryProcessor<String, Room, Room> {
  private final String clientId;

  public JoinRoomProcessor(String clientId) {
    this.clientId = clientId;
  }

  @Override
  public Room process(Map.Entry<String, Room> entry) {
    String roomId = entry.getKey();
    Room room = entry.getValue();

    if (room == null) {
      room = new Room(roomId, new HashMap<>());
    }

    if (room.getPlayers().isEmpty()) {
      room.setOwnerId(clientId);
    }

    room.getPlayers().put(clientId, new Player(clientId));

    entry.setValue(room);

    return room;
  }
}
