package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Room;

import java.util.Map;

public class EndGameProcessor implements EntryProcessor<String, Room, Room> {
  @Override
  public Room process(Map.Entry<String, Room> entry) {
    Room room = entry.getValue();

    if (room == null) {
      return null;
    }

    room.setRoomState(Room.RoomState.LOBBY);
    room.setGameState(Room.GameState.NONE);
    room.setDrawingId(null);
    room.setCurrentWord(null);
    room.setWordSelection(null);

    entry.setValue(room);

    return room;
  }
}