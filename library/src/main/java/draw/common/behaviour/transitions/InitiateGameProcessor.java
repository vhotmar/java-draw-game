package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Room;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class InitiateGameProcessor implements EntryProcessor<String, Room, Room> {
  private final List<String> words;

  public InitiateGameProcessor(List<String> words) {
    this.words = words;
  }

  @Override
  public Room process(Map.Entry<String, Room> entry) {
    Room room = entry.getValue();

    if (room == null) {
      return null;
    }

    room.setRoomState(Room.RoomState.GAME);
    room.setGameState(Room.GameState.WORD_CHOOSE);
    room.setCurrentWord(null);
    room.setWordSelection(words);

    entry.setValue(room);

    List<String> playerIds = new ArrayList<>(room.getPlayers().keySet());
    Collections.sort(playerIds);

    int index = playerIds.indexOf(room.getDrawingId());
    int nextPlayerIndex = index == -1 ? 0 : (index + 1) % playerIds.size();

    room.setDrawingId(playerIds.get(nextPlayerIndex));

    return room;
  }
}