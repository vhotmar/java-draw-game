package draw.gui.components;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;

public class NoSelectionModel<T> extends javafx.scene.control.MultipleSelectionModel<T> {
  @Override
  public ObservableList<Integer> getSelectedIndices() {
    return FXCollections.emptyObservableList();
  }

  @Override
  public ObservableList<T> getSelectedItems() {
    return FXCollections.emptyObservableList();
  }

  @Override
  public void selectIndices(int index, int... indices) {

  }

  @Override
  public void selectAll() {

  }

  @Override
  public void clearAndSelect(int index) {

  }

  @Override
  public void select(int index) {

  }

  @Override
  public void select(T obj) {

  }

  @Override
  public void clearSelection(int index) {

  }

  @Override
  public void clearSelection() {

  }

  @Override
  public boolean isSelected(int index) {
    return false;
  }

  @Override
  public boolean isEmpty() {
    return false;
  }

  @Override
  public void selectPrevious() {

  }

  @Override
  public void selectNext() {

  }

  @Override
  public void selectFirst() {

  }

  @Override
  public void selectLast() {

  }
}
