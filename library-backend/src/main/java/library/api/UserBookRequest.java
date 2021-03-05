package library.api;

public class UserBookRequest {

  private final String isbn;
  private final String userId;

  public UserBookRequest(final String isbn, final String userId) {
    this.isbn = isbn;
    this.userId = userId;
  }

  public String getIsbn() {
    return isbn;
  }

  public String getUserId() {
    return userId;
  }
}