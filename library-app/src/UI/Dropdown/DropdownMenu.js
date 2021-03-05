import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const options = ['Example 1', 'Example 2', "example 3", "Different 1", "Different 2", "DIFFERENT CAPS"];

export default function ControllableStates(props) {

  return (
    <div>
      <Autocomplete
        value={props.value}
        onChange={(event, newValue) => {
            props.valueChanged(newValue);
          }}
        inputValue={props.inputValue}
        onInputChange={(event, newInputValue) => {
            props.inputChanged(newInputValue);
          }}
        id="controllable-states-demo"
        options={props.options}
        style={{ width: 300, backgroundColor: "white", borderRadius: "5px", marginRight: "20px" }}
        renderInput={(params) => <TextField {...params} label="Search"  placeholder=""/>}

      />
    </div>
  );
}