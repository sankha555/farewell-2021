import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Modal.css'


function CustomModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>{props.text}</Button>
      <Modal show={show} onHide={handleClose}>
        
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
                {/* <Button variant="secondary" onClick={handleClose}>CLOSE</Button> */}
                <Button id="button" variant="primary"onClick={handleClose}>CLOSE</Button>
              </Modal.Footer>
      </Modal>
    </>
  );
}
export default CustomModal;