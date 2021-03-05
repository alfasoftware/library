package library.api;

import java.time.LocalDate;

/**
 * Enhances {@link CatalogueEntry} with additional properties
 */
public class WatchlistEntry {

  private final CatalogueEntry catalogueEntry;
  private final long numberOfWatchers;
  private final LocalDate nextAvailableDate;

  public WatchlistEntry(CatalogueEntry catalogueEntry, long numberOfWatchers, LocalDate nextAvailableDate) {
    this.catalogueEntry = catalogueEntry;
    this.numberOfWatchers = numberOfWatchers;
    this.nextAvailableDate = nextAvailableDate;
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

  public CatalogueEntry getCatalogueEntry() {
    return catalogueEntry;
  }
}
