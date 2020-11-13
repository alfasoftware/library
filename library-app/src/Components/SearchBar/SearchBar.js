import React, { useState, useEffect} from "react";
import classes from "./SearchBar.module.css";
import { Form, Button, FormControl } from "react-bootstrap";
import axios from "axios";
import {Redirect} from "react-router-dom";

const SearchBar = () => {

  const [searchParam, setSearchParam] = useState("");
  const [redirectLink, setRedirectLink] = useState("");

  let redirectComponent = null;

  if (redirectLink) {
    redirectComponent = <Redirect to={redirectLink} />
  }

  const searchClickedHandler = () => {
    console.log("search clicked handler invoked")
      const redirectString = "/searchResults?queryParams=" + searchParam;
      setRedirectLink(redirectString);
    }

  return (
  <Form inline>
  {redirectComponent} 
    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchParam} onChange={(e) => setSearchParam(e.target.value)}/>
    <Button variant="outline-primary" onClick={searchClickedHandler}>Search</Button>
  </Form>
  )
}

export default SearchBar;
