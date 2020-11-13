import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import mockedData from "./mockedLibrarydata.json";
import GreenTick from "../../UI/Icons/GreenTick";
import RedCross from "../../UI/Icons/RedCross";
import axios from "axios";

const MyLibraryActiveLoans = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [activeLoanInfo, setActiveLoanInfo] = useState([]);

  const handleClose = () => setShowModal(false);

  const formSubmittedHandler = (event) => {
    event.preventDefault();
    setShowModal(!showModal);
  };

  const handleReturn = (dataEntry) => {
    dataEntry.display = false;

    const requestBody = {
      isbn: dataEntry.isbn,
      userId: "JimB",
    };
    axios
      .post("http://localhost:8081/api/returnBook", requestBody)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    handleClose();
  };

  useEffect(function updateIsbn() {
    //Username is currently hard-coded to JimB
    axios
      .get("http://localhost:8081/api/allActiveUserLoans?user=JimB")
      .then((response) => {
        console.log("my response= " + response);

        let activeLoanArray = [];
        for (let i = 0; i < response.data.length; i++) {
          console.log("[MyLibraryActiveLoans] I am in the loop");

          let obj = {
            id: i,
            title: response.data[i].volume.items[0].volumeInfo.title,
            isbn:
              response.data[i].volume.items[0].volumeInfo.industryIdentifiers[1]
                .identifier,
            checkoutDate: response.data[i].checkoutDate,
            dueDate: response.data[i].dueDate,
            returned: response.data[i].returned,
            display: true,
          };
          activeLoanArray.push(obj);
        }
        setActiveLoanInfo(activeLoanArray);
      })
      .catch((err) => console.log(err));
  }, []);

  let tableRows = null;

  if (activeLoanInfo[0]) {
    tableRows = activeLoanInfo.map((dataEntry) => {
      console.log("line 49 " + dataEntry);
      if (dataEntry.display) {
        return (
          <tbody key={dataEntry.id}>
            <Modal show={showModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  Are you sure you want to return this book?
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <div className="text-center">
                  <Button
                    variant="success"
                    onClick={() => handleReturn(dataEntry)}
                  >
                    Yes
                  </Button>
                </div>
                <div className="text-center">
                  <Button variant="primary" onClick={handleClose}>
                    No
                  </Button>
                </div>
              </Modal.Footer>
            </Modal>
            <tr>
              <td>{dataEntry.title}</td>
              <td className="text-center">{dataEntry.checkoutDate}</td>
              <td className="text-center">{dataEntry.dueDate}</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  borderBottom: "transparent",
                }}
              >
                {dataEntry.requestedByOtherUser ? <GreenTick /> : <RedCross />}
              </td>
              <td className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  onClick={formSubmittedHandler}
                >
                  Return
                </Button>
              </td>
            </tr>
          </tbody>
        );
      }
    });
  }

  return (
    <div>
      <Table
        striped
        bordered
        hover
        style={{ width: "80%", margin: "auto", border: "2px solid gray" }}
      >
        <thead>
          <tr>
            <th>Book title</th>
            <th className="text-center">Check out date</th>
            <th className="text-center">Due date</th>
            <th className="text-center">Requested by another user?</th>
            <th className="text-center">Return Book</th>
          </tr>
        </thead>
        {tableRows}
      </Table>
    </div>
  );
};

export default MyLibraryActiveLoans;
