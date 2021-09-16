package draw.gui.components.score;

public class ScoreItem {
  public String playerId;
  public String name;
  public int score;
  public int position;

  public ScoreItem(String playerId, String name, int score, int position) {
    this.playerId = playerId;
    this.name = name;
    this.score = score;
    this.position = position;
  }
}
