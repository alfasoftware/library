import React from "react";
import classes from "./Author.module.css";

const Author = (props) => {
  return (
    <div className={classes.div}>
      <p className={classes.author}>Author: </p>
      <p className={classes.bookInfo}>{props.author}</p>
    </div>
  );
};

export default Author;
