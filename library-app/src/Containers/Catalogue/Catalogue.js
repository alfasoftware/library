import React, { Component } from "react";
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CatalogueItem from "../../Components/Catalogue/CatalogueItem";
import axios from "axios";

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

    GetCatalogue: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:8081/api/catalogue")
      .then((response) => {
        this.setState({ GetCatalogue: response.data });
      })
      .catch((error) => console.log(error));
  }

  openBookDetailsHandler = (book) => {
    console.log(this.props);
    this.props.history.push({
      pathname: "/bookDetails",
      search: "?" + this.state.books[0].ISBN,
    });
  };

  render() {
    console.log(this.state.GetCatalogue);

    if (this.state.GetCatalogue[0]) {
      console.log(this.state.GetCatalogue[0].isbn);
    }

    let isbns = null;

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

        {tableEntries}
      </div>
    );
  }
}
export default Catalogue;
