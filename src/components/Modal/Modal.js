import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Modal.css'


function CustomModal(props) {


// console.log(props.modalTitle)
  return (
    <>
      <Button variant="primary" id="openButton" onClick={props.handleShow}>{props.text}</Button>
      <Modal show={props.showModal} onHide={props.handleClose}>
        
        <Modal.Header id="header" closeButton>
                <Modal.Title id="title"><>{props.modalTitle}</></Modal.Title>
        </Modal.Header>
                
                <Modal.Body id='back'>
                  <>
                    <div id="text">
              {props.modalText}
                    </div>
                    
                    {/* <div id="image">
                      <img src={props.imagePath} id="add"></img>
                     
                    </div> */}
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