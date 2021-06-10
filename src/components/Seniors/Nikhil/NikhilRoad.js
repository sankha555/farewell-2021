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

    const speed = 0.4;  //set the speed here.

    const onWheel = (e) => {
        e.preventDefault();
        const container = scrollRef.current;
        const containerScrollPosition = scrollRef.current.scrollLeft;

        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY*speed
        });

        if ((position + e.deltaY*1.1*speed > 15) && (position+e.deltaY*1.1*speed < 5900)) {
            setPosition(position + e.deltaY*1.1*speed);
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
    
    // const moveRight = (e) => {
    //     e.preventDefault();
    //     if (e.key === ' ') {
    //         setPosition(position + 50);
    //     }
    // }
    // FOR IMPLEMENTING ANY ACTIONS OTHER THAN MOVING USE THIS
    // useEvent('keyup', moveRight);

    

    const scrollRef = useRef(null);

    const milestones = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];


  return (<div>
        <Rotate/>
        <BackgroundImage/>
          <div className="roadContainer">
      <div
        ref={scrollRef}
        className="road"
        onWheel={onWheel}
      > 
              <Doodle id="moving_doodle" move={position}/>
              {milestones.map( (milestone, index) => <Milestone left={1250*(index+1)} milestone={milestone} />)}
              </div>
              </div>
              </div>
  );
}
export default NikhilRoad;