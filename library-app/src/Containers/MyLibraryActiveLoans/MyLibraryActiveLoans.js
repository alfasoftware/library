import React from "react";
import { Table } from "react-bootstrap";
import mockedData from "./mockedLibrarydata.json";
import { TiTick } from "react-icons/ti";
import { IconContext } from "react-icons";
import { ImCross } from "react-icons/im";

const MyLibraryActiveLoans = (props) => {
  const greenTick = (
    <IconContext.Provider
      value={{ color: "green", className: "global-class-name", size: "30px" }}
    >
      <div>
        <TiTick style={{ marginLeft: "45px" }} />
      </div>
    </IconContext.Provider>
  );

  const redCross = (
    <IconContext.Provider
      value={{ color: "red", className: "global-class-name" }}
    >
      <div>
        <ImCross style={{ marginLeft: "50px" }} />
      </div>
    </IconContext.Provider>
  );

  const tableRows = mockedData.map((dataEntry) => {
    return (
      <tbody key={dataEntry.id}>
        <tr>
          <td>{dataEntry.title}</td>
          <td>{dataEntry.checkoutDate}</td>
          <td>{dataEntry.dueDate}</td>
          <td style={{ margin: "auto", display: "flex" }}>
            {dataEntry.requestedByOtherUser ? redCross : greenTick}
          </td>
        </tr>
      </tbody>
    );
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
            <th>Check out date</th>
            <th>Due date</th>
            <th>Requested by another user?</th>
          </tr>
        </thead>
        {tableRows}
      </Table>
    </div>
  );
};

export default MyLibraryActiveLoans;