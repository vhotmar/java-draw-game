package draw.gui.model;

import draw.common.messages.ServerMessage;
import draw.gui.DrawClient;
import javafx.application.Platform;
import javafx.collections.FXCollections;
import javafx.collections.ListChangeListener;
import javafx.collections.MapChangeListener;
import javafx.collections.ObservableList;
import javafx.collections.transformation.FilteredList;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class StateManager {
  private static final Logger logger = LogManager.getLogger(StateManager.class);

  private final DrawClient drawClient;
  private final State state = new State();
  private final DrawClient.MessageHandler handler;
  private final MapChangeListener<String, ClientInfo> clientsChangeListener;

  private final ObservableList<ClientInfo> clientInfos =
      FXCollections.observableArrayList(ClientInfo::getObservables);

  private final ObservableList<ClientInfo> connectedClientInfos =
      new FilteredList<>(clientInfos, ClientInfo::isConnected);

  public StateManager(DrawClient drawClient) {
    this.drawClient = drawClient;

    handler = new StateUpdateMessageHandler();
    clientsChangeListener = new ClientsMapToListChangeListener();

    state.clientsProperty().addListener(clientsChangeListener);
    drawClient.addMessageListener(handler);
  }

  public void destroy() {
    state.clientsProperty().removeListener(clientsChangeListener);
    drawClient.removeMessageListener(handler);
  }

  public State getState() {
    return state;
  }

  public ObservableList<ClientInfo> getClientInfos() {
    return clientInfos;
  }

  public ObservableList<ClientInfo> getConnectedClientInfos() {
    return connectedClientInfos;
  }

  private class StateUpdateMessageHandler implements DrawClient.MessageHandler {
    @Override
    public void handleMessage(ServerMessage message) {

      Platform.runLater(
          () -> {
            if (message.hasShowRoom()) {
              ServerMessage.ShowRoomMessage showRoomMessage = message.getShowRoom();
              state.setClientId(showRoomMessage.getClientId());
              state.setOwnerId(showRoomMessage.getOwnerId());

              state.setDrawId(showRoomMessage.getDrawingId());
              state.getDrawCommands().clear();
              state.getDrawCommands().addAll(showRoomMessage.getDrawCommandsList());

              state.getClients().clear();
              state
                  .getClients()
                  .putAll(
                      showRoomMessage.getPlayersList().stream()
                          .map(
                              player ->
                                  new ClientInfo(
                                      player.getPlayerId(),
                                      player.getPlayerName(),
                                      player.getPlayerScore(),
                                      player.getGuessedWord()))
                          .collect(Collectors.toMap(ClientInfo::getId, Function.identity())));
              state
                  .getClients()
                  .put(
                      showRoomMessage.getClientId(),
                      new ClientInfo(showRoomMessage.getClientId(), state.getName(), 0, false));

              state.setRoomId(showRoomMessage.getRoomId());
              state.setInGame(showRoomMessage.getInGame());
            } else if (message.hasDrawMessage()) {
              ServerMessage.DrawMessage drawMessage = message.getDrawMessage();

              state.getDrawCommands().addAll(drawMessage.getCommandsList());
            } else if (message.hasClearCanvas()) {
              state.getDrawCommands().clear();
            } else if (message.hasCurrentWordUpdate()) {
              ServerMessage.CurrentWordUpdateMessage currentWordUpdate =
                  message.getCurrentWordUpdate();

              state.setCurrentWord(currentWordUpdate.getWord());
            } else if (message.hasPlayerConnected()) {
              ServerMessage.PlayerConnectedMessage playerConnectedMessage =
                  message.getPlayerConnected();

              Map<String, ClientInfo> clients = state.getClients();

              ClientInfo info =
                  clients.computeIfAbsent(
                      playerConnectedMessage.getPlayerId(), k -> new ClientInfo());

              info.setId(playerConnectedMessage.getPlayerId());
              info.setName(playerConnectedMessage.getPlayerName());
              info.setScore(playerConnectedMessage.getPlayerScore());
              info.setGuessed(playerConnectedMessage.getGuessedWord());

              logger.trace("Should update players... hmmmm");
            } else if (message.hasPlayerDisconnected()) {
              ServerMessage.PlayerDisconnectedMessage playerDisconnected =
                  message.getPlayerDisconnected();

              ClientInfo info = state.getClient(playerDisconnected.getPlayerId());

              if (info == null) {
                logger.warn("Player is missing");
                return;
              }

              info.setConnected(false);
            } else if (message.hasPlayerGuessed()) {
              ServerMessage.PlayerGuessedMessage playerGuessed = message.getPlayerGuessed();

              Map<String, ClientInfo> clients = state.getClients();

              ClientInfo info = clients.get(playerGuessed.getPlayerId());

              if (info == null) {
                logger.warn("Player is missing");
                return;
              }

              info.setGuessed(true);
            } else if (message.hasWordReveal()) {
              ServerMessage.WordRevealMessage wordReveal = message.getWordReveal();

              Map<String, ClientInfo> clients = state.getClients();

              state.setCurrentWord(wordReveal.getWord());

              wordReveal
                  .getScoresList()
                  .forEach(
                      score -> {
                        ClientInfo info = clients.get(score.getPlayerId());

                        if (info == null) {
                          // TODO: log error
                          return;
                        }

                        info.setScore(score.getPlayerScore());
                      });
            } else if (message.hasGameStarted()) {
              // TODO: whhh
            } else if (message.hasUpdatePlayerDrawing()) {
              state.setDrawId(message.getUpdatePlayerDrawing().getDrawingId());
            } else if (message.hasLobbyOwnerChange()) {
              state.setOwnerId(message.getLobbyOwnerChange().getNewOwnerId());
            }
          });
    }
  }

  private class ClientsMapToListChangeListener implements MapChangeListener<String, ClientInfo> {
    @Override
    public void onChanged(Change<? extends String, ? extends ClientInfo> change) {
      logger.trace("Change detected, right? {}", change);

      if (change.wasRemoved()) {
        clientInfos.remove(change.getValueRemoved());
      }

      if (change.wasAdded()) {
        logger.trace("ADDED");
        clientInfos.add(change.getValueAdded());
      }
    }
  }
}
