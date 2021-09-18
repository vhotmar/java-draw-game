package draw.gui.controller;

import draw.gui.components.score.ScoreItem;
import draw.gui.components.score.ScoreView;
import draw.gui.model.ClientInfo;
import draw.gui.model.ClientService;
import javafx.collections.FXCollections;
import javafx.collections.ListChangeListener;
import javafx.collections.ObservableList;

import java.util.*;
import java.util.stream.Collectors;

public class ScoreController {
  private final ScoreView view;
  private final ClientService clientService;
  private final ObservableList<ScoreItem> scoreItems = FXCollections.observableArrayList();
  private final ListChangeListener<ClientInfo> clientInfosListener;

  public ScoreController(ScoreView view, ClientService clientService) {
    this.view = view;
    this.clientService = clientService;
    this.clientInfosListener =
        (e) -> invalidateScoreItems();
  }

  public void initialize() {
    view.setItems(scoreItems);
    clientService.getStateManager().getClientInfos().addListener(clientInfosListener);

    invalidateScoreItems();
  }

  public void destroy() {
    view.setItems(null);
    clientService.getStateManager().getClientInfos().removeListener(clientInfosListener);
  }

  private void invalidateScoreItems() {
    class Item {
      public final String id;
      public final int score;

      Item(String id, int score) {
        this.id = id;
        this.score = score;
      }
    }

    List<Item> idsSortedByScore =
        clientService.getStateManager().getConnectedClientInfos().stream()
            .map(info -> new Item(info.getId(), info.getScore()))
            .sorted(Comparator.comparingInt((Item a) -> a.score).reversed())
            .collect(Collectors.toList());

    Map<String, Integer> positions = new HashMap<>();

    Integer lastScore = null;
    int lastPosition = 1;
    int currentPosition = 0;

    for (Item item : idsSortedByScore) {
      currentPosition++;

      if (lastScore == null) {
        lastScore = item.score;
      } else if (lastScore != item.score) {
        lastPosition = currentPosition;
      }

      positions.put(item.id, lastPosition);
    }

    List<ScoreItem> items = new ArrayList<>();

    for (ClientInfo clientInfo : clientService.getStateManager().getConnectedClientInfos()) {
      items.add(
          new ScoreItem(
              clientInfo.getId(),
              clientInfo.getName(),
              clientInfo.getScore(),
              positions.get(clientInfo.getId())));
    }

    scoreItems.clear();
    scoreItems.addAll(items);
  }
}
