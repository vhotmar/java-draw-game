package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Player;
import draw.common.behaviour.model.Room;

import java.util.Comparator;
import java.util.Map;
import java.util.Optional;

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

    Optional<Integer> maxRes =
        room.getPlayers().values().stream()
            .max(Comparator.comparingInt(Player::getScore))
            .map(Player::getScore);
    int nextPosition = maxRes.isEmpty() ? 1 : maxRes.get() + 1;

    room.getPlayers()
        .forEach(
            (key, value) -> {
              if (value.getId().equals(clientId)) {
                value.setGuessed(true);
                value.setPosition(nextPosition);
              }
            });

    entry.setValue(room);

    return room;
  }
}
