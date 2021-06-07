import React from 'react';
import './Milestone.css';

const Milestone = (props) => {
    return(
        <div className="milestone_container" style={{ left:`${props.left}px`}}>
            
            <div className="milestone_text">
                <div>{props.milestone}</div>
            </div>
        </div>
    )
};

export default Milestone;