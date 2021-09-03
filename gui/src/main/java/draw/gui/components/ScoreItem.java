package draw.gui.components;

public class ScoreItem {
  public int playerId;
  public String name;
  public int score;
  public int position;

  public ScoreItem(int playerId, String name, int score, int position) {
    this.playerId = playerId;
    this.name = name;
    this.score = score;
    this.position = position;
  }
}
