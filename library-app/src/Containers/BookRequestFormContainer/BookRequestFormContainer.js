import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const BookRequestFormContainer = (props) => {
  return (
    <div>
      <Form
        style={{
          width: "60%",
          margin: "auto",
          padding: "30px",
          border: "4px solid gray",
        }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="email" placeholder="Enter book title" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Label>Reason for requesting book</Form.Label>
          <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            custom
          >
            <option value="0">Choose...</option>
            <option value="1">Educational - work related</option>
            <option value="2">Educational - non-work related</option>
            <option value="3">Fiction and free time</option>
          </Form.Control>
        </Form.Row>

        <Form.Group controlId="formGridAddress2" style={{ marginTop: "20px" }}>
          <Form.Label>Additional information (if any)</Form.Label>
          <Form.Control placeholder="Additional info..." />
        </Form.Group>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Notify me upon response" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={props.formSubmitted}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookRequestFormContainer;
