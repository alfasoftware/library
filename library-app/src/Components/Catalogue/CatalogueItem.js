import React from "react";
import classes from "./CatalogueItem.module.css";

const CatalogueItem = (props) => {
  return (
    <div className={classes.Table}>
      <div className={classes.TableEntryTitle}>{props.image}</div>
      <div className={classes.TableEntryTitle}>{props.title}</div>
      <div className={classes.TableEntryTitle}>{props.author}</div>
      {/* <div className={classes.TableEntryDescription}>{props.description}</div> */}
      <div className={classes.TableEntryButton} onClick={props.clicked}>
        See more
      </div>
    </div>
  );
};

export default CatalogueItem;
