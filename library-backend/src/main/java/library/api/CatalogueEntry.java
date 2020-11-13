package library.api;

public class CatalogueEntry {

  private final Volumes volume;
  private final long availableCopies;
  private final long isbn;

  public CatalogueEntry(final Volumes volume, final long availableCopies, long isbn) {
    this.volume = volume;
    this.availableCopies = availableCopies;
    this.isbn = isbn;
  }

  public Volumes getVolume() {
    return volume;
  }

  public long getAvailableCopies() {
    return availableCopies;
  }

  public long getIsbn() {
    return isbn;
  }
}