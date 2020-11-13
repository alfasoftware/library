package library.api;

import java.util.Map;

public class SearchResult {

  private final long isbn;
  private final String title;
  private final Map<String, String> imageLinks;

  public SearchResult(long isbn, String title, Map<String, String> imageLinks) {
    this.isbn = isbn;
    this.title = title;
    this.imageLinks = imageLinks;
  }

  public long getIsbn() {
    return isbn;
  }

  public String getTitle() {
    return title;
  }

  public Map<String, String> getImageLinks() {
    return imageLinks;
  }

}
