import React from "react";
import classes from "./Image.module.css";

const Image = (props) => {
  return (
    <div className={classes.div}>
      <img className={classes.Image} src={props.image}></img>
    </div>
  );
};

export default Image;
