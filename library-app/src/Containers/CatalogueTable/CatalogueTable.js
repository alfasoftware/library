import React from "react";
import { Table } from "react-bootstrap";
import BookData from "./BookData.json";

const CatalogueTable = () => {
  const data  = BookData.map((bookEntry) => {
    return ( <tbody>
      <tr>
        <td>{bookEntry.title}</td>
        <td rowspan="2">{bookEntry.author}</td>
        <td rowspan="2">2</td>
        <td rowspan="2">01/01/21</td>
      </tr>
      <tr>
        <td>Book 1 Image</td>
      </tr></tbody>
    )
  })

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Catalogue</th>
            <th>Author</th>
            <th>Copy Available</th>
            <th>Return Date</th>
          </tr>
        </thead>
          {data}
      </Table>
    </div>
  );
};

export default CatalogueTable;
