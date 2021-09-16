package draw.common.behaviour.model;

import draw.common.messages.DrawCommand;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Room implements Serializable {
  private static final long serialVersionUID = -1189102950566881626L;

  private final String id;
  private final Map<String, Player> players;

  private final List<DrawCommand> drawCommands = new ArrayList<>();

  private String ownerId;

  private RoomState roomState = RoomState.LOBBY;
  private GameState gameState = GameState.NONE;
  private int gameId = 0;
  private String drawingId;
  private String currentWord;
  private List<String> wordSelection;

  public enum RoomState {
    LOBBY,
    GAME
  }

  public enum GameState {
    NONE,
    WORD_CHOOSE,
    DRAWING,
    SCORE
  }

  public Room(String id, Map<String, Player> players) {
    this.id = id;
    this.players = players;
  }

  public String getId() {
    return id;
  }

  public Map<String, Player> getPlayers() {
    return players;
  }

  public RoomState getRoomState() {
    return roomState;
  }

  public void setRoomState(RoomState roomState) {
    this.roomState = roomState;
  }

  public String getOwnerId() {
    return ownerId;
  }

  public void setOwnerId(String ownerId) {
    this.ownerId = ownerId;
  }

  public String getDrawingId() {
    return drawingId;
  }

  public void setDrawingId(String drawingId) {
    this.drawingId = drawingId;
  }

  public List<DrawCommand> getDrawCommands() {
    return drawCommands;
  }

  public String getCurrentWord() {
    return currentWord;
  }

  public void setCurrentWord(String currentWord) {
    this.currentWord = currentWord;
  }

  public GameState getGameState() {
    return gameState;
  }

  public void setGameState(GameState gameState) {
    this.gameState = gameState;
  }

  public List<String> getWordSelection() {
    return wordSelection;
  }

  public void setWordSelection(List<String> wordSelection) {
    this.wordSelection = wordSelection;
  }

  public int getGameId() {
    return gameId;
  }

  public void setGameId(int gameId) {
    this.gameId = gameId;
  }
}
