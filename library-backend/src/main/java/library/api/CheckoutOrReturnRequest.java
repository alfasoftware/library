package library.api;

public class CheckoutOrReturnRequest {

  private final long isbn;
  private final String userId;

  public CheckoutOrReturnRequest(final long isbn, final String userId) {
    this.isbn = isbn;
    this.userId = userId;
  }

  public long getIsbn() {
    return isbn;
  }

  public String getUserId() {
    return userId;
  }
}