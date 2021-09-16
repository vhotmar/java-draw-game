package draw.gui.components;

import draw.gui.controller.GameController;
import javafx.concurrent.Task;
import javafx.geometry.Point2D;
import javafx.scene.canvas.Canvas;
import javafx.scene.image.Image;
import javafx.scene.image.WritableImage;
import javafx.scene.paint.Color;
import javafx.scene.paint.Paint;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class DrawCanvas extends Canvas {
  private static final Logger logger = LogManager.getLogger(DrawCanvas.class);

  public void clear() {
    getGraphicsContext2D().setFill(Color.WHITE);
    getGraphicsContext2D().setStroke(Color.WHITE);
    getGraphicsContext2D().fillRect(0, 0, getWidth(), getHeight());
    getGraphicsContext2D().strokeRect(0, 0, getWidth(), getHeight());
  }

  public void beginPath(double lineWidth, Paint paint) {
    getGraphicsContext2D().setLineWidth(lineWidth);
    getGraphicsContext2D().setStroke(paint);
    getGraphicsContext2D().beginPath();
  }

  public void closePath() {
    getGraphicsContext2D().stroke();
    getGraphicsContext2D().closePath();
  }

  public void lineTo(double x, double y) {
    getGraphicsContext2D().stroke();
    getGraphicsContext2D().lineTo(x, y);
  }

  public void fill(Point2D fromPoint, Color color) {
    WritableImage canvasSnapshot =
        new WritableImage((int) getWidth(), (int) getHeight());

    snapshot(null, canvasSnapshot);

    Task<Image> task = new FloodFillTask(fromPoint, color, canvasSnapshot);
    task.setOnSucceeded(e -> getGraphicsContext2D().drawImage(canvasSnapshot, 0, 0));

    new Thread(task).start();
  }
}
