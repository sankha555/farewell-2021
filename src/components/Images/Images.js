import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

const Images = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Image src={props.path} rounded fluid style={props.css} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Images;
