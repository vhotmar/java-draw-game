package draw.server;

import com.hazelcast.client.Client;
import com.hazelcast.core.HazelcastInstance;
import draw.common.ClientMessageDecoder;
import draw.common.ServerMessageEncoder;
import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;
import jakarta.websocket.*;
import jakarta.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.util.logging.Logger;

@ServerEndpoint(
    value = "/draw",
    encoders = {ServerMessageEncoder.class},
    decoders = {ClientMessageDecoder.class})
public class DrawEndpoint {
  private static final Logger LOG = Logger.getLogger(DrawEndpoint.class.getName());
  private Session session;

  public DrawEndpoint() {}

  abstract class State {
    public void handleMessage(ClientMessage message) throws Exception {
      LOG.info("unhandled message: " + message);
    }
  }

  class NotInitializedState extends State {
    @Override
    public void handleMessage(ClientMessage message) throws Exception {
      if (message.hasConnectMessage()) {
        ClientMessage.ConnectMessage connectMessage = message.getConnectMessage();

        String name = connectMessage.getName();

        if (name.isEmpty()) {
          sendError("Parameter name is required");
          return;
        }

        LOG.info("interesting!!! " + name);
      } else {
        super.handleMessage(message);
      }
    }
  }

  private State currentState = new NotInitializedState();

  @OnOpen
  public void onOpen(Session session, EndpointConfig config) {
    this.session = session;
    LOG.info(
        "connection opened: "
            + HazelcastClientInstance.getInstance().getClient().getConfig().getClusterName());
    LOG.info("session: " + session);
    LOG.info("config: " + config);
  }

  @OnMessage
  public void onMessage(ClientMessage message) throws Exception {
    LOG.info("received message");
    currentState.handleMessage(message);
  }

  @OnError
  public void onError(Throwable throwable) {
    LOG.info("error: " + throwable.getMessage());
    LOG.info("cause: " + throwable.getCause().getMessage());
  }

  @OnClose
  public void onClose(Session session, CloseReason reason) {
    LOG.info("connection closed");
    LOG.info("reson: " + reason);
  }

  private void sendError(String message) throws EncodeException, IOException {
    LOG.info("send error: " + message);

    try {
      this.session
          .getBasicRemote()
          .sendObject(
              ServerMessage.newBuilder()
                  .setErrorMessage(
                      ServerMessage.ErrorMessage.newBuilder().setMessage(message).build())
                  .build());
    } catch (Exception e) {
      LOG.info("whaaaat: " + e.getMessage());
    }
  }
}
