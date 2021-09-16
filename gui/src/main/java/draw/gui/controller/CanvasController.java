package draw.gui.controller;

import draw.common.messages.DrawCommand;
import draw.common.messages.ServerMessage;
import draw.gui.ColorUtils;
import draw.gui.DrawClient;
import draw.gui.components.DrawCanvas;
import draw.gui.model.ClientService;
import draw.gui.model.DrawManager;
import draw.gui.model.State;
import javafx.event.EventHandler;
import javafx.geometry.Point2D;
import javafx.scene.input.MouseEvent;
import javafx.scene.paint.Color;

public class CanvasController {
  private final DrawCanvas view;
  private final ClientService clientService;

  private final DrawClient.MessageHandler messageHandler;

  private final EventHandler<MouseEvent> handleMousePressed;
  private final EventHandler<MouseEvent> handleMouseDragged;
  private final EventHandler<MouseEvent> handleMouseReleased;

  private Point2D lastPoint;

  public CanvasController(DrawCanvas view, ClientService clientService) {
    this.view = view;
    this.clientService = clientService;

    handleMousePressed =
        (e) -> {
          if (!isUserDrawing()) {
            return;
          }

          lastPoint = new Point2D(e.getX(), e.getY());

          DrawCommand beginPathCommand =
              clientService
                  .getDrawManager()
                  .beginPathCommand(new DrawManager.DrawState(Color.RED, 3));

          DrawCommand lineToCommand = clientService.getDrawManager().lineToCommand(null, lastPoint);

          processDrawCommand(beginPathCommand);
          processDrawCommand(lineToCommand);

          clientService.getDrawManager().sendMessage(beginPathCommand, lineToCommand);
        };

    handleMouseReleased =
        (e) -> {
          if (!isUserDrawing()) {
            return;
          }

          DrawCommand drawCommand = clientService.getDrawManager().closePathCommand();

          processDrawCommand(drawCommand);

          clientService.getDrawManager().sendMessage(drawCommand);
        };

    handleMouseDragged =
        (e) -> {
          if (!isUserDrawing()) {
            return;
          }

          Point2D nextPoint = new Point2D(e.getX(), e.getY());

          DrawCommand drawCommand =
              clientService.getDrawManager().lineToCommand(lastPoint, nextPoint);

          lastPoint = nextPoint;

          processDrawCommand(drawCommand);

          clientService.getDrawManager().sendMessage(drawCommand);
        };

    messageHandler = (message) -> {
      if (message.hasDrawMessage()) {
        ServerMessage.DrawMessage drawMessage = message.getDrawMessage();

        drawMessage.getCommandsList().forEach(this::processDrawCommand);
      } else if (message.hasClearCanvas()) {
        view.clear();
      }
    };
  }

  public void initialize() {
    clientService.getDrawClient().addMessageListener(messageHandler);

    clientService.getStateManager().getState().getDrawCommands().forEach(this::processDrawCommand);

    view.setOnMousePressed(this.handleMousePressed);
    view.setOnMouseDragged(this.handleMouseDragged);
    view.setOnMouseReleased(this.handleMouseReleased);
  }

  public void destroy() {
    clientService.getDrawClient().removeMessageListener(messageHandler);

    view.setOnMousePressed(null);
    view.setOnMouseDragged(null);
    view.setOnMouseReleased(null);
  }

  private void processDrawCommand(DrawCommand command) {
    if (command.hasBeginPath()) {
      DrawCommand.DrawBeginPath beginPath = command.getBeginPath();
      DrawCommand.DrawState state = beginPath.getState();

      view.beginPath(state.getLineWidth(), ColorUtils.convertColor(state.getColor()));
    } else if (command.hasClosePath()) {
      view.closePath();
    } else if (command.hasFill()) {
      DrawCommand.DrawFill fill = command.getFill();

      view.fill(
          new Point2D(fill.getFillX(), fill.getFillY()), ColorUtils.convertColor(fill.getColor()));
    } else if (command.hasLineTo()) {
      DrawCommand.DrawLineTo lineTo = command.getLineTo();

      view.lineTo(lineTo.getToX(), lineTo.getToY());
    }
  }

  @SuppressWarnings("BooleanMethodIsAlwaysInverted")
  private boolean isUserDrawing() {
    State state = clientService.getStateManager().getState();

    return state.getDrawId().equals(state.getClientId());
  }
}
