package draw.common.behaviour.services;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.map.IMap;
import com.hazelcast.topic.ITopic;
import draw.common.messages.ServerMessage;
import draw.common.behaviour.model.Client;
import draw.common.behaviour.model.ClientMessageWrapper;
import draw.common.behaviour.transitions.UpdateClientProcessor;

import java.util.Map;
import java.util.Set;

public class ClientService {
  private final String clientId;
  private final IMap<String, Client> clients;
  private final ITopic<ClientMessageWrapper> clientTopic;

  public ClientService(HazelcastInstance client, String clientId) {
    this.clientId = clientId;

    clients = client.getMap("draw/clients");
    clientTopic = client.getTopic("draw/client/" + clientId);
  }

  public Client getClient() {
    return getClient(clientId);
  }

  public Client getClient(String clientId) {
    return clients.get(clientId);
  }

  public Map<String, Client> getClients(Set<String> clientIds) {
    return clients.getAll(clientIds);
  }

  @SuppressWarnings("BooleanMethodIsAlwaysInverted")
  public boolean isClientInitialized() {
    Client client = getClient(clientId);

    if (client == null) return false;

    return client.getRoomId() != null;
  }

  public String getClientId() {
    return clientId;
  }

  public void sendMessage(ServerMessage message) {
    this.clientTopic.publish(new ClientMessageWrapper(message));
  }

  public void joinedRoom(String roomId) {
    this.clientTopic.publish(new ClientMessageWrapper(roomId));
  }

  public void sendError(String error) {
    this.clientTopic.publish(
        new ClientMessageWrapper(
            ServerMessage.newBuilder()
                .setErrorMessage(ServerMessage.ErrorMessage.newBuilder().setMessage(error).build())
                .build()));
  }

  public Client updateInfo(String clientName, String roomId) {
    return clients.executeOnKey(clientId, new UpdateClientProcessor(clientName, roomId));
  }

  public void close() {

  }
}
