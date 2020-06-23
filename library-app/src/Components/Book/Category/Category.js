import React from "react";
import classes from "./Category.module.css";

const Category = (props) => {
  return (
    <div className={classes.div}>
      <p className={classes.category}>Category: </p>
      <p className={classes.bookInfo}>{props.category}</p>
    </div>
  );
};

export default Category;
