import React from "react";
import { TiTick } from "react-icons/ti";
import { IconContext } from "react-icons";

const GreenTick = () => {
  const greenTick = (
    <IconContext.Provider
      value={{ color: "green", className: "global-class-name", size: "30px" }}
    >
      <div>
        <TiTick />
      </div>
    </IconContext.Provider>
  );
  return greenTick;
};

export default GreenTick;
