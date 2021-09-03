package draw.gui.components;

import javafx.animation.FadeTransition;
import javafx.beans.property.ObjectProperty;
import javafx.css.CssMetaData;
import javafx.css.Styleable;
import javafx.css.StyleableObjectProperty;
import javafx.css.StyleableProperty;
import javafx.css.converter.DurationConverter;
import javafx.geometry.Insets;
import javafx.scene.control.ProgressIndicator;
import javafx.scene.control.SkinBase;
import javafx.scene.layout.Background;
import javafx.scene.layout.BackgroundFill;
import javafx.scene.layout.CornerRadii;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.util.Duration;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LoadingOverlaySkin extends SkinBase<LoadingOverlay> {
  private final StackPane backgroundPane;
  private final ProgressIndicator progressIndicator;
  private final FadeTransition transition;

  public LoadingOverlaySkin(LoadingOverlay control) {
    super(control);

    backgroundPane = new StackPane();
    backgroundPane.setBackground(new Background(new BackgroundFill(new Color(0, 0, 0, 0.4), CornerRadii.EMPTY, Insets.EMPTY)));

    progressIndicator = new ProgressIndicator();

    transition = new FadeTransition();
    transition.setNode(backgroundPane);
    transition.setFromValue(0);
    transition.setToValue(1);
    transition.durationProperty().bind(durationProperty());

    transition.setOnFinished(
        (event) -> {
          if (!control.getShowing()) {
            getChildren().remove(backgroundPane);
          }
        });

    backgroundPane.getChildren().add(progressIndicator);

    control
        .showingProperty()
        .addListener(
            (observable, oldValue, newValue) -> {
              transition.stop();
              if (newValue) {
                getChildren().add(backgroundPane);
                transition.setRate(1);
                transition.jumpTo(Duration.ZERO);
              } else {
                transition.setRate(-1);
                transition.jumpTo(transition.getDuration());
              }

              transition.play();
            });
  }

  @Override
  protected double computeMaxWidth(double height, double topInset, double rightInset, double bottomInset, double leftInset) {
    if (!getSkinnable().getShowing()) return 0;

    return super.computeMaxWidth(height, topInset, rightInset, bottomInset, leftInset);
  }

  @Override
  protected double computeMaxHeight(double width, double topInset, double rightInset, double bottomInset, double leftInset) {
    if (!getSkinnable().getShowing()) return 0;

    return super.computeMaxHeight(width, topInset, rightInset, bottomInset, leftInset);
  }

  public final ObjectProperty<Duration> durationProperty() {
    if (duration == null) {
      duration =
          new StyleableObjectProperty<Duration>(Duration.millis(200)) {
            @Override
            public Object getBean() {
              return LoadingOverlaySkin.this;
            }

            @Override
            public String getName() {
              return "duration";
            }

            @Override
            public CssMetaData<LoadingOverlay, Duration> getCssMetaData() {
              return StyleableProperties.DURATION;
            }
          };
    }

    return duration;
  }

  private ObjectProperty<Duration> duration = null;

  public final void setDuration(Duration duration) {
    durationProperty().set(duration);
  }

  public final Duration getDuration() {
    return duration == null ? Duration.millis(200) : duration.get();
  }

  private static class StyleableProperties {
    private static final CssMetaData<LoadingOverlay, Duration> DURATION =
        new CssMetaData<>("-duration", DurationConverter.getInstance()) {
          @Override
          public boolean isSettable(LoadingOverlay n) {
            final LoadingOverlaySkin skin = (LoadingOverlaySkin) n.getSkin();
            return skin.duration == null || !skin.duration.isBound();
          }

          @Override
          public StyleableProperty<Duration> getStyleableProperty(LoadingOverlay n) {
            final LoadingOverlaySkin skin = (LoadingOverlaySkin) n.getSkin();
            return (StyleableProperty<Duration>) skin.duration;
          }
        };

    private static final List<CssMetaData<? extends Styleable, ?>> STYLEABLES;

    static {
      List<CssMetaData<? extends Styleable, ?>> styleables =
          new ArrayList<>(SkinBase.getClassCssMetaData());
      styleables.add(DURATION);

      STYLEABLES = Collections.unmodifiableList(styleables);
    }
  }

  public static List<CssMetaData<? extends Styleable, ?>> getClassCssMetaData() {
    return StyleableProperties.STYLEABLES;
  }

  /** {@inheritDoc} */
  @Override
  public List<CssMetaData<? extends Styleable, ?>> getCssMetaData() {
    return getClassCssMetaData();
  }
}
