import React, { Component } from "react";
import { Table } from "react-bootstrap";
import BookData from "./BookData.json";
import axios from "axios";
import classes from "./CatalogueTable.module.css";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router";

class CatalogueTable extends Component {
  state = { bookData: null };
  componentWillMount() {
    axios.get("http://localhost:8081/api/catalogue").then((response) => {
      let arr = [];
      for (let i = 0; i < response.data.length; i++) {
        const responseData = response.data[i].volume.items[0].volumeInfo;

        let imageUrl = null;
        if (responseData.imageLinks) {
          imageUrl = responseData.imageLinks.thumbnail;
        }

        let obj = {
          key: i,
          title: responseData.title,
          author: responseData.authors[0],
          imageUrl: imageUrl,
          numberOfCopies: response.data[i].volume.totalItems,
          //This is the 13 digit ISBN, for the 10 digit ISBN use industryIdentifier[0]
          isbn:
            response.data[i].volume.items[0].volumeInfo.industryIdentifiers[1]
              .identifier,
        };
        arr.push(obj);
      }
      this.setState({ bookData: arr });
    });
  }

  clickRow = (isbn) => {
    console.log("Row was clicked with isbn= " + isbn);
    this.setState({
      redirect: {
        redirect: true,
        redirectIsbn: isbn,
      },
    });
  };

  render() {
    let redirect = null;
    if (this.state.redirect) {
      const redirectString = "/books?" + this.state.redirect.redirectIsbn;
      redirect = <Redirect to={redirectString} />;
    }

    let data = null;
    if (this.state.bookData) {
      data = this.state.bookData.map((bookEntry) => {
        return (
          <tbody key={bookEntry.key}>
            <tr onClick={() => this.clickRow(bookEntry.isbn)}>
              <td style={{ border: "none" }}>{bookEntry.title}</td>
              <td>
                <img
                  src={bookEntry.imageUrl}
                  className={classes.thumbnail}
                  alt="I'm sorry, no image is available for this title"
                />
              </td>
              <td rowSpan="2">{bookEntry.author}</td>
              <td rowSpan="2">{bookEntry.numberOfCopies}</td>
            </tr>
            {/* <tr onClick={() => this.clickRow(bookEntry.isbn)}>
              <td>
                <img src={bookEntry.imageUrl} className={classes.thumbnail} />
              </td>
            </tr> */}
          </tbody>
        );
      });
    }

    return (
      <div>
        {redirect}
        {{ data } ? (
          <Table striped bordered hover className={classes.table}>
            <thead>
              <tr>
                <th>Full Catalogue</th>
                <th>Image</th>
                <th>Author</th>
                <th>Copies Available</th>
              </tr>
            </thead>
            {data}
          </Table>
        ) : (
          <p>No books were found in the database</p>
        )}
      </div>
    );
  }
}

export default withRouter(CatalogueTable);
