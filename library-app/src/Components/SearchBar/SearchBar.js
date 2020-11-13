import React, { useState, useEffect} from "react";
import classes from "./SearchBar.module.css";
import { Form, Button, FormControl } from "react-bootstrap";
import axios from "axios";
import {Redirect} from "react-router-dom";
import DropdownMenu from "../../UI/Dropdown/DropdownMenu";

const SearchBar = () => {

  const [searchParam, setSearchParam] = useState("");
  const [value, setValue] = useState("");
  const [redirectLink, setRedirectLink] = useState("");


const inputChangedHandler = (newVal) => {
  console.log("input changed handler invoked");
  setSearchParam(newVal);

}

const valueChangedHandler = (newVal) => {
  console.log("value changed handler invoked")

const redirectString = "/books?" + newVal;
setRedirectLink(redirectString)
}



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
  <DropdownMenu value={searchParam} valueChanged={(newVal) => valueChangedHandler(newVal)} inputChanged={(newVal) => inputChangedHandler(newVal)}/>
    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchParam} onChange={(e) => setSearchParam(e.target.value)}/> */}
    <Button variant="outline-primary" onClick={searchClickedHandler}>Search</Button>
  </Form>
  )
}

export default SearchBar;
