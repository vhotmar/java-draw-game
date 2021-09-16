package draw.gui.model;

import draw.common.messages.ClientMessage;
import draw.common.messages.ServerMessage;
import draw.gui.DrawClient;
import draw.gui.components.chat.ChatItem;
import draw.gui.components.chat.SystemMessageChatItem;
import draw.gui.components.chat.UserMessageChatItem;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.scene.paint.Color;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;

public class ChatManager {
  private static final Logger logger = LogManager.getLogger(ChatManager.class);

  private final ObservableList<ChatItem> chatItems = FXCollections.observableArrayList();
  private final DrawClient drawClient;
  private final DrawClient.MessageHandler handler;
  private final StateManager stateManager;

  public ChatManager(DrawClient drawClient, StateManager stateManager) {
    this.drawClient = drawClient;
    this.handler =
        (message) -> {
          if (message.hasChatMessage()) {
            ServerMessage.ChatMessage chatMessage = message.getChatMessage();
            String name = stateManager.getState().getClientName(chatMessage.getPlayerId());

            if (name == null) {
              logger.error("Invalid player id {} in chat message", chatMessage.getPlayerId());
              return;
            }

            chatItems.add(new UserMessageChatItem(name, chatMessage.getMessage()));
          } else if (message.hasPlayerConnected()) {
            ServerMessage.PlayerConnectedMessage playerConnectedMessage =
                message.getPlayerConnected();

            chatItems.add(
                new SystemMessageChatItem(
                    "Player \"" + playerConnectedMessage.getPlayerName() + "\" joined",
                    Color.ORANGE));
          } else if (message.hasPlayerDisconnected()) {
            ServerMessage.PlayerDisconnectedMessage playerDisconnectedMessage =
                message.getPlayerDisconnected();

            ClientInfo info =
                stateManager.getState().getClient(playerDisconnectedMessage.getPlayerId());

            if (info == null) {
              logger.error(
                  "Invalid player id {} in chat message", playerDisconnectedMessage.getPlayerId());
              return;
            }

            chatItems.add(
                new SystemMessageChatItem("Player \"" + info.getName() + "\" left", Color.ORANGE));
          } else if (message.hasErrorMessage()) {
            chatItems.add(
                new SystemMessageChatItem(
                    "Server sent an error \"" + message.getErrorMessage().getMessage() + "\"",
                    Color.RED));
          } else if (message.hasWordReveal()) {
            ServerMessage.WordRevealMessage wordReveal = message.getWordReveal();

            String reason = null;

            if (wordReveal.getReason()
                == ServerMessage.WordRevealMessage.RevealReason.EVERYONE_GUESSED) {
              reason = "Everyone guesse correctly, the word was " + wordReveal.getWord() + ".";
            } else if (wordReveal.getReason()
                == ServerMessage.WordRevealMessage.RevealReason.TIMEOUT) {
              reason = "This round time outed, the word was " + wordReveal.getWord() + ".";
            } else {
              reason = "The round ended, the word was " + wordReveal.getWord() + ".";
            }

            chatItems.add(new SystemMessageChatItem(reason, Color.GOLD));
          } else if (message.hasUpdatePlayerDrawing()) {
            chatItems.add(
                new SystemMessageChatItem(
                    "The game may begin!",
                    Color.ORANGE));
          } else if (message.hasPlayerGuessed()) {
            ServerMessage.PlayerGuessedMessage playerGuessed = message.getPlayerGuessed();

            ClientInfo info =
                stateManager.getState().getClient(playerGuessed.getPlayerId());

            if (info == null) {
              logger.error(
                  "Invalid player id {} in lobbyOwnerChange message", playerGuessed.getPlayerId());
              return;
            }

            chatItems.add(
                new SystemMessageChatItem(
                    "The player: \"" + info.getName() + "\" have guessd the correct word!",
                    Color.GREEN));
          } else if (message.hasLobbyOwnerChange()) {
            ServerMessage.LobbyOwnerChanged lobbyOwnerChange = message.getLobbyOwnerChange();

            ClientInfo info =
                stateManager.getState().getClient(lobbyOwnerChange.getNewOwnerId());

            if (info == null) {
              logger.error(
                  "Invalid player id {} in lobbyOwnerChange message", lobbyOwnerChange.getNewOwnerId());
              return;
            }

            chatItems.add(
                new SystemMessageChatItem(
                    "The ownership of the room was given to: \"" + info.getName() + "\"!",
                    Color.ORANGE));
          }
        };

    this.stateManager = stateManager;

    this.drawClient.addMessageListener(this.handler);
  }

  public void destroy() {
    this.drawClient.removeMessageListener(this.handler);
  }

  public ObservableList<ChatItem> getChatItems() {
    return chatItems;
  }

  public void sendMessage(String message) {
    try {
      this.drawClient.sendMessage(
          ClientMessage.newBuilder()
              .setChatMessage(ClientMessage.ChatMessage.newBuilder().setMessage(message).build())
              .build());

      this.chatItems.add(new UserMessageChatItem(this.stateManager.getState().getName(), message));
    } catch (IOException e) {
      logger.error("Could not send message \"{}\"", message, e);
    }
  }
}
