package library;

public class CatalogueEntry {

  private final long isbn;
  private final int availableCopies;

  public CatalogueEntry(final long isbn, final int availableCopies) {
    this.isbn = isbn;
    this.availableCopies = availableCopies;
  }

  public long getIsbn() {
    return isbn;
  }

  public int getAvailableCopies() {
    return availableCopies;
  }
}