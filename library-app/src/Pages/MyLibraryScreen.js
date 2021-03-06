import React from "react";
import LibraryNavbar from "../Components/Navbar/LibraryNavbar";
import Background from "../assets/blurredLibraryWhite.jpg";
import ScreenHeaderImage from "../Components/ScreenHeaderImage/ScreenHeaderImage";
import MyLibraryActiveLoans from "../Containers/MyLibraryActiveLoans/MyLibraryActiveLoans";
import { Container, Col, Row } from "react-bootstrap";
import MyLibraryWatchlist from "../Containers/MyLibraryWatchlist"

const MyLibraryScreen = () => {
  return (
    <div>
      <LibraryNavbar />
      <ScreenHeaderImage
        title="My Library"
        textColor="charcoal"
        height="250px"
        background={Background}
      />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6} style={{ display: "flex", justifyContent: "center" }}>
            <h2>Current active loans</h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <a style={{ marginLeft: ".5rem" }}></a>
      <MyLibraryActiveLoans /> 
      {/* We need to update this to pass in the userId which will be provided by Okta */}
      <MyLibraryWatchlist />
    </div>
  );
};

export default MyLibraryScreen;
