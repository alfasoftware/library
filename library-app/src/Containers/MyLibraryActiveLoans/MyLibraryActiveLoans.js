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
          <td >{dataEntry.title}</td>
          <td class="text-center">{dataEntry.checkoutDate}</td>
          <td class="text-center">{dataEntry.dueDate}</td>
          <td style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
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
            <th class="text-center">Check out date</th>
            <th class="text-center">Due date</th>
            <th class="text-center">Requested by another user?</th>
          </tr>
        </thead>
        {tableRows}
      </Table>
    </div>
  );
};

export default MyLibraryActiveLoans;
