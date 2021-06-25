import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Modal.css'


function CustomModal(props) {


  // console.log(props.modalTitle)
  return (
    <>
      <div id="openButton" onClick={props.handleShow} className="mileButton"><div>{props.text}</div></div>
      <Modal show={props.showModal && props.selfIndex === props.index} onHide={props.handleClose}>

        <Modal.Header id="header" closeButton>
          <Modal.Title id="title"><>{props.modalTitle}</></Modal.Title>
        </Modal.Header>

        <Modal.Body id='back'>
          <>
            <div id="text">
              <div className="modalStoryText">
                <div>{props.modalText}</div>
              </div>
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