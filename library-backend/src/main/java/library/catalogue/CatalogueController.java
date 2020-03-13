package library.catalogue;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
class CatalogueController {

  private final CatalogueService catalogueService;

  @Autowired
  CatalogueController(CatalogueService catalogueService) {
    this.catalogueService = catalogueService;
  }

  @RequestMapping(method = RequestMethod.GET, path = "/api/catalogue")
  public List<CatalogueEntry> getCatalogue() {
    return catalogueService.getCatalogue();
  }

}