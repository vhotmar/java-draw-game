package draw.gui.model;

import draw.common.ClientMessageEncoder;
import draw.common.ServerMessageDecoder;
import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;

import java.io.IOException;
import java.net.URI;

@ClientEndpoint(
    decoders = {ServerMessageDecoder.class},
    encoders = {ClientMessageEncoder.class})
public class DrawClient {
  private Session session;
  private EndpointConfig endpointConfig;
  private MessageHandler messageHandler;

  public DrawClient(URI uri) {
    try {
      WebSocketContainer container = ContainerProvider.getWebSocketContainer();
      //container.connectToServer(this, uri);
    } catch (Exception e) {
      throw new RuntimeException(e);
    }
  }

  @OnOpen
  public void processOpen(Session session, EndpointConfig endpointConfig) {
    this.session = session;
    this.endpointConfig = endpointConfig;
  }

  public void sendMessage(ClientMessage message) throws EncodeException, IOException {
    this.session.getBasicRemote().sendObject(message);
  }

  @OnMessage
  public void processMessage(ServerMessage message) {
    if (this.messageHandler != null) {
      this.messageHandler.handleMessage(message);
    }
  }

  public void setMessageHandler(MessageHandler messageHandler) {
    this.messageHandler = messageHandler;
  }

  public interface MessageHandler {
    public void handleMessage(ServerMessage message);
  }
}
