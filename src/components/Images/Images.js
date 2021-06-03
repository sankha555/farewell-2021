import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './Untitled.jpg';


  const Images = ({css}) => {
    return (
        <div>
            <Container>
              <Row>
                <Col>
                  <Image src={img} rounded />
                </Col>
              </Row>
            </Container>
        </div>
    )
}

export default Images;
