import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import DropdownMenu from "../UI/Dropdown/DropdownMenu"
import LibraryNavbar from "../Components/Navbar/LibraryNavbar";

const TestScreen = (props) => {
  return (
    <div>
      <LibraryNavbar />
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
          <DropdownMenu />
        </Row>
      </Container>
    </div>
  );
};

export default TestScreen;
