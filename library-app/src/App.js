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
