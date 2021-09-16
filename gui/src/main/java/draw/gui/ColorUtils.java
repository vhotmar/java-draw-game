package draw.gui;

import javafx.scene.paint.Color;

public class ColorUtils {
  public static Color convertColor(draw.common.messages.Color color) {
    return new Color(color.getRed(), color.getGreen(), color.getBlue(), color.getOpacity());
  }

  public static draw.common.messages.Color convertColor(Color color) {
    return draw.common.messages.Color.newBuilder()
        .setRed(color.getRed())
        .setGreen(color.getGreen())
        .setBlue(color.getBlue())
        .setOpacity(color.getOpacity())
        .build();
  }
}
