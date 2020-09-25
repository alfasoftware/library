import React, { useState } from "react";
import LibraryNavbar from "../Components/Navbar/LibraryNavbar";
import BookRequestFormContainer from "../Containers/BookRequestFormContainer/BookRequestFormContainer";
import { Modal, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const BookRequestScreen = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleGoHome = () => {
    handleClose();
    props.history.push("/");
  };

  const handleBackToFullCatalogue = () => {
    handleClose();
    props.history.push("/catalogue");
    // props.history.push("/requestBook");
    //Haven't quite got this working yet
  };

  let redirect = null;

  const styles = {
    margin: "auto",
    marginTop: "50px",
    marginBottom: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const formSubmittedHandler = (event) => {
    event.preventDefault();
    setShowModal(!showModal);
  };
  return (
    <div>
      <LibraryNavbar />

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book request submitted successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for helping to expand the Alfa library. Please pick an
          option below to proceed
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleGoHome}>
            Home
          </Button>
          <Button variant="primary" onClick={handleBackToFullCatalogue}>
            Request another book
          </Button>
        </Modal.Footer>
      </Modal>
      {redirect}
      <h2 style={styles}>Fill in the form to send a book request to Alfa HQ</h2>
      <BookRequestFormContainer formSubmitted={formSubmittedHandler} />
    </div>
  );
};

export default BookRequestScreen;
