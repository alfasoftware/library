import React from "react";
import { IconContext } from "react-icons";
import { ImCross } from "react-icons/im";

const RedCross = () => {
  const redCross = (
    <IconContext.Provider
      value={{ color: "red", className: "global-class-name" }}
    >
      <div>
        <ImCross />
      </div>
    </IconContext.Provider>
  );

  return redCross;
};

export default RedCross;
