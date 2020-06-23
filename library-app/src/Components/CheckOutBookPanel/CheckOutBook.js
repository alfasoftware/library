import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class CheckOutBook extends Component {
  componentWillUpdate() {
    console.log("[OrderSummary.js] will update");
  }

  render() {
    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>
          You would like to check the following book out from the Alfa library:
        </p>

        <Button clicked={this.props.clickCancel} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.clickContinue} btnType="Success">
          CONTINUE
        </Button>
      </Auxiliary>
    );
  }
}
export default CheckOutBook;
