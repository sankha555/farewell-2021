import React from 'react';
import './Milestone.css';
import CustomModal from '../Modal/Modal';

const Milestone = (props) => {

    return(
        <div className="milestone_container" style={{ left:`${props.left}px`}}>
            
            <div className="milestone_text">
                <CustomModal text={props.milestone} showModal={props.showModal} handleClose={props.handleClose} handleShow={props.handleShow} modalText={props.modalText} modalTitle={props.modalTitle} />
                {/* <div>{props.milestone}</div> */}
            </div>
        </div>
    )
};

export default Milestone;