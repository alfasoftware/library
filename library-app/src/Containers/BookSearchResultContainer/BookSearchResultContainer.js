import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Book from "../../Components/Book/Book";
import axios from "axios";

const BookSearchResultContainer = (props) => {
  console.log(props.history);

  const [isbn, setisbn] = useState(null);
  const [bookInfo, setBookInfo] = useState(null);

  useEffect(function updateIsbn() {
    let isbn = props.history.location.search;

    const isbnNoQMark = isbn.substring(1, isbn.length);
    setisbn(isbnNoQMark);

    axios
      .get("http://localhost:8081/api/volumeDetails?isbn=" + isbnNoQMark)
      .then((response) => {
        console.log("my response= " + response);

        let obj = {
          title: response.data.items[0].volumeInfo.title,
          author: response.data.items[0].volumeInfo.authors[0],
          imageUrl: response.data.items[0].volumeInfo.imageLinks.thumbnail,
          isbn:
            response.data.items[0].volumeInfo.industryIdentifiers[0].identifier,
          // response.data.items[0].volumeInfo.subtitle
          // response.data.items[0].volumeInfo.publisher
          // response.data.items[0].volumeInfo.publishedDate
          // response.data.items[0].volumeInfo.description
        };
        setBookInfo(obj);
      })
      .catch((err) => console.log(err));
  }, []);

  const checkoutBookHandler = () => {
    console.log("Ohh ohh look at me I checked out a book");
  };

  return (
    <div>
      {bookInfo ? (
        <Book
          title={bookInfo.title}
          image={bookInfo.imageUrl}
          author={bookInfo.author}
          checkOutBook={checkoutBookHandler}
        />
      ) : (
        <p>I'm sorry, we couldn't load your book</p>
      )}
    </div>
  );
};

export default withRouter(BookSearchResultContainer);
