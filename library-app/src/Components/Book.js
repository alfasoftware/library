import React from 'react';

export default class Book extends React.Component {

    state = {

        title: null

    }

    async componentDidMount() {

        const URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
        const response = await fetch(URL);
        const data = await response.json();

        this.setState({title: data.items[0].volumeInfo.title});
        
    }

    render() {
        return(
        <div>TITLE: {this.state.title}</div>
        ) 
    }
}
