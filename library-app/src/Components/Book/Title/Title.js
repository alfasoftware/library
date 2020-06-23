import React from "react";
import classes from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={classes.div}>
      <p className={classes.title}>Title:</p>
      <p className={classes.bookInfo}>{props.title}</p>
    </div>
  );
};

export default Title;
