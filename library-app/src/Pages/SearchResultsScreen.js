import React from "react";
import Book from "../Components/Book/Book";
import LibraryNavbar from "../Components/Navbar/LibraryNavbar";

const SearchResultsScreen = (props) => {
  return (
    <div>
      <LibraryNavbar />
      <Book />
    </div>
  );
};

export default SearchResultsScreen;
