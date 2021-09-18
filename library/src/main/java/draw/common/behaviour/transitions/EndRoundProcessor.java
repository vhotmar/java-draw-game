package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Player;
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

    int maxScore = 500;
    int playersCount = room.getPlayers().size();
    int playersGuessed = (int) room.getPlayers().values().stream().filter(Player::hasGuessed).count();
    int rewardPerPlayer = maxScore / playersCount;

    room.getPlayers().forEach((id, player) -> {
      if (player.hasGuessed()) {
        player.setScore(player.getScore() + Math.max(0, (maxScore - (player.getPosition() - 1) * rewardPerPlayer)));
      }

      if (player.getId().equals(room.getDrawingId())) {
        player.setScore(player.getScore() + Math.min(maxScore, playersGuessed * rewardPerPlayer));
      }

      player.setGuessed(false);
      player.setPosition(0);
    });
    room.setGameId(room.getGameId() + 1);
    room.setCurrentWord(null);
    room.setRoomState(Room.RoomState.GAME);
    room.setGameState(Room.GameState.SCORE);
    room.setWordSelection(null);

    if (room.getDrawingIndex() >= (room.getPlayers().size() - 1)) {
      room.setRound(room.getRound() + 1);
    }

    room.setDrawingIndex((room.getDrawingIndex() + 1) % room.getPlayers().size());

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
