package draw.gui;

import com.google.inject.AbstractModule;
import javafx.fxml.FXMLLoader;
import javafx.scene.Group;
import javafx.scene.layout.Pane;

import javax.inject.Qualifier;
import javax.inject.Singleton;
import java.lang.annotation.Retention;

import static java.lang.annotation.RetentionPolicy.RUNTIME;

public class DrawModule extends AbstractModule {
  private final Group appRoot;

  public DrawModule(Group appRoot) {
    this.appRoot = appRoot;
  }

  public @Retention(RUNTIME) @Qualifier @interface AppRoot {}

  @Override
  protected void configure() {
    bind(Group.class).annotatedWith(AppRoot.class).toInstance(appRoot);
    bind(FXMLLoader.class).toProvider(FXMLLoaderProvider.class);
    // bind(AppRouter.class).to(AppRouter.class);
    bind(AppContainer.class).toProvider(AppContainerProvider.class).in(Singleton.class);
  }
}
