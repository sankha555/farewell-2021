import React from 'react'
import bg1 from "../../assets/about1.jpg"
import './BackgroundImage.css'
const BackgroundImage = (props) => {
    return (
        <div className = "bg-component">
            <img src={bg1} style = {{height:"100%" , width: "100%"}} ></img>
        </div>
    )
}

export default BackgroundImage