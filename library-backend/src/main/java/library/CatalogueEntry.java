package library;

import library.api.Volumes;

class CatalogueEntry {

  private final Volumes volume;
  private final long availableCopies;

  CatalogueEntry(final Volumes volume, final long availableCopies) {
    this.volume = volume;
    this.availableCopies = availableCopies;
  }

  public Volumes getVolume() {
    return volume;
  }

  public long getAvailableCopies() {
    return availableCopies;
  }
}