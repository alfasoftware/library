import React from "react";
import Book from "../Components/Book/Book";
import {useState, useEffect} from "react";
import axios from "axios";

import LibraryNavbar from "../Components/Navbar/LibraryNavbar";
import CatalogueTableComponent from "../Components/CatalogueTableComponent/CatalogueTableComponent";

const SearchResultsScreen = (props) => {

const [searchedBookData, setSearchedBookData] = useState(null);

let queryParams = props.history.location.search;

console.log(queryParams);
const searchText = queryParams.substring(queryParams.lastIndexOf("=") + 1);

console.log("testing Concat= " + searchText);

useEffect(() => {
axios.get("http://localhost:8081/api/search?searchString=" + searchText)
      .then((response) => {

        console.log(response)
        console.log("logging more =" + response.data[0].items[0])

        let arr = [];
        for (let i = 0; i < response.data.length; i++) {
          console.log("I am here")
          if (response.data[i].items[0]) {
          const responseData = response.data[i].items[0].volumeInfo;
  
          let imageUrl = null;
          if (responseData.imageLinks) {
            imageUrl = responseData.imageLinks.thumbnail;
          }
  
          let obj = {
            key: i,
            title: responseData.title,
            author: responseData.authors[0],
            imageUrl: imageUrl,
            numberOfCopies: response.data[i].availableCopies,
            //This is the 13 digit ISBN, for the 10 digit ISBN use industryIdentifier[0]
            isbn:
              response.data[i].items[0].volumeInfo.industryIdentifiers[1]
                .identifier,
          };
          arr.push(obj);
          } 
         }
        setSearchedBookData(arr);
      })
      .catch((err) => {
        console.log(err);
      });
}, [searchText]);

// Required props: bookData, redirectLink, clickRow 
let resultsTable = null;

if (searchedBookData) {
  resultsTable =  <CatalogueTableComponent bookData={searchedBookData} clickRow={console.log("rowClicked")} redirectLink=""/>
}



  return (
    <div>
      <LibraryNavbar />
      {resultsTable}
    </div>
  );
};

export default SearchResultsScreen;
