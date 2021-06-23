import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "./Images.css";
import { SRLWrapper } from "simple-react-lightbox";

const Images = (props) => {
  const options = {
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '10px',
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: true,
      showFullscreenButton: true,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
      size: '40px'
    },
    thumbnails: {
      showThumbnails: false
    }
  }
  return (
    <div className="roadImgDiv" style={{ left: props.left, width: props.width, bottom: props.bottom }} >
      <SRLWrapper options={options} elements={[{caption:"HELLO"}]}>
        <img src={props.src} />
      </SRLWrapper>
    </div>
  );
};

export default Images;
