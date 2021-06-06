import React from 'react';
import { useState } from 'react';
import { Button,Modal } from 'react-bootstrap';
import './Modal.css'

function CustomModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Load Content
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div id="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eum molestias aliquid ipsa, rem soluta. Sapiente
              quasi ea voluptatibus officia dolorem nobis obcaecati, quam aliquid
    </div>

            <div id="img">
              {/* <img src="" /> */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque accusamus delectus fugiat reiciendis! Modi corrupti ducimus nisi voluptatibus? Nihil ipsam nam aliquid vero! Animi adipisci maiores
    </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default CustomModal;