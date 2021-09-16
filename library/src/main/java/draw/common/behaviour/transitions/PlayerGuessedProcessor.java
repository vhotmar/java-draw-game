package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Room;

import java.util.Map;

public class PlayerGuessedProcessor implements EntryProcessor<String, Room, Room> {
  private final String clientId;

  public PlayerGuessedProcessor(String clientId) {
    this.clientId = clientId;
  }

  @Override
  public Room process(Map.Entry<String, Room> entry) {
    Room room = entry.getValue();

    if (room == null) {
      return null;
    }

    room.getPlayers()
        .forEach(
            (key, value) -> {
              if (value.getId().equals(clientId)) {
                value.setGuessed(true);
              }
            });

    entry.setValue(room);

    return room;
  }
}
