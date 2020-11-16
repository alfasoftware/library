import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Book from "../../Components/Book/Book";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const BookSearchResultContainer = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isbn, setisbn] = useState(null);
  const [bookInfo, setBookInfo] = useState(null);
  const [checkoutBookResponse, setCheckoutBookResponse] = useState(null);

  useEffect(function updateIsbn() {
    let isbn = props.history.location.search;

    const isbnNoQMark = isbn.substring(1, isbn.length);
    setisbn(isbnNoQMark);

    axios
      .get("http://localhost:8081/api/volumeDetails?isbn=" + isbnNoQMark)
      .then((response) => {
        console.log("my response= " + response);

        const responsePretext = response.data.items[0].volumeInfo;

        let obj = {
          title: responsePretext.title ? responsePretext.title : "No title is available for this book",
          author: responsePretext.authors[0] ? responsePretext.authors[0] : "No author information could be retrieved for this book",
          imageUrl: responsePretext.imageLinks.thumbnail,
          isbn: responsePretext.industryIdentifiers[0].identifier,
          subtitle: responsePretext.subtitle ? responsePretext.subtitle : "No subtitle was available for this book",
          publisher: responsePretext.publisher ? responsePretext.publisher : "No publisher information was available for this book",
          publishedDate: responsePretext.publishedDate ? responsePretext.publishedDate : "No published date was available for this book",
          description: responsePretext.description ? responsePretext.description : "No description was available for this book",
          //   category: responsePretext.volumeInfo.categories[0],
        };
        setBookInfo(obj);
      })
      .catch((err) => console.log(err));
  }, [props.history.location.search]);

  const handleClose = () => setShowModal(false);

  const handleGoHome = () => {
    handleClose();
    props.history.push("/");
  };

  const handleSubmitAnotherBook = () => {
    handleClose();
    // props.history.push("/requestBook");
    //Haven't quite got this working yet
  };

  const checkoutBookHandler = () => {
    const requestBody = {
      isbn: isbn,
      userId: "JimB",
    };
    axios
      .post("http://localhost:8081/api/checkOutBook", requestBody)
      .then((response) => {
        setCheckoutBookResponse(response.data);

        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book checked out successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you for checking out {bookInfo ? bookInfo.title : null}. This
          book is due to be returned on{" "}
          {checkoutBookResponse ? checkoutBookResponse.dueDate : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleGoHome}>
            Home
          </Button>
          <Button variant="primary" onClick={handleSubmitAnotherBook}>
            Request another book
          </Button>
        </Modal.Footer>
      </Modal>
      {bookInfo ? (
        <Book
          title={bookInfo.title}
          subtitle={bookInfo.subtitle}
          image={bookInfo.imageUrl}
          author={bookInfo.author}
          description={bookInfo.description}
          publisher={bookInfo.publisher}
          publishedDate={bookInfo.publishedDate}
          checkOutBook={checkoutBookHandler}
        />
      ) : (
        <p>I'm sorry, we couldn't load your book</p>
      )}
    </div>
  );
};

export default withRouter(BookSearchResultContainer);
