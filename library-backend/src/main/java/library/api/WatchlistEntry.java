package library.api;

/**
 * Enhances {@link CatalogueEntry} with additional properties
 */
public class WatchlistEntry {

  private final CatalogueEntry catalogueEntry;
  private final long numberOfWatchers;

  public WatchlistEntry(CatalogueEntry catalogueEntry, long numberOfWatchers) {
    this.catalogueEntry = catalogueEntry;
    this.numberOfWatchers = numberOfWatchers;
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

  public long getNumberOfWatchers() {
    return numberOfWatchers;
  }
}
