import React, { Component } from "react";
import { useState } from "react";
import "./App.css";
import Book from "./Components/Book/Book";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar/SearchBar.js";
import LoadingText from "./Components/Loading/LoadingText";
import Modal from "./UI/Modal/Modal";
import CheckOutBook from "./Components/CheckOutBookPanel/CheckOutBook";

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

  continuePlaceHolderHandler = () => {
    alert(
      "You have checked out the book!..... Not really cos we need to add a database connection"
    );
  };

  checkOutBookHandler = () => {
    this.setState({ checkOutBook: true });
  };

  checkOutBookCancelHandler = () => {
    this.setState({ checkOutBook: false });
  };

  handleChangeSearchText = (newText) => {
    console.log("Searchbar text change handler invoked");
    console.log("Logging new text " + newText.target.value);
    this.setState({ searchText: newText.target.value });
  };

  handleDoSearch = () => {
    console.log("Search handler invoked");
    const URLprefix = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
    const searchTextFull = this.state.searchText;
    console.log("This is the current searchText: " + searchTextFull);

    const displayMessage = "Searching for ISBN: " + this.state.searchText;

    //sets the state of the URL
    // this.setState((URL: fullURL));
    console.log("Checking the fullURL state is updated: " + this.state.URL);
    this.setState({ searchInvoked: displayMessage });
    this.setState({ fullISBN: searchTextFull });

    //takes a snapshot of the searchbar at this point and
    //adds it to the state of the google API prefix
  };

  SearchBarDisplay = () => {
    return <SearchBar />;
  };

  getSearchText = () => {
    const searchText = this.state.searchText;
    return searchText;
  };

  render() {
    console.log(
      "App render method with this.state, this.props and this.props.searchText: " +
        this.state +
        " / " +
        this.props +
        " / " +
        this.state.searchText
    );
    return (
      <div>
        <Header />
        <SearchBar
          value={this.state.searchText}
          searchWords={this.state.URL}
          onTextInput={this.handleChangeSearchText}
          onSearch={this.handleDoSearch}
        >
          {this.props.children}
        </SearchBar>
        <LoadingText text={this.state.searchInvoked} />
        <Modal
          show={this.state.checkOutBook}
          modalClosed={this.checkOutBookCancelHandler}
        >
          <CheckOutBook
            clickContinue={this.continuePlaceHolderHandler}
            clickCancel={this.checkOutBookCancelHandler}
          />
        </Modal>
        <Book
          searchText={this.state.searchText}
          fullISBN={this.state.fullISBN}
          checkOutBook={this.checkOutBookHandler}
        />
      </div>
    );
  }
}

export default App;
