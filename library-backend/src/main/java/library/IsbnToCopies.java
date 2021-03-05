package library;

public class IsbnToCopies {

  private final long isbn;
  private final long copies;

  public IsbnToCopies(final Long isbn, final long copies) {
    this.isbn = isbn;
    this.copies = copies;
  }

  long getIsbn() {
    return isbn;
  }

  long getCopies() {
    return copies;
  }
}