import React from "react";
import { IconContext } from "react-icons";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const StarRating = (props) => {
  return (
    <IconContext.Provider
      value={{ color: "gold", className: "global-class-name" }}
    >
      <div>
        <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
        <AiOutlineStar />
      </div>
    </IconContext.Provider>
  );
};

export default StarRating;
