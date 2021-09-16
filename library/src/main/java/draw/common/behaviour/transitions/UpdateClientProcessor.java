package draw.common.behaviour.transitions;

import com.hazelcast.map.EntryProcessor;
import draw.common.behaviour.model.Client;

import java.util.Map;

public class UpdateClientProcessor implements EntryProcessor<String, Client, Client> {
  private final String clientName;
  private final String roomId;

  public UpdateClientProcessor(String clientName, String roomId) {
    this.clientName = clientName;
    this.roomId = roomId;
  }

  @Override
  public Client process(Map.Entry<String, Client> entry) {
    String clientId = entry.getKey();
    Client client = entry.getValue();

    if (client == null) {
      client = new Client(clientId, clientName, roomId);
    }

    client.setId(clientId);
    client.setName(clientName);
    client.setRoomId(roomId);

    entry.setValue(client);

    return client;
  }
}
