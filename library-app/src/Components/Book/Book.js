import React from "react";
import axios from "axios";
import "../../App.css";
import classes from "./Book.module.css";
import Title from "./Title/Title";
import Author from "./Author/Author";
import Category from "./Category/Category";
import Image from "./Image/Image";

export default class Book extends React.Component {
  state = {
    title: null,
    author: null,
    category: null,
    image: null,
    ISBN: null,
  };

  constructor() {
    super();
  }

  async componentDidMount() {
    this.setState({ ISBN: this.props.fullISBN });
    if (this.props.fullISBN !== this.state.fullISBN) {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
            this.props.fullISBN
        )
        .then((response) => {
          this.setState({
            title: response.data.items[0].volumeInfo.title,
            author: response.data.items[0].volumeInfo.authors[0],
            category: response.data.items[0].volumeInfo.categories[0],
            image: response.data.items[0].volumeInfo.imageLinks.smallThumbnail,
          });
        })
        .catch((error) => console.log(error));
      console.log("BOOK - this.props.URL: " + this.props.searchText);
    }
  }

  componentDidUpdate() {
    if (this.props.fullISBN !== this.state.ISBN) {
      this.setState({ ISBN: this.props.fullISBN });

      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
            this.props.fullISBN
        )
        .then((response) => {
          if (response.data === "undefined") {
            this.setState({
              title: null,
            });
          }

          console.log("This is the response " + response);
          console.log("This is the response data " + response.data);
          if (response.data !== "undefined") {
            this.setState({
              title: response.data.items[0].volumeInfo.title,
              author: response.data.items[0].volumeInfo.authors[0],
              category: response.data.items[0].volumeInfo.categories[0],
              image:
                response.data.items[0].volumeInfo.imageLinks.smallThumbnail,
            });
          }
        })
        .catch((error) => console.log(error));
      console.log("BOOK - this.props.URL: " + this.props.searchText);
    }
  }

  render() {
    let renderedBook = (
      <div className={classes.UnSearched}>
        Please Search an ISBN to display a book
      </div>
    );

    if (this.state.title !== null) {
      renderedBook = (
        <div>
          <Image className={classes.Image} image={this.state.image} />
          <Title title={this.state.title} />
          <Author author={this.state.author} />
          <Category category={this.state.category} />

          <button
            className={classes.OrderButton}
            onClick={this.props.checkOutBook}
          >
            Check out book
          </button>
        </div>
      );
    }
    return <div>{renderedBook}</div>;
  }
}
