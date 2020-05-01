import React from 'react';
import '../App.css';

export default class Book extends React.Component {

    state = {

        title: null,
        author: null,
        category: null,
        image: null

    }

    async componentDidMount() {

        const URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
        const response = await fetch(URL);
        const data = await response.json();

        this.setState({title: data.items[0].volumeInfo.title});
        this.setState({author: data.items[0].volumeInfo.authors[0]});
        this.setState({category: data.items[0].volumeInfo.categories[0]});
        this.setState({image: data.items[0].volumeInfo.imageLinks.smallThumbnail});
        
    }

    render() {
        return(
        <div>
            <p>TITLE: {this.state.title}</p>
            <p>AUTHOR: {this.state.author}</p>
            <p>CATEGORY: {this.state.category}</p>
            <img src={this.state.image}></img>
        </div>
        ) 
    }
}
