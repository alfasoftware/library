package library.api;

import java.util.Map;

public class SearchResult {

  private long isbn;
  private String title;
  private  Map<String, String> imageLinks;

  public long getIsbn() {
    return isbn;
  }

  public void setIsbn(long isbn) {
    this.isbn = isbn;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Map<String, String> getImageLinks() {
    return imageLinks;
  }

  public void setImageLinks(Map<String, String> imageLinks) {
    this.imageLinks = imageLinks;
  }
}
