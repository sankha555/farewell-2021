import React, { useState, useEffect, useRef } from 'react';
import '../../Road/Road.css';
import Doodle from '../../Doodle/Doodle';
import Milestone from '../../Milestone/Milestone';
import CustomModal from '../../Modal/Modal';
import Landing from '../../LandingPage/Landing';
import Rotate from '../../Rotate/Rotate'
import BackgroundImage from '../../BackgroundImage/BackgroundImage'

function NikhilRoad() {
const [position, setPosition] = useState(0);

    const [modalShown, setModalShown] = useState(false);

    function handleClose() {
        
        setModalShown(false);
    }

    function handleShow() {
        setModalShown(true);
    }

    const speed = 0.25;  //set the wheel speed here.
    const speed_2 = 2; //set arrow keys speed here.

    const onWheel = (e) => {

        if (!modalShown) {
            const container = scrollRef.current;
            const containerScrollPosition = scrollRef.current.scrollLeft;

            container.scrollTo({
                top: 0,
                left: containerScrollPosition + e.deltaY*speed
            });

            if ((position + e.deltaY*1.1*speed > 15) && (position+e.deltaY*1.1*speed < 5900)) {
                setPosition(position + e.deltaY*1.1*speed);
            }
            
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
        if (e.key === 'ArrowRight') {
            
            if (!modalShown) {
            const container = scrollRef.current;
            const containerScrollPosition = scrollRef.current.scrollLeft;

            container.scrollTo({
                top: 0,
                left: containerScrollPosition + 10*speed_2
            });

            if ((position + 10*1.1*speed_2 > 15) && (position+10*1.1*speed_2 < 5900)) {
                setPosition(position + 10*1.1*speed_2);
            }
            
        }
        }
    }

    const moveLeft = (e) => {
        e.preventDefault();
        if (e.key === 'ArrowLeft') {
        
            if (!modalShown) {
            const container = scrollRef.current;
            const containerScrollPosition = scrollRef.current.scrollLeft;

            container.scrollTo({
                top: 0,
                left: containerScrollPosition - 10*speed_2
            });

            if ((position - 10*1.1*speed_2 > 30) && (position-10*1.1*speed_2 < 5900)) {
                setPosition(position - 10*1.1*speed_2);
            }
            
        }
        }
    }
    
    useEvent('keydown', moveRight);
    useEvent('keydown', moveLeft);
    

    const scrollRef = useRef(null);

    const milestones = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];


  return (<div>
        {/* <Rotate/> */}
        <BackgroundImage/>
          <div className="roadContainer">
      <div
        ref={scrollRef}
        className="road"
              onWheel={onWheel}
      > 
              <Doodle id="moving_doodle" move={position}/>
              {milestones.map((milestone, index) => <Milestone left={1250 * (index + 1)} milestone={milestone} showModal={modalShown} handleClose={handleClose} handleShow={handleShow}/>)}
              </div>
              </div>
              </div>
  );
}

export default NikhilRoad;