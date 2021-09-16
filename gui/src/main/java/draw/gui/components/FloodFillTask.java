package draw.gui.components;

import javafx.concurrent.Task;
import javafx.geometry.Point2D;
import javafx.scene.image.Image;
import javafx.scene.image.PixelReader;
import javafx.scene.image.PixelWriter;
import javafx.scene.image.WritableImage;
import javafx.scene.paint.Color;

import java.util.List;
import java.util.Stack;

public class FloodFillTask extends Task<Image> {
  private final Point2D fromPoint;
  private final Color fillColor;
  private final WritableImage canvasSnapshot;

  public FloodFillTask(Point2D fromPoint, Color fillColor, WritableImage canvasSnapshot) {
    this.fromPoint = fromPoint;
    this.fillColor = fillColor;
    this.canvasSnapshot = canvasSnapshot;
  }

  @Override
  protected Image call() {
    Stack<Point2D> stack = new Stack<>();

    PixelReader pixelReader = canvasSnapshot.getPixelReader();
    PixelWriter pixelWriter = canvasSnapshot.getPixelWriter();

    Color targetColor =
        pixelReader.getColor((int) fromPoint.getX(), (int) fromPoint.getY());

    stack.push(fromPoint);

    while (!stack.empty()) {
      Point2D pixel = stack.pop();
      Color pixelColor = pixelReader.getColor((int) pixel.getX(), (int) pixel.getY());

      if (!pixelColor.equals(targetColor)) {
        continue;
      }

      List<Point2D> possibilities =
          List.of(
              pixel.add(1, 1),
              pixel.add(1, 0),
              pixel.add(1, -1),
              pixel.add(-1, 1),
              pixel.add(-1, 0),
              pixel.add(-1, -1),
              pixel.add(0, 1),
              pixel.add(0, -1));

      pixelWriter.setColor((int) pixel.getX(), (int) pixel.getY(), fillColor);

      possibilities.stream()
          .filter(
              point ->
                  point.getX() >= 0
                      && point.getY() >= 0
                      && point.getX() <= canvasSnapshot.getWidth()
                      && point.getY() <= canvasSnapshot.getHeight())
          .forEach(stack::push);
    }

    return canvasSnapshot;
  }
}
