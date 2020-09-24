import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const LibraryNavbar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Alfa Library</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/catalogue">Full Catalogue</Nav.Link>
          <Nav.Link href="/myLibrary">My Library</Nav.Link>
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
