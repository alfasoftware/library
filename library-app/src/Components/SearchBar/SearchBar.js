import React, { Component } from "react";
import classes from "./SearchBar.module.css";

class SearchBar extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log("SearchBar constructor");
  }

  render() {
    return (
      <div>
        <input
          className={classes.SearchBar}
          value={this.props.searchText}
          onChange={(event) => this.props.onTextInput(event)}
          placeholder="Enter an ISBN here"
        >
          {this.props.searchText}
        </input>
        <button
          className={classes.Button}
          onClick={() => this.props.onSearch()}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
