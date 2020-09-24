import React, { Component } from "react";
import { useState } from "react";
import "./App.css";
import Book from "./Components/Book/Book";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar/SearchBar.js";
import LoadingText from "./Components/Loading/LoadingText";
import Modal from "./UI/Modal/Modal";
import CheckOutBook from "./Components/CheckOutBookPanel/CheckOutBook";
import { Route, Switch, withRouter } from "react-router-dom";
import Catalogue from "./Containers/Catalogue/Catalogue";
import HomepageScreen from "./Pages/HomepageScreen";
import CatalogueScreen from "./Pages/CatalogueScreen";
import SearchResultsScreen from "./Pages/SearchResultsScreen";
import TestScreen from "./Pages/TestScreen";

class App extends Component {
  state = {
    searchText: "0747532699",
    fullISBN: null,
    checkOutBook: false,

    searchInvoked: "not searched",
  };

  constructor() {
    super();
    console.log("App constructor");
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/searchResults" component={SearchResultsScreen} />
          <Route path="/catalogue" component={CatalogueScreen} />
          <Route path="/test" component={TestScreen} />
          <Route path="/" exact component={HomepageScreen} />
        </Switch>
      </div>
    );
  }
}

export default App;
