import React from 'react';
import './App.css';
import Book from './Components/Book';

export default class Header extends React.Component {

    render() {

        return(
            <div>
                <h1>Library</h1>
                <Book/>
            </div>
        );
    }
} 

const URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';

fetch(URL)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data.items[0].volumeInfo.title);
  console.log(data.items[0].volumeInfo.authors)
  console.log(data.items[0].volumeInfo.categories);
});