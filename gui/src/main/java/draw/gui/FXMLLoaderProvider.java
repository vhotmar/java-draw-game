package draw.gui;

import com.google.inject.Injector;
import javafx.fxml.FXMLLoader;

import javax.inject.Inject;
import javax.inject.Provider;
import java.util.Locale;
import java.util.ResourceBundle;

public class FXMLLoaderProvider implements Provider<FXMLLoader> {
  @Inject Injector injector;

  @Override
  public FXMLLoader get() {
    FXMLLoader loader = new FXMLLoader();

    loader.setResources(ResourceBundle.getBundle("bundles.DrawBundle", new Locale("en", "EN")));
    loader.setControllerFactory(p -> injector.getInstance(p));

    return loader;
  }
}
