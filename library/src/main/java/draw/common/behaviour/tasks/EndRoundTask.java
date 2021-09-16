package draw.common.behaviour.tasks;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.HazelcastInstanceAware;
import draw.common.behaviour.model.Room;
import draw.common.behaviour.services.RoomService;
import draw.common.messages.ServerMessage;

import java.io.Serializable;

public class EndRoundTask implements Runnable, Serializable, HazelcastInstanceAware {
  private static final long serialVersionUID = 7511642581830148365L;

  private final String roomId;
  private final int gameId;

  private transient HazelcastInstance hazelcastInstance;

  public EndRoundTask(String roomId, int gameId) {
    this.roomId = roomId;
    this.gameId = gameId;
  }

  @Override
  public void setHazelcastInstance(HazelcastInstance hazelcastInstance) {
    this.hazelcastInstance = hazelcastInstance;
  }

  @Override
  public void run() {
    RoomService roomService = new RoomService(hazelcastInstance, roomId);
    Room room = roomService.getRoom();

    if (room == null) {
      System.out.println("interesting " + roomId);
      return;
    }
    if (room.getGameId() != gameId) return;
    if (room.getRoomState() != Room.RoomState.GAME || room.getGameState() != Room.GameState.WORD_CHOOSE) return;

    roomService.endCurrentRound(ServerMessage.WordRevealMessage.RevealReason.TIMEOUT);
    roomService.initiateNextRound();
  }
}
