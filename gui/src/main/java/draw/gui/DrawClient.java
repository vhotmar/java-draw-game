package draw.gui;

import draw.common.ClientMessageEncoder;
import draw.common.ServerMessageDecoder;
import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;
import jakarta.websocket.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.net.URI;
import java.util.LinkedList;

@ClientEndpoint(
    decoders = {ServerMessageDecoder.class},
    encoders = {ClientMessageEncoder.class})
public class DrawClient {
  private static final Logger logger = LogManager.getLogger(DrawClient.class);

  private Session session;
  private LinkedList<MessageHandler> messageHandlers = new LinkedList<>();

  public DrawClient(URI uri) throws DeploymentException, IOException {
    WebSocketContainer container = ContainerProvider.getWebSocketContainer();
    container.connectToServer(this, uri);
  }

  @OnOpen
  public void processOpen(Session session) {
    logger.debug("Connection to server opened");

    this.session = session;
  }

  public void sendMessage(ClientMessage message) throws IOException {
    logger.trace("Sending a message to server {}", message);

    try {
      session.getBasicRemote().sendObject(message);
    } catch (EncodeException exception) {
      logger.fatal("Could not encode provided message {}", message, exception);
    }
  }

  @OnMessage
  public void processMessage(ServerMessage message) {
    if (message.hasErrorMessage()) {
      logger.error("Server sent a error message {}", message.getErrorMessage().getMessage());
    } else {
      logger.trace("Server sent a message {}", message);
    }

    messageHandlers.forEach(handler -> handler.handleMessage(message));
  }

  @OnClose
  public void processClose(CloseReason reason) {
    logger.debug("Connection to server closed: \"{}\"", reason.getReasonPhrase());
  }

  public void close() throws IOException {
    session.close();
  }

  public void addMessageListener(MessageHandler messageHandler) {
    this.messageHandlers.add(messageHandler);
  }

  public void removeMessageListener(MessageHandler messageHandler) {
    this.messageHandlers.remove(messageHandler);
  }

  public interface MessageHandler {
    void handleMessage(ServerMessage message);
  }
}
