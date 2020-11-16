import React, { useState, useEffect} from "react";
import classes from "./SearchBar.module.css";
import { Form, Button, FormControl } from "react-bootstrap";
import axios from "axios";
import {Redirect} from "react-router-dom";
import DropdownMenu from "../../UI/Dropdown/DropdownMenu";

const SearchBar = () => {

  const [bookData, setBookData] = useState(null);
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [redirectLink, setRedirectLink] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8081/api/search?searchString=" + inputValue + "&maxNoOfResults=5").then((response) => {
      console.log(response)
      setBookData(response.data)

    }).catch();
  }, [inputValue, value]);


  if (bookData) {
    console.log(bookData.map((book) => {
      return ( book.volume.items[0].volumeInfo.title)
    }))
  }
const inputChangedHandler = (newVal) => {
  console.log("input changed handler invoked with " + newVal)
  setInputValue(newVal)

}

const valueChangedHandler = (newVal) => {
  console.log("value changed handler invoked with " + newVal)

  setValue(newVal);

  const filteredBookList = bookData.filter(book => book.volume.items[0].volumeInfo.title == newVal);

  if (filteredBookList[0]) {
  const isbnOfDesiredBook = filteredBookList[0].isbn;
  console.log(isbnOfDesiredBook);

const redirectString = "/books?" + isbnOfDesiredBook;
setRedirectLink(redirectString)
  }
}

const formSubmittedHandler = (e) => {
  e.preventDefault();

  searchClickedHandler();

}



  let redirectComponent = null;

  if (redirectLink) {
    redirectComponent = <Redirect to={redirectLink} />
  }

  const searchClickedHandler = () => {
    console.log("search clicked handler invoked")
      const redirectString = "/searchResults?queryParams=" + inputValue;
      setRedirectLink(redirectString);
    }

  return (
  <Form inline onSubmit={(e) => formSubmittedHandler(e)}>
  {redirectComponent} 
  <DropdownMenu value={value} valueChanged={(newVal) => valueChangedHandler(newVal)} inputValue={inputValue} inputChanged={(newVal) => inputChangedHandler(newVal)} options={bookData !== null ? bookData.map((book) => {
      return ( book.volume.items[0].volumeInfo.title)
    }) : []}/>
    <Button variant="outline-primary" onClick={searchClickedHandler}>Search</Button>
  </Form>
  )
}

export default SearchBar;
