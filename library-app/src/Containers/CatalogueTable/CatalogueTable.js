import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import CatalogueTableComponent  from "../../Components/CatalogueTableComponent/CatalogueTableComponent"

class CatalogueTable extends Component {
  state = { bookData: null };
  componentWillMount() {
    axios.get("http://localhost:8081/api/catalogue").then((response) => {
      let arr = [];
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].volume.items[0]) {
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
          numberOfCopies: response.data[i].availableCopies,
          //This is the 13 digit ISBN, for the 10 digit ISBN use industryIdentifier[0]
          isbn:
            response.data[i].volume.items[0].volumeInfo.industryIdentifiers[1]
              .identifier,
        };
        arr.push(obj);
        } 
       }
      this.setState({ bookData: arr });
    });
  }

  render() {
    return (
      <div>
        { this.state.bookData ? (
          <CatalogueTableComponent bookData={this.state.bookData}  />
        ) : (
          <p>No books were found in the database</p>
        )}
      </div>
    );
  }
}

export default withRouter(CatalogueTable);
