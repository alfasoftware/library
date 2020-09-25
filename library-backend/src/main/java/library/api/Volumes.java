package library.api;

import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import com.google.api.client.util.Lists;

/**
 * Wrapper for {@link com.google.api.services.books.v1.model.Volumes}.
 */
@JsonIgnoreProperties(ignoreUnknown=true)
public class Volumes {

  private int totalItems;
  private List<Items> items = Lists.newArrayList();

  public int getTotalItems() {
    return totalItems;
  }

  public void setTotalItems(int totalItems) {
    this.totalItems = totalItems;
  }

  public List<Items> getItems() {
    return items;
  }

  public void setItems(List<Items> items) {
    this.items = items;
  }
}