import React, { Component } from "react";
import { Table } from "react-bootstrap";
import BookData from "./BookData.json";
import axios from "axios";
import classes from "./CatalogueTable.module.css";

class CatalogueTable extends Component {
  state={bookData:null}
  componentWillMount(){
    axios.get("http://localhost:8081/api/catalogue").then(response => {
    let arr = [];  
    for (let i = 0; i<response.data.length; i++) {
      let obj = {
        key:i,
        title:response.data[i].volume.items[0].volumeInfo.title,
        author:response.data[i].volume.items[0].volumeInfo.authors[0],
        imageUrl:response.data[i].volume.items[0].volumeInfo.imageLinks.thumbnail
      };
      arr.push(obj);
    }
    this.setState({bookData:arr});
    });
  };


  render() {
    let data = null;
    if (this.state.bookData) {
    data = this.state.bookData.map((bookEntry) => {
      return (
      <tbody key={bookEntry.key} href="/">
        <tr>
          <td>{bookEntry.title}</td>
          <td rowSpan="2">{bookEntry.author}</td>
          <td rowSpan="2">2</td>
        </tr>
        <tr>
      <td><img src={bookEntry.imageUrl} className={classes.thumbnail}/></td>
        </tr></tbody>
      );
    });
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Catalogue</th>
            <th>Author</th>
            <th>Copies Available</th>
          </tr>
        </thead>
          {data}
      </Table>
    </div>
  );
};
}

export default CatalogueTable;
