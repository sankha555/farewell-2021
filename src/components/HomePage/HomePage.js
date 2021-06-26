import "./HomePage.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bg1 from "../../assets/IMG_3902.heic"


import { Animated } from "react-animated-css";

class HomePage extends Component {
  


 
  // mouseEntered = (event) => {
  //   this.setState({ hovering: 1, background: event.target.id });
  // };
  // mouseLeft = (event) => {
  //   this.setState({ hovering: 0, background: null });
  // };

  render() {
  
   
    let Screen = (
      <div className="homePage">
        <div className = "bg-component">
          <img src={bg1} style={{ height: "100%", width: "100%" }} ></img>
        </div> 
        <div className="overlaySide">
          <div className="overlay">
          <h1>FAREWELL</h1>
          <h2>Batch of 2017!</h2>

          <p className="innerText">Thank you for the beautiful memories and the countless lessons Seniors. <br/>You'll be missed!</p>
        
         <NavLink to='/Farewell-2021'><button className="btn btn-success mt-5"  style={{background:"#08bedf", outline:"0"}}>NEXT</button></NavLink> 
        </div>
          
        </div>
      </div>
    );

    return Screen;
  }
}
export default HomePage;
