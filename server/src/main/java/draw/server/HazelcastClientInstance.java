package draw.server;

import com.hazelcast.client.HazelcastClient;
import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.IExecutorService;
import com.hazelcast.map.IMap;
import com.hazelcast.topic.ITopic;
import draw.common.behaviour.model.ClientMessageWrapper;
import draw.common.behaviour.model.Room;
import draw.common.behaviour.model.RoomMessageWrapper;

public class HazelcastClientInstance {
  private final HazelcastInstance client;

  private HazelcastClientInstance() {
    client = HazelcastClient.newHazelcastClient();
  }

  private static class HazelcastClientInstanceHolder {
    private static final HazelcastClientInstance INSTANCE = new HazelcastClientInstance();
  }

  public static HazelcastClientInstance getInstance() {
    return HazelcastClientInstanceHolder.INSTANCE;
  }

  public IExecutorService getExecutorService() {
    return client.getExecutorService("executorService");
  }

  public HazelcastInstance getClient() {
    return client;
  }

  public IMap<String, Room> getRooms() {
    return client.getMap("draw/rooms");
  }

  public ITopic<RoomMessageWrapper> getRoomTopic(String roomId) {
    return client.getTopic("draw/room/" + roomId);
  }

  public ITopic<ClientMessageWrapper> getClientTopic(String clientId) {
    return client.getTopic("draw/client/" + clientId);
  }
}
