package draw.server;

import com.hazelcast.topic.MessageListener;
import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;
import draw.common.behaviour.model.ClientMessageWrapper;
import draw.common.behaviour.model.RoomMessageWrapper;
import draw.common.behaviour.tasks.CloseConnectionTask;
import draw.common.behaviour.tasks.ProcessMessageTask;
import jakarta.websocket.Session;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.UUID;

public class ClientController {
  private static final Logger logger = LogManager.getLogger(DrawEndpoint.class);

  private final Session session;
  private final String clientId;

  private UUID clientListenerUUID;
  private UUID roomListenerUUID;

  private String roomId;

  private MessageListener<ClientMessageWrapper> clientMessageListener;
  private MessageListener<RoomMessageWrapper> roomMessageListener;

  public ClientController(String clientId, Session session) {
    this.clientId = clientId;
    this.session = session;

    HazelcastClientInstance instance = HazelcastClientInstance.getInstance();

    clientMessageListener =
        messageWrapper -> {
          ClientMessageWrapper message = messageWrapper.getMessageObject();

          if (message.hasServerMessage()) {
            logger.trace("(clientId=" + clientId + ") received message in client topic " + message.getServerMessage());
            sendMessage(message.getServerMessage());
          } else if (message.hasRoomId()) {
            logger.trace("(clientId=" + clientId + ") received join room message in client topic " + message.getRoomId());
            roomId = message.getRoomId();

            if (roomListenerUUID != null) {
              instance.getRoomTopic(roomId).removeMessageListener(roomListenerUUID);
            }

            roomListenerUUID =
                instance.getRoomTopic(roomId).addMessageListener(this.roomMessageListener);
          }
        };

    roomMessageListener =
        messageWrapper -> {
          RoomMessageWrapper message = messageWrapper.getMessageObject();
          logger.trace("(clientId=" + clientId + ") received message in room topic " + message);

          if (message.isVisibleFor(clientId)) {
            sendMessage(message.getServerMessage());
          }
        };

    clientListenerUUID =
        instance.getClientTopic(clientId).addMessageListener(clientMessageListener);
  }

  public void handleMessage(ClientMessage message) {
    synchronized (this) {
      try {
        HazelcastClientInstance.getInstance()
            .getExecutorService()
            .submit(new ProcessMessageTask(clientId, message)).get();
      } catch (Exception e) {
        logger.error("Interrupted error", e);
      }
    }
  }

  public void handleClose() {
    HazelcastClientInstance instance = HazelcastClientInstance.getInstance();

    instance.getClientTopic(clientId).removeMessageListener(clientListenerUUID);

    if (roomId != null && roomListenerUUID != null) {
      instance.getRoomTopic(roomId).removeMessageListener(roomListenerUUID);
    }

    instance.getExecutorService().execute(new CloseConnectionTask(clientId));
  }

  private void sendMessage(ServerMessage message) {
    try {
      logger.debug("(clientId=" + clientId + ") sending message {}", message);
      session.getBasicRemote().sendObject(message);
    } catch (Exception e) {
      logger.error("Error while sending message {}", message, e);
    }
  }
}
