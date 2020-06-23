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
  };

  constructor() {
    super();
  }

  async componentDidMount() {
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

    // const fullUrl =
    //   "https://www.googleapis.com/books/v1/volumes?q=isbn:" + "0747532699";

    // //this is where we concatinate the URl
    // // this.props.searchText returns undefined, find a way to make it return
    // //the actual state

    // const response = await fetch(fullUrl);
    // const data = await response.json();

    // this.setState({ title: data.items[0].volumeInfo.title });
    // this.setState({ author: data.items[0].volumeInfo.authors[0] });
    // this.setState({ category: data.items[0].volumeInfo.categories[0] });
    // this.setState({
    //   image: data.items[0].volumeInfo.imageLinks.smallThumbnail,
    // });
  }

  componentDidUpdate() {
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
            image: response.data.items[0].volumeInfo.imageLinks.smallThumbnail,
          });
        }
      })
      .catch((error) => console.log(error));
    console.log("BOOK - this.props.URL: " + this.props.searchText);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.fullURL !== this.props.fullURL) {
  //     this.setState({ URL: nextProps.fullURL });
  //   }
  // }

  //   componentDidUpdate = (prevProps) => {
  //     if (this.props.fullURL !== prevProps.fullURL) {
  //       this.fetchData(this.props.fullURL);
  //     }
  //   };

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
            // disabled={!this.props.purchasable}
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
