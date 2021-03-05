package library.api;

public class CatalogueEntry {

  private final Volumes volume;
  private final long availableCopies;
  private final String isbn;

  public CatalogueEntry(final Volumes volume, final long availableCopies, long isbn) {
    this.volume = volume;
    this.availableCopies = availableCopies;
    this.isbn = String.valueOf(isbn);
  }

  public Volumes getVolume() {
    return volume;
  }

  public long getAvailableCopies() {
    return availableCopies;
  }

  public String getIsbn() {
    return isbn;
  }
}