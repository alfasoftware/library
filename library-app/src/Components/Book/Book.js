import React from "react";
import axios from "axios";
import "../../App.css";
import classes from "./Book.module.css";
import Title from "./Title/Title";
import Author from "./Author/Author";
import Category from "./Category/Category";
import Image from "./Image/Image";
import LibrarySpinner from "../../UI/Spinner/LibrarySpinner";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import StarRating from "../StarRating/StarRating";

const Book = (props) => {
  let renderedBook = <LibrarySpinner />;

  let subtext = props.subtitle;

  if (!subtext) {
    subtext = props.description.substring(0, 350) + "...";
  }

  if (props.title) {
    renderedBook = (
      <div>
        <Container style={{ marginTop: "50px" }}>
          <Row style={{ borderBottom: "1px solid lightgray" }}>
            <Col></Col>
            <Col
              xs={8}
              style={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
              }}
            >
              <Title title={props.title} />
            </Col>
            <Col></Col>
          </Row>
          <Row style={{ marginTop: "50px" }}>
            <Col>
              <Image className={classes.Image} image={props.image} />
            </Col>
            <Col xs={5} style={{ marginRight: "20px" }}>
              {subtext}
            </Col>
            <Col>
              <p>Publisher: {props.publisher}</p>
              <p>Published Date: {props.publishedDate}</p>
              <StarRating rating="4" />
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }}>
            <Col>
              <Button onClick={props.checkOutBook}>Check out book</Button>
            </Col>
            <Col>
              <Button onClick={props.addToWatchlistClicked}>Add to watch list</Button>
            </Col>
            <Col>
              <Button>Recommend to a friend</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return <div>{renderedBook}</div>;
};

export default Book;
