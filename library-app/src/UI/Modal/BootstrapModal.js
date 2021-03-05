import React from "react"
import { Modal, Button } from "react-bootstrap";

const BootstrapModal = ({show, handleClose, titleText, bodyText, button1Clicked, button1Text, button2Clicked, button2Text}) => {
    return (      
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titleText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {bodyText}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={button1Clicked}>
            {button1Text}
          </Button>
          <Button variant="primary" onClick={button2Clicked}>
            {button2Text}
          </Button>
        </Modal.Footer>
      </Modal>
      
      );
}
 
export default BootstrapModal;