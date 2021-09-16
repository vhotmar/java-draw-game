package draw.server;

import draw.common.ClientMessageDecoder;
import draw.common.RandomUtils;
import draw.common.ServerMessageEncoder;
import draw.common.messages.ClientMessage;
import jakarta.websocket.*;
import jakarta.websocket.server.ServerEndpoint;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@ServerEndpoint(
    value = "/draw",
    encoders = {ServerMessageEncoder.class},
    decoders = {ClientMessageDecoder.class})
public class DrawEndpoint {
  private static final Logger logger = LogManager.getLogger(DrawEndpoint.class);

  private final String clientId;

  private ClientController clientController;

  public DrawEndpoint() {
    clientId = RandomUtils.generateId();
  }

  @OnOpen
  public void onOpen(Session session) {
    logger.debug("(clientId=" + clientId + ") connection opened");

    session.setMaxIdleTimeout(3600000);

    this.clientController = new ClientController(clientId, session);
  }

  @OnMessage
  public void onMessage(ClientMessage message) {
    logger.trace("(clientId=" + clientId + ") received message " + message);

    this.clientController.handleMessage(message);
  }

  @OnError
  public void onError(Throwable throwable) {
    logger.error("(clientId: " + clientId + ") onError", throwable);
  }

  @OnClose
  public void onClose() {
    logger.debug("(clientId=" + clientId + ") connection closed");

    this.clientController.handleClose();
  }
}
