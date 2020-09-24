package library;

import com.google.api.services.books.model.Volume;

class CatalogueEntry {

  private final Volume volume;
  private final long availableCopies;

  CatalogueEntry(final Volume volume, final long availableCopies) {
    this.volume = volume;
    this.availableCopies = availableCopies;
  }

  public Volume getVolume() {
    return volume;
  }

  public long getAvailableCopies() {
    return availableCopies;
  }
}