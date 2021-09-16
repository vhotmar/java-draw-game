package draw.common.behaviour.tasks;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.HazelcastInstanceAware;
import draw.common.behaviour.ChatHandler;
import draw.common.behaviour.GameHandler;
import draw.common.behaviour.LobbyHandler;
import draw.common.behaviour.NotInitializedHandler;
import draw.common.behaviour.model.Client;
import draw.common.behaviour.model.Room;
import draw.common.behaviour.services.ClientService;
import draw.common.behaviour.services.RoomService;
import draw.common.messages.ClientMessage;

import java.io.Serializable;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ProcessMessageTask implements Runnable, Serializable, HazelcastInstanceAware {
  private static final long serialVersionUID = -8873688789701605660L;
  private static final Logger logger = Logger.getLogger(ProcessMessageTask.class.getName());

  private final ClientMessage message;
  private final String clientId;

  private transient HazelcastInstance hazelcastInstance;

  public ProcessMessageTask(String clientId, ClientMessage message) {
    this.clientId = clientId;
    this.message = message;
  }

  @Override
  public void setHazelcastInstance(HazelcastInstance hazelcastInstance) {
    this.hazelcastInstance = hazelcastInstance;
  }

  @Override
  public void run() {
    logger.log(Level.INFO, "Running task ProcessMessageTask");

    ClientService clientService = new ClientService(hazelcastInstance, clientId);

    if (!clientService.isClientInitialized()) {
      logger.log(Level.FINE, "Client is not initialized");
      (new NotInitializedHandler(hazelcastInstance, clientService)).handleMessage(message);

      return;
    }

    Client client = clientService.getClient();
    RoomService roomService = new RoomService(hazelcastInstance, client.getRoomId());

    (new ChatHandler(clientService, roomService)).handleMessage(message);

    if (roomService.getRoom().getRoomState() == Room.RoomState.GAME) {
      (new GameHandler(clientService, roomService)).handleMessage(message);
    } else {
      (new LobbyHandler(clientService, roomService)).handleMessage(message);
    }
  }
}
