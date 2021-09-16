package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Room;

import java.io.Serializable;
import java.util.Map;

public class EndRoundProcessor implements EntryProcessor<String, Room, EndRoundProcessor.Result> {
  @Override
  public Result process(Map.Entry<String, Room> entry) {
    Room room = entry.getValue();

    if (room == null) {
      return null;
    }

    String originalWord = room.getCurrentWord();

    room.getPlayers().forEach((id, player) -> {
      if (player.hasGuessed()) {
        player.setScore(player.getScore() + 100);
      }

      if (player.getId().equals(room.getDrawingId())) {
        player.setScore(player.getScore() + 110);
      }

      player.setGuessed(false);
    });
    room.setGameId(room.getGameId() + 1);
    room.setCurrentWord(null);
    room.setRoomState(Room.RoomState.GAME);
    room.setGameState(Room.GameState.SCORE);
    room.setWordSelection(null);

    entry.setValue(room);

    return new Result(room, originalWord);
  }

  public static class Result implements Serializable {
    private static final long serialVersionUID = -8873688789701605660L;

    private final Room room;
    private final String word;

    public Result(Room room, String word) {
      this.room = room;
      this.word = word;
    }

    public Room getRoom() {
      return room;
    }

    public String getWord() {
      return word;
    }
  }
}
