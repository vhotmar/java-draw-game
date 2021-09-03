package draw.server;

import com.hazelcast.client.HazelcastClient;
import com.hazelcast.core.HazelcastInstance;

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

  public HazelcastInstance getClient() {
    return client;
  }
}
