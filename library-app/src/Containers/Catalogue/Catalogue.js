import React, {Component} from "react";
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";

class Catalogue extends Component {
  
  state = {
    books: [{ title: "Harry Potter 1", description: "The Philosopher's Stone", author: "JK Rowling", image: "image here" }, 
            { title: "Harry Potter 2", description: "The Philosopher's Stone", author: "JK Rowling", image: "image here" },
            { title: "Harry Potter 3", description: "The Philosopher's Stone", author: "JK Rowling", image: "image here" }]
  }

  render() {
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
          <p>Hello, this is the catalogue</p>
      </div>
    );
  };
}
export default Catalogue;
