package library.catalogue;

import java.util.List;

import org.springframework.stereotype.Component;

import com.google.common.collect.Lists;

/**
 * Dummy implementation of CatalogueService, hardcoded to return a catalogue entry
 * representing 10 available copies of "The Big Sudoku Collection".
 */
@Component
class SudokuCollectionCatalogueService implements CatalogueService {
  @Override
  public List<CatalogueEntry> getCatalogue() {
    return Lists.newArrayList(new CatalogueEntry(9772048817001L, 10));
  }
}