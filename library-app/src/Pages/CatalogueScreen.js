import React, { Component } from "react";
import Catalogue from "../Containers/Catalogue/Catalogue";
import SearchBar from "../Components/SearchBar/SearchBar";
import LibraryNavbar from "../Components/Navbar/LibraryNavbar";
import CatalogueTable from "../Containers/CatalogueTable/CatalogueTable";

const CatalogueScreen = () => {
  return (
    <div>
      <LibraryNavbar />
      <CatalogueTable />
      {/* <Catalogue /> */}
    </div>
  );
};

export default CatalogueScreen;
