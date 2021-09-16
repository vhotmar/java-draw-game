package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Room;

import java.nio.charset.StandardCharsets;
import java.util.Map;

public class EndRoundProcessor implements EntryProcessor<String, Room, Room> {
  @Override
  public Room process(Map.Entry<String, Room> entry) {
    Room room = entry.getValue();

    if (room == null) {
      return null;
    }

    room.getPlayers().forEach((id, player) -> {
      if (player.hasGuessed()) {
        player.setScore(player.getScore() + 100);
      }

      player.setGuessed(false);
    });
    room.setGameId(room.getGameId() + 1);
    room.setCurrentWord(null);
    room.setRoomState(Room.RoomState.GAME);
    room.setGameState(Room.GameState.SCORE);
    room.setWordSelection(null);

    entry.setValue(room);

    return room;
  }
}
