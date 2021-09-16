package draw.server;

import com.hazelcast.auditlog.Level;
import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import jakarta.servlet.annotation.WebListener;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@WebListener
public class DrawContextListener implements ServletContextListener {
  private static final Logger logger = LogManager.getLogger(DrawContextListener.class);

  @Override
  public void contextInitialized(ServletContextEvent sce) {
    logger.info("draw context initialized");
    //noinspection ResultOfMethodCallIgnored
    HazelcastClientInstance.getInstance();
  }

  @Override
  public void contextDestroyed(ServletContextEvent sce) {
    logger.info("draw context destroyed");
    HazelcastClientInstance.getInstance().getClient().shutdown();
  }
}
