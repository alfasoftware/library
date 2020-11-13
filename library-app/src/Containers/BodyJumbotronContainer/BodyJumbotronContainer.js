import React, {useState} from "react";
import jumboData from "./bodyjumbodata.json";
import BodyJumbotron from "../../Components/BodyJumbotron/index";
import { Redirect } from "react-router-dom";

const BodyJumbotronContainer = () => {

  const [redirect, setRedirect] = useState(null);

  let redirectComponent = null;

  if(redirect) {
    redirectComponent = <Redirect to={redirect} />
  }

  return (
    <BodyJumbotron.Container>
      {redirectComponent}
      {jumboData.map((item) => (
        <BodyJumbotron key={item.id} direction={item.direction} onClick={() => setRedirect(item.redirectLink)}>
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
