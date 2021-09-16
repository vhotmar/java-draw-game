package draw.gui.model;

import draw.common.messages.ClientMessage;
import draw.common.messages.DrawCommand;
import draw.gui.ColorUtils;
import draw.gui.DrawClient;
import javafx.geometry.Point2D;
import javafx.scene.paint.Color;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;
import java.util.Arrays;

public class DrawManager {
  private static final Logger logger = LogManager.getLogger(DrawManager.class);

  private final DrawClient drawClient;
  private final StateManager stateManager;

  public DrawManager(DrawClient drawClient, StateManager stateManager) {
    this.drawClient = drawClient;
    this.stateManager = stateManager;
  }

  public DrawCommand beginPathCommand(DrawState state) {
    return DrawCommand.newBuilder()
        .setBeginPath(DrawCommand.DrawBeginPath.newBuilder().setState(state.convert()).build())
        .build();
  }

  public DrawCommand closePathCommand() {
    return DrawCommand.newBuilder()
        .setClosePath(DrawCommand.DrawClosePath.newBuilder().build())
        .build();
  }

  public void sendMessage(DrawCommand... commands) {
    try {
      drawClient.sendMessage(buildMessage(Arrays.asList(commands)));
    } catch (IOException e) {
      logger.error("Error while sending draw message {}", commands, e);
    }
  }

  public DrawCommand lineToCommand(Point2D from, Point2D to) {
    DrawCommand.DrawLineTo.Builder builder =
        DrawCommand.DrawLineTo.newBuilder().setToX(to.getX()).setToY(to.getY());

    if (from != null) {
      builder.setFromX(from.getX()).setFromY(from.getY());
    }

    return DrawCommand.newBuilder().setLineTo(builder.build()).build();
  }

  public DrawCommand fillCommand(Color color, Point2D point) {
    return DrawCommand.newBuilder()
        .setFill(
            DrawCommand.DrawFill.newBuilder()
                .setColor(ColorUtils.convertColor(color))
                .setFillX(point.getX())
                .setFillY(point.getY())
                .build())
        .build();
  }

  private ClientMessage buildMessage(Iterable<DrawCommand> command) {
    return ClientMessage.newBuilder()
        .setDraw(ClientMessage.DrawMessage.newBuilder().addAllCommands(command).build())
        .build();
  }

  public static class DrawState {
    private final Color color;
    private final double lineWidth;

    public DrawState(Color color, double lineWidth) {
      this.color = color;
      this.lineWidth = lineWidth;
    }

    public Color getColor() {
      return color;
    }

    public double getLineWidth() {
      return lineWidth;
    }

    public DrawCommand.DrawState convert() {
      return DrawCommand.DrawState.newBuilder()
          .setColor(ColorUtils.convertColor(color))
          .setLineWidth(lineWidth)
          .build();
    }

    public static DrawState convert(DrawCommand.DrawState state) {
      return new DrawState(ColorUtils.convertColor(state.getColor()), state.getLineWidth());
    }
  }
}
