package library;

public class IsbnToCopies {

  private final String isbn;
  private final long copies;

  public IsbnToCopies(final String isbn, final long copies) {
    this.isbn = isbn;
    this.copies = copies;
  }

  String getIsbn() {
    return isbn;
  }

  long getCopies() {
    return copies;
  }
}