import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Modal.css'


function CustomModal(props) {

  console.log(props.showModal)
 

  return (
    <>
      <Button variant="primary" id="openButton" onClick={props.handleShow} >{props.text}</Button>
      <Modal show={props.showModal} onHide={props.handleClose}>
        
        <Modal.Header id="header" closeButton>
                <Modal.Title id="title">Where is the good in goodbye</Modal.Title>
        </Modal.Header>
                
                <Modal.Body id='back'>
                  <>
                    <div id="text">
                    As we say goodbye, you shall be waving hello to new opportunities in your upcoming life, and we wish you all the best for that
                    </div>
                    
                    <div id="image">
                      <img src="https://source.unsplash.com/1600x900/?graduation" id="add"></img>
                     
                    </div>
                  </>
                </Modal.Body>
        
              <Modal.Footer id="footer">
                {/* <Button variant="secondary" onClick={props.handleClose}>CLOSE</Button> */}
                <Button id="button" variant="primary" onClick={props.handleClose}>CLOSE</Button>
              </Modal.Footer>
      </Modal>
    </>
  );
}
export default CustomModal;