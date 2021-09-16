package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Room;

import java.util.Map;

public class ClearCanvasProcessor implements EntryProcessor<String, Room, Room> {
  @Override
  public Room process(Map.Entry<String, Room> entry) {
    Room room = entry.getValue();

    if (room == null) {
      return null;
    }

    room.getDrawCommands().clear();

    entry.setValue(room);

    return room;
  }
}
