package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Player;
import draw.common.behaviour.model.Room;

import java.util.HashMap;
import java.util.Map;

public class ChooseWordProcessor implements EntryProcessor<String, Room, Room> {
  private final int wordIndex;

  public ChooseWordProcessor(int wordIndex) {
    this.wordIndex = wordIndex;
  }

  @Override
  public Room process(Map.Entry<String, Room> entry) {
    Room room = entry.getValue();

    if (room == null) {
      return null;
    }

    room.setCurrentWord(room.getWordSelection().get(wordIndex));
    room.setWordSelection(null);
    room.setRoomState(Room.RoomState.GAME);
    room.setGameState(Room.GameState.DRAWING);

    entry.setValue(room);

    return room;
  }
}
