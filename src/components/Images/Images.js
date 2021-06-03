import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


  const Images = () => {
    return (
        <div>
            <Container>
              <Row>
                <Col>
                  <Image src="Untitled.jpg" rounded />
                </Col>
              </Row>
            </Container>
        </div>
    )
}

export default Images;
