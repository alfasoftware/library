import React, { Component } from "react";
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CatalogueItem from "../../Components/Catalogue/CatalogueItem";

class Catalogue extends Component {
  state = {
    books: [
      {
        title: "Harry Potter 1",
        description: "The Philosopher's Stone",
        author: "JK Rowling",
        image: "image here",
        ISBN: "FakeIsbn",
      },
      {
        title: "Harry Potter 20000",
        description: "Lots happens in this book but does it mess up the table?",
        author: "Test Quite a long name",
        image: "image here",
        ISBN: "FakeIsbn",
      },
      {
        title: "Harry Potter 300000000",
        description: "The Philosopher's Stone",
        author: "Hatsunu Miku",
        image: "image here",
        ISBN: "FakeIsbn",
      },
    ],
  };

  openBookDetailsHandler = (book) => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/bookDetails",
      search: "?" + this.state.books[0].ISBN,
    });
  };

  render() {
    let tableEntries = null;

    tableEntries = this.state.books.map((book) => {
      return (
        <CatalogueItem
          key={book.title}
          image={book.image}
          title={book.title}
          description={book.description}
          author={book.author}
          clicked={() => {
            this.openBookDetailsHandler(book.title);
          }}
        />
      );
    });

    return (
      <div>
        <Header />
        <SearchBar
        // value={this.state.searchText}
        // searchWords={this.state.URL}
        // onTextInput={this.handleChangeSearchText}
        // onSearch={this.handleDoSearch}
        >
          {this.props.children}
        </SearchBar>
        {tableEntries}
      </div>
    );
  }
}
export default Catalogue;
