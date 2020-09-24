package library;

public class IsbnToAvailableCopies {

  private final long isbn;
  private final long availableCopies;

  public IsbnToAvailableCopies(final long isbn, final long availableCopies) {
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }

  long getIsbn() {
    return isbn;
  }

  long getAvailableCopies() {
    return availableCopies;
  }
}