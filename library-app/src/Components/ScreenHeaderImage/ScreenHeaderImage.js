import React from "react";
import {
  Jumbotron,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Background from "../../assets/libraryWhite.jpg";

const ScreenHeaderImage = (props) => {
  var styles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    top: "-80px",

    height: "400px",
    border: "1px solid gray",
    borderRadius: "0px",
  };

  var titleStyle = {
    margin: "auto",
    marginTop: "0px",
  };
  return (
    <div>
      <Jumbotron style={styles}>
        <h1
          style={{
            background: "transparent",
            color: "white",
            fontSize: "50px",
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {props.title}
        </h1>
        <p
          style={{
            background: "transparent",
            color: "charcoal",
            margin: "auto",
            marginTop: "20px",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {props.subtitle}
        </p>
      </Jumbotron>
    </div>
  );
};

export default ScreenHeaderImage;
