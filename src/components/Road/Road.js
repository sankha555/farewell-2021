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

  const num = 50;
  let points_th = [];

  for (let i = 0; i < num; i++) {
    points_th.push(<th>Points</th>);
    }
    
    let dots = '.';
    let dot = ".";
    for (let i= 0; i < 500; i++) {
        dots = dots.concat(dot);
    }
  return (
    <div>
      <div
        ref={scrollRef}
        className="container"
        id="container"
        onWheel={onWheel}
      >
        <table>
            <Doodle />
                  <p>{
                    dots 
                  }</p>
        </table>
      </div>
    </div>
  );
}

export default Road;