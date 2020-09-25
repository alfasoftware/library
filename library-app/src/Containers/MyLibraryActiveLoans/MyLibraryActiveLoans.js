import React, { useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import mockedData from "./mockedLibrarydata.json";
import GreenTick from "../../UI/Icons/GreenTick";
import RedCross from "../../UI/Icons/RedCross";

const MyLibraryActiveLoans = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  
  const formSubmittedHandler = (event) => {
    event.preventDefault();
    setShowModal(!showModal);
  };

  const handleReturn = (dataEntry) => {
    dataEntry.display = false;
    handleClose();
  }

  const tableRows = mockedData.map((dataEntry) => {
    if (dataEntry.display) {
    return (
      <tbody key={dataEntry.id}>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to return this book?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <div class="text-center">
          <Button variant="success" onClick={() => handleReturn(dataEntry)}>
            Yes
          </Button>
          </div>
          <div class="text-center">
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
        <tr>
          <td>{dataEntry.title}</td>
          <td class="text-center">{dataEntry.checkoutDate}</td>
          <td class="text-center">{dataEntry.dueDate}</td>
          <td style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
            {dataEntry.requestedByOtherUser ? <RedCross /> : <GreenTick />}
          </td>
          <td class="text-center"><Button variant="primary" type="submit" onClick={formSubmittedHandler}>
          Return
        </Button></td>
        </tr>
      </tbody>
    );
    };
  });


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
            <th class="text-center">Check out date</th>
            <th class="text-center">Due date</th>
            <th class="text-center">Requested by another user?</th>
            <th class="text-center">Return Book</th>
          </tr>
        </thead>
        {tableRows}
      </Table>
    </div>
  );
};

export default MyLibraryActiveLoans;
