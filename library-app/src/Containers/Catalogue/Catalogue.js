import React, {Component} from "react";
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CatalogueItem from "../../Components/Catalogue/CatalogueItem";

class Catalogue extends Component {
  
  state = {
    books: [{ title: "Harry Potter 1", description: "The Philosopher's Stone", author: "JK Rowling", image: "image here" }, 
            { title: "Harry Potter 2", description: "The Philosopher's Stone", author: "JK Rowling", image: "image here" },
            { title: "Harry Potter 3", description: "The Philosopher's Stone", author: "JK Rowling", image: "image here" }]
  }

  render() {
    let tableEntries = null;

    tableEntries = this.state.books.map( (book) => { 
      return (
        <CatalogueItem 
          image={book.image}
          title={book.title} 
          description={book.description} 
          author={book.author} />
      )
    })

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
  };
}
export default Catalogue;
