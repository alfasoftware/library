package library.api;

public class CheckoutOrReturnRequest {

  private final String isbn;
  private final String userId;

  public CheckoutOrReturnRequest(final String isbn, final String userId) {
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