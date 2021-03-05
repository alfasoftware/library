package library.api;

/**
 * Enhances {@link CatalogueEntry} with additional properties
 */
public class WatchlistEntry {

  private final CatalogueEntry catalogueEntry;

  public WatchlistEntry(CatalogueEntry catalogueEntry) {
    this.catalogueEntry = catalogueEntry;
  }


  public Volumes getVolume() {
    return catalogueEntry.getVolume();
  }

  public long getAvailableCopies() {
    return catalogueEntry.getAvailableCopies();
  }

  public String getIsbn() {
    return catalogueEntry.getIsbn();
  }
}
