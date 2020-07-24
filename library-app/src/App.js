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
import Homepage from "./Containers/Homepage/Homepage";

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
          <Route
            path="/searchResults"
            component={
              <Book
                searchText={this.state.searchText}
                fullISBN={this.state.fullISBN}
                checkOutBook={this.checkOutBookHandler}
              />
            }
          />
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
