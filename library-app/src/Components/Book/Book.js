import React from "react";
import axios from "axios";
import "../../App.css";
import classes from "./Book.module.css";
import Title from "./Title/Title";
import Author from "./Author/Author";
import Category from "./Category/Category";
import Image from "./Image/Image";
import LibrarySpinner from "../../UI/Spinner/LibrarySpinner";

const Book = (props) => {
  let renderedBook = <LibrarySpinner />;
  if (props.title) {
    renderedBook = (
      <div>
        <Image className={classes.Image} image={props.image} />
        <Title title={props.title} />
        <Author author={props.author} />
        <Category category={props.category} />

        <button className={classes.OrderButton} onClick={props.checkOutBook}>
          Check out book
        </button>
      </div>
    );
  }

  return <div>{renderedBook}</div>;
};

export default Book;
