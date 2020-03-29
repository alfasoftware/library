import React from 'react';
import '../App.css';

export default class Header extends React.Component {

    render() {

        return(
            <div>
                <h1>Library</h1>
            </div>
        );
    }
} 

const URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:9781406375695';

fetch(URL)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data.items[0].volumeInfo.title);
  console.log(data.items[0].volumeInfo.authors);
});