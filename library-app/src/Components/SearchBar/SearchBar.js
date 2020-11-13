import React, { Component } from "react";
import classes from "./SearchBar.module.css";
import { Form, Button, FormControl } from "react-bootstrap";

const SearchBar = () => {

  return (<Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
  </Form>
  )}

export default SearchBar;
