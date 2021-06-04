import React, { useState, useEffect, useRef } from 'react';
import './Road.css';
import Doodle from '../Doodle/Doodle';

function Road() {
  const onWheel = e => {
    e.preventDefault();
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY
    });
  };

  const scrollRef = useRef(null);
    
    let dots = '.';
    for (let i= 0; i < 200; i++) {
        dots = dots.concat('*.*.*.');
    }

  return (
      <React.Fragment>
      <div
        ref={scrollRef}
        className="road"
        onWheel={onWheel}
      >
            <Doodle />
              <p style={{ color: "blue" }}>
                {dots}
            </p>
        
          </div>
          </React.Fragment>
    
  );
}

export default Road;