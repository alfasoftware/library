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
import Background from "../../assets/librarySecondHeader.jpg";

const ScreenHeaderImage = (props) => {
  var styles = {
    backgroundImage: `url(${props.background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    top: "-80px",

    height: props.height ? props.height : "400px",
    border: "1px solid gray",
    borderRadius: "0px",
    textAlign: "center",
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
            color: props.textColor,
            fontSize: "50px",

            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: "20px",
            display: "inline-block",
            margin: "auto",
            flexDirection: "column",
            fontSize: "75px",

            // WebkitTextStrokeWidth: "1px",
            // WebkitTextStrokeColor: "gray",
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
