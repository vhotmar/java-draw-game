package draw.server;

import com.hazelcast.client.HazelcastClient;
import com.hazelcast.core.HazelcastInstance;
import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;
import jakarta.servlet.annotation.WebListener;

import java.util.logging.Logger;

@WebListener
public class DrawContextListener implements ServletContextListener {
  private static final Logger LOG = Logger.getLogger(DrawContextListener.class.getName());

  @Override
  public void contextInitialized(ServletContextEvent sce) {
    LOG.info("Context initialized");
    HazelcastInstance hazelcastInstance = HazelcastClient.newHazelcastClient();
  }

  @Override
  public void contextDestroyed(ServletContextEvent sce) {

  }
}
