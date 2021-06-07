import React from 'react';
import './Doodle.css';

const Doodle =  (props) => {
    return(
        <div className="doodle" style={{transform: `translate(${props.move}px, 0px)`}}>
            
        </div>
    )
};

export default Doodle;