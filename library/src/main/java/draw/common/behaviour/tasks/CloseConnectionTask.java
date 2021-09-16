package draw.common.behaviour.tasks;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.HazelcastInstanceAware;
import draw.common.behaviour.services.ClientService;
import draw.common.behaviour.services.RoomService;
import draw.common.behaviour.model.Client;

import java.io.Serializable;

public class CloseConnectionTask implements Runnable, Serializable, HazelcastInstanceAware {
  private static final long serialVersionUID = -774585428284744693L;

  private final String clientId;

  private transient HazelcastInstance hazelcastInstance;

  public CloseConnectionTask(String clientId) {
    this.clientId = clientId;
  }

  @Override
  public void setHazelcastInstance(HazelcastInstance hazelcastInstance) {
    this.hazelcastInstance = hazelcastInstance;
  }


  @Override
  public void run() {
    ClientService clientService = new ClientService(hazelcastInstance, clientId);

    if (!clientService.isClientInitialized()) return;

    Client client = clientService.getClient();
    RoomService roomService = new RoomService(hazelcastInstance, client.getRoomId());
    roomService.leave(client);
  }
}
