import React, { useState, useEffect, useRef } from 'react';
import './Road.css';
import Doodle from '../Doodle/Doodle';
import Milestone from '../Milestone/Milestone';
import CustomModal from '../Modal/Modal';
import Landing from '../LandingPage/Landing';


function Road() {
    

    const [position, setPosition] = useState(0);

    const onWheel = (e) => {
        e.preventDefault();
        const container = scrollRef.current;
        const containerScrollPosition = scrollRef.current.scrollLeft;

        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY
        });

        if ((position + e.deltaY*1.1 > 15) && (position+e.deltaY*1.1 < 5900)) {
            setPosition(position + e.deltaY*1.1);
        }
        
    };

    function useEvent(event, handler){
        useEffect(() => {
            window.addEventListener(event, handler);
            return function cleanup() {
                window.removeEventListener(event, handler);
            }
        } )
    }
    
    const moveRight = (e) => {
        e.preventDefault();
        if (e.key === ' ') {
            setPosition(position + 50);
        }
        // const doodle = document.getElementById("moving_doodle");
        // if (doodle) {
        //     const doodlePosition = doodle.style.right;
        //     doodle.style.right = doodlePosition + 50 + 'px';
        // }
    }

    useEvent('keyup', moveRight);

    

    const scrollRef = useRef(null);

    
    let dots = '.';
    for (let i= 0; i < 200; i++) {
        dots = dots.concat('*.*.*.');
    }

    const milestones = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];


  return (<div>
          <div className="roadContainer">
      <div
        ref={scrollRef}
        className="road"
        onWheel={onWheel}
      > 
              <Doodle id="moving_doodle" move={position}/>
              <p style={{ color: "white" }}>
                {dots}
              </p>
              {milestones.map( (milestone, index) => <Milestone left={1250*(index+1)} milestone={milestone} />)}
              </div>
              </div>
              </div>
       
    
  );
}

export default Road;