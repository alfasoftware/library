import React from "react";
import classes from "./LibraryNavbar.module.css";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const LibraryNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src="../../assets/Alfa_Company.png"
            width="90"
            height="52"
            alt="Alfa logo"
            className={classes.alfaLogo}
            // style={
            //   {
            //     // WebkitFilter: "contrast(0%) brightness(2.75)",
            //   }
            // }
          ></img>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/catalogue">Full Catalogue</Nav.Link>
          <Nav.Link href="/myLibrary">My Library</Nav.Link>
          <Nav.Link href="/requestBook">Book Request</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default LibraryNavbar;
