import React from "react";
import { TiTick } from "react-icons/ti";
import { IconContext } from "react-icons";

const GreenTick = () => {
  const greenTick = (
    <IconContext.Provider
      value={{ color: "green", className: "global-class-name", size: "30px" }}
    >
      <div>
        <TiTick style={{ marginLeft: "45px" }} />
      </div>
    </IconContext.Provider>
  );
  return greenTick;
};

export default GreenTick;
