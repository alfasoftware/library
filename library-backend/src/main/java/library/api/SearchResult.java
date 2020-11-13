package library.api;

import java.util.Map;

public class SearchResult {

  private final String isbn;
  private final String title;
  private final Map<String, String> imageLinks;

  public SearchResult(String isbn, String title, Map<String, String> imageLinks) {
    this.isbn = isbn;
    this.title = title;
    this.imageLinks = imageLinks;
  }

  public String getIsbn() {
    return isbn;
  }

  public String getTitle() {
    return title;
  }

  public Map<String, String> getImageLinks() {
    return imageLinks;
  }

}
