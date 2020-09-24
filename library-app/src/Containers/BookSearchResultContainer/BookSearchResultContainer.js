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

        const responsePretext = response.data.items[0].volumeInfo;

        let obj = {
          title: responsePretext.title,
          author: responsePretext.authors[0],
          imageUrl: responsePretext.imageLinks.thumbnail,
          isbn: responsePretext.industryIdentifiers[0].identifier,
          subtitle: responsePretext.subtitle,
          publisher: responsePretext.publisher,
          publishedDate: responsePretext.publishedDate,
          description: responsePretext.description,
          //   category: responsePretext.volumeInfo.categories[0],
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
