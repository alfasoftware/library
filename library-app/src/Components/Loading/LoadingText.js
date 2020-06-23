import React from "react";
import classes from "./LoadingText.module.css";

const LoadingText = (props) => {
  return (
    <div>
      <p className={classes.Loading}>{props.text}</p>
    </div>
  );
};

export default LoadingText;
