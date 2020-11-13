package library;

public class IsbnToAvailableCopies {

  private final String isbn;
  private final long availableCopies;

  public IsbnToAvailableCopies(final String isbn, final long availableCopies) {
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }

  String getIsbn() {
    return isbn;
  }

  long getAvailableCopies() {
    return availableCopies;
  }
}