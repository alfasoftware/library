import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { Table } from "react-bootstrap";
import classes from "./CatalogueTableComponent.module.css"

const CatalogueTableComponent = ( props ) => {

  const [redirectLink, setRedirectLink] = useState("")
        let redirectComponent = null;
        if (redirectLink) {
          const redirectString = "/books?" + redirectLink;
          redirectComponent = <Redirect to={redirectString} />;
        }
    
        let data = null;
        if (props.bookData) {
          data = props.bookData.map((bookEntry) => {
            return (
              <tbody key={bookEntry.key}>
                <tr onClick={() => setRedirectLink(bookEntry.isbn)}>
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
              </tbody>
            );
          });
        }
    
        return (
          <div>
            {redirectComponent}
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

export default CatalogueTableComponent;