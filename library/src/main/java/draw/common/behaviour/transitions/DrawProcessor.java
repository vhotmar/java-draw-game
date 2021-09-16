package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.messages.DrawCommand;
import draw.common.behaviour.model.Room;

import java.util.List;
import java.util.Map;

public class DrawProcessor implements EntryProcessor<String, Room, Room> {
  private final List<DrawCommand> commandsList;

  public DrawProcessor(List<DrawCommand> commandsList) {
    this.commandsList = commandsList;
  }

  @Override
  public Room process(Map.Entry<String, Room> entry) {
    Room room = entry.getValue();

    if (room == null) return null;

    room.getDrawCommands().addAll(commandsList);

    entry.setValue(room);

    return room;
  }
}
