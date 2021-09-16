package draw.gui.model;

import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;
import draw.gui.DrawClient;
import jakarta.websocket.EncodeException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;

public class ClientService {
  private static final Logger logger = LogManager.getLogger(ClientService.class);

  private final StateManager stateManager;
  private final ChatManager chatManager;
  private final DrawClient drawClient;
  private final DrawManager drawManager;

  public ClientService(DrawClient drawClient) {
    this.drawClient = drawClient;
    stateManager = new StateManager(drawClient);
    chatManager = new ChatManager(drawClient, stateManager);
    drawManager = new DrawManager(drawClient, stateManager);
  }

  public StateManager getStateManager() {
    return stateManager;
  }

  public ChatManager getChatManager() {
    return chatManager;
  }

  public DrawManager getDrawManager() {
    return drawManager;
  }

  public DrawClient getDrawClient() {
    return drawClient;
  }

  public void connect(String name, String roomId, ConnectHandler handler)
      throws IOException {
    stateManager.getState().setName(name);
    drawClient.sendMessage(
        ClientMessage.newBuilder()
            .setConnectMessage(
                ClientMessage.ConnectMessage.newBuilder().setName(name).setRoomId(roomId).build())
            .build());

    drawClient.addMessageListener(
        new DrawClient.MessageHandler() {
          @Override
          public void handleMessage(ServerMessage message) {
            if (message.hasShowRoom()) {
              handler.handleShowRoom(message.getShowRoom());

              drawClient.removeMessageListener(this);
            } else if (message.hasErrorMessage()) {
              handler.handleError(message.getErrorMessage());

              drawClient.removeMessageListener(this);

              try {
                drawClient.close();
              } catch (IOException e) {
                logger.error("Error while trying to close the session", e);
              }
            } else {
              logger.warn("Invalid message received when trying to connect {}", message);
            }
          }
        });
  }

  public void startGame() {
    try {
      drawClient.sendMessage(ClientMessage.newBuilder().setStartGame(ClientMessage.StartGameMessage.newBuilder().build()).build());
    } catch (IOException e) {
      logger.error("Could not send startGame message", e);
    }
  }

  public interface ConnectHandler {
    void handleShowRoom(ServerMessage.ShowRoomMessage showRoom);

    void handleError(ServerMessage.ErrorMessage errorMessage);
  }
}
