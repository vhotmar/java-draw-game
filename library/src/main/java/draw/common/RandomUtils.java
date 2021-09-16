package draw.common;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.List;

public class RandomUtils {
  public static String generateId() {
    SecureRandom rand = new SecureRandom();
    byte[] randomBytes = new byte[8];
    rand.nextBytes(randomBytes);

    return Base64.getEncoder().encodeToString(randomBytes);
  }
}
