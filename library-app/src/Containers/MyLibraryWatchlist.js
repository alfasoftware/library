
import React, {useState, useEffect} from "react"
import axios from "axios"
import * as axiosEndPoints from "../axios/axios"
import * as user from "../user/user"
import { Table, Modal, Button } from "react-bootstrap";


/**
 * This container will return a table component for the user's watched books and function / state control for the data
 */
const MyLibraryWatchlist = ({userId}) => {



    const [watchedBooksData, setWatchedBooksData] = useState([]);

useEffect(() => {

async function getWatchedBookData() {
    await axios.get(axiosEndPoints.GET_WATCHED_BOOK_LIST + "?userId=" + user.USERID)
      .then((response) => {
          console.log(response.data);
          setWatchedBooksData(response.data.map((book) => ({isbn: book.isbn, availableCopies: book.availableCopies, volumeInfo: book.volume.items[0].volumeInfo})))
})
}

// if (userId) { // TODO add this back in once we facilitate Okta authentication
    getWatchedBookData();
// }

}, [userId])

let tableRows = null;

  if (watchedBooksData[0]) {
    tableRows = watchedBooksData.map((dataEntry) => {
    //   if (dataEntry.display) {
        return (
          <tbody key={dataEntry.isbn}>
            <tr>
              <td className="text-center">{dataEntry.volumeInfo.title}</td>
              <td className="text-center">{dataEntry.availableCopies === 0 ? "Unavailable" : "Available"}</td>
              {/* <td className="text-center">{dataEntry.volumeInfo.dueDate}</td> */}
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  borderBottom: "transparent",
                }}
              >
                {/* {dataEntry.volumeInfo.requestedByOtherUser ? <GreenTick /> : <RedCross />}
                 */}
                 number of watchers
              </td>
              <td className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                //   onClick={formSubmittedHandler}
                >
                  Unwatch
                </Button>
              </td>
            </tr>
          </tbody>
        );
    //   }
    });
  }



    return ( <div style={{marginTop: 50}}>
        <h2 style={{marginBottom: 30, textAlign: "center"}}>My Watched Books</h2>
        <Table
          striped
          bordered
          hover
          style={{ width: "80%", margin: "auto", border: "2px solid gray" }}
        >
          <thead>
            <tr>
              <th className="text-center">Book title</th>
              <th className="text-center">Availability</th>
                 {/* <th className="text-center">Return date</th> //Want to add this in in the future however it requires dueDate information from the watchlist API endpoint*/} 
              <th className="text-center">Number of watchers</th>
              <th className="text-center">Unwatch</th>
            </tr>
          </thead>
          {tableRows}
        </Table>
      </div> );
}
 
export default MyLibraryWatchlist;