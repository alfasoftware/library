import React from "react";
import jumboData from "./bodyjumbodata.json";
import BodyJumbotron from "../../Components/BodyJumbotron/index";
import { Redirect } from "react-router-dom";

const BodyJumbotronContainer = () => {
  return (
    <BodyJumbotron.Container>
      {jumboData.map((item) => (
        <BodyJumbotron key={item.id} direction={item.direction}>
          <BodyJumbotron.Pane>
            <BodyJumbotron.Title>{item.title}</BodyJumbotron.Title>
            <BodyJumbotron.SubTitle>{item.subTitle}</BodyJumbotron.SubTitle>
          </BodyJumbotron.Pane>
          <BodyJumbotron.Pane>
            <BodyJumbotron.Image src={item.image} alt={item.alt} />
          </BodyJumbotron.Pane>
        </BodyJumbotron>
      ))}
    </BodyJumbotron.Container>
  );
};

export default BodyJumbotronContainer;
