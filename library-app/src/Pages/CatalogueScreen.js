import React, { Component } from "react";
import Catalogue from "../Containers/Catalogue/Catalogue";
import SearchBar from "../Components/SearchBar/SearchBar";
import LibraryNavbar from "../Components/Navbar/LibraryNavbar";

const CatalogueScreen = () => {
  return (
    <div>
      <LibraryNavbar />
      <Catalogue />
    </div>
  );
};

export default CatalogueScreen;
