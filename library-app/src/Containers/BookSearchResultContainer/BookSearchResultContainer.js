import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Book from "../../Components/Book/Book";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import * as user from "../../user/user"
import * as axiosEndPoints from "../../axios/axios"
import BootstrapModal from "../../UI/Modal/BootstrapModal";
import PageLoader from "../../Components/Loading/PageLoader";

const BookSearchResultContainer = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isbn, setisbn] = useState(null);
  const [bookInfo, setBookInfo] = useState(null);
  const [checkoutBookResponse, setCheckoutBookResponse] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);

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

  const handleClose = () => {
    setShowModal(false)
  setModalInfo(null);
  }
  ;

  const handleGoHome = () => {
    handleClose();
    props.history.push("/");
  };

  const handleSubmitAnotherBook = () => {
    handleClose();
    // props.history.push("/requestBook");
    //Haven't quite got this working yet
  };

  const addBookToWatchListHandler = () => {
    axios.post(axiosEndPoints.ADD_BOOK_TO_WATCHLIST + "?userId=" + user.USERID + "&isbn=" + "isbn").then((response) => {
      setShowModal(response);
      setModalInfo({
        title: "Book successfully added to watch list!",
        body: `Thank you adding ${bookInfo ? bookInfo.title : null} to your watchlist. You will be notified when the status of this book changes`,
        button1Text: "Home",
        button2Text: "Back to book info"
      })

    }).catch((err) => console.log(err))
  }

  const checkoutBookHandler = () => {
    const requestBody = {
      isbn: isbn,
      userId: user.USERID,
    };
    axios
      .post("http://localhost:8081/api/checkOutBook", requestBody)
      .then((response) => {
        setCheckoutBookResponse(response.data);

        console.log(response.data)
        setShowModal(true);

        setModalInfo({
          title: "Book checked out successfully!",
          body: `Thank you for checking out ${bookInfo ? bookInfo.title : null}. This
          book is due to be returned on 
          ${response.data.dueDate}`,
          button1Text: "Home",
          button2Text: "Request another book"
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
     {showModal && <BootstrapModal show={showModal} handleClose={handleClose} 
      titleText={modalInfo?.title} bodyText={modalInfo?.body} 
      button1Clicked={handleGoHome} button1Text={modalInfo?.button1Text} 
      button2Clicked={handleSubmitAnotherBook} button2Text={modalInfo?.button2Text}/>}
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
          addToWatchlistClicked={addBookToWatchListHandler}
        />
      ) : (
        <PageLoader />
      )}
    </div>
  );
};

export default withRouter(BookSearchResultContainer);
