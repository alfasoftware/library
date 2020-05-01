package library;

class CheckoutOrReturnRequest {

  private final long isbn;
  private final String userId;

  CheckoutOrReturnRequest(final long isbn, final String userId) {
    this.isbn = isbn;
    this.userId = userId;
  }

  long getIsbn() {
    return isbn;
  }

  String getUserId() {
    return userId;
  }
}