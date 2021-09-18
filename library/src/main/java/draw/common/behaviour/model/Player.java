package draw.common.behaviour.model;

import java.io.Serializable;
import java.util.Objects;

public class Player implements Serializable {
  private static final long serialVersionUID = -1189102950566881626L;

  private final String id;
  private boolean guessed = false;
  private int score = 0;
  private int position = 0;

  public Player(String id) {
    this.id = id;
  }

  public String getId() {
    return id;
  }

  public boolean hasGuessed() {
    return guessed;
  }

  public void setGuessed(boolean guessed) {
    this.guessed = guessed;
  }

  public int getScore() {
    return score;
  }

  public void setScore(int score) {
    this.score = score;
  }

  public int getPosition() {
    return position;
  }

  public void setPosition(int position) {
    this.position = position;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Player player = (Player) o;
    return id.equals(player.id);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }
}
