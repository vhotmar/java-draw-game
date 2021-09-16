package draw.common.behaviour.tasks;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.HazelcastInstanceAware;
import draw.common.behaviour.model.Room;
import draw.common.behaviour.services.RoomService;

import java.io.Serializable;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ChooseWordRandomlyTask implements Runnable, Serializable, HazelcastInstanceAware {
  private static final long serialVersionUID = 488020530779970379L;
  private static final Logger logger = Logger.getLogger(ChooseWordRandomlyTask.class.getName());

  private final String roomId;
  private final int gameId;

  private transient HazelcastInstance hazelcastInstance;

  public ChooseWordRandomlyTask(String roomId, int gameId) {
    this.roomId = roomId;
    this.gameId = gameId;
  }

  @Override
  public void setHazelcastInstance(HazelcastInstance hazelcastInstance) {
    this.hazelcastInstance = hazelcastInstance;
  }

  @Override
  public void run() {
    logger.log(Level.INFO, "Running task ChooseWordRandomlyTask");

    RoomService roomService = new RoomService(hazelcastInstance, roomId);
    Room room = roomService.getRoom();

    if (room == null) {
      logger.log(Level.WARNING, "room == null - should not happen");
      return;
    }
    if (room.getGameId() != gameId) return;
    if (room.getGameState() != Room.GameState.WORD_CHOOSE) return;

    roomService.chooseWord(0);
  }
}
