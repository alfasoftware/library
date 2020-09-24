import React, { useState, useEffect } from "react";
import LibraryNavbar from "../Components/Navbar/LibraryNavbar";
import { withRouter } from "react-router";
import Book from "../Components/Book/Book";
import axios from "axios";
import BookSearchResultContainer from "../Containers/BookSearchResultContainer/BookSearchResultContainer";

const BookInfoScreen = (props) => {
  return (
    <div>
      <LibraryNavbar />
      <BookSearchResultContainer />
    </div>
  );
};

export default withRouter(BookInfoScreen);
