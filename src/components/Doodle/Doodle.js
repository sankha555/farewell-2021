import React from 'react';
import './Doodle.css';

const Doodle = (props) => {
    return (
        <div className="doodle" style={{ transform: `translate(${props.move}px, 0px)`, width: `${props.width || "150px"}` }}>
            <img className="imgdood" src={props.doodleImg} alt="Pics-Art-06-25-07-44-06" />
        </div>
    )
};

export default Doodle;