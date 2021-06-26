import "./Landing.css";
import React, { Component } from "react";
import TextHover from "./TextHover";
import { NavLink } from "react-router-dom";
import Code from "./assets/Code.jpg";
import { Dimensions } from "react-native";

import { Animated } from "react-animated-css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      height: 0,
    };
  }
  state = {
    hovering: 0,
    background: null,
  };

  componentDidMount() {
   
    let heightElem =
      document.querySelector(".MainContainer").offsetHeight +
      document.querySelector(".Headline").offsetHeight;
    console.log(heightElem);
    this.setState({ height: heightElem });
    console.log(this.state.height);
  
  }
  mouseEntered = (event) => {
    this.setState({ hovering: 1, background: event.target.id });
  };
  mouseLeft = (event) => {
    this.setState({ hovering: 0, background: null });
  };

  render() {
    let blueSlider = {};
    let backGround = {
      opacity: "0",
      background: `url(${this.state.background})`,
    };
    let headLine = {};

    let footer = {};
    if (this.state.hovering) {
      blueSlider = {
        backgroundPosition: "100% 0",
        height: this.state.height,
      };
      backGround = {
        background: `url(${this.state.background})`,
        opacity: "1",
        backgroundSize: "cover",
        backgroundPosition: "unset",
        zIndex: "5",
        transform: "scale(1.1,1.1)",
        position: "fixed",
      };
      headLine = {
        width: "100%",
      };

      footer = { transform: "translateY(-3.5vw)" };
    }
   
   let Screen = (
      <div className="Landing">
        <nav>
         
          <span className="Projects"  >
            <h4 style={this.state.hovering ? {color: "#a30d0d"} : null}>
              Batch Of 2017
              <span className="Headline" style={headLine}>
              Batch Of 2017
              </span>
            </h4>
          </span>
        </nav>
        <div className="Background1" style={backGround}></div>
        <div
          className="BlueSlider"
          style={{ backgroundPosition: "100% 0", height: this.state.height }}
        ></div>

        <div className="MainContainer">
          <NavLink to="/Abhijeet">
            <TextHover
              id={Code}
              text="Abhijeet"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Ayush">
            <TextHover
              id={Code}
              text="Ayush‎‎"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Atmadeep">
            <TextHover
              id={Code}
              text="Atmadeep"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Sparsh">
            <TextHover
              id={Code}
              text="Sparsh"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Yash">
            <TextHover
              id={Code}
              text="Yash"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Rahil">
            <TextHover
              id={Code}
              text="Rahil"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Vishnupriya">
            <TextHover
              id={Code}
              text="Vishnupriya"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Nikhil">
            <TextHover
              id={Code}
              text="Nikhil"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Nirav">
            <TextHover
              id={Code}
              text="Nirav"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Yashdeep">
            <TextHover
              id={Code}
              text="Yashdeep"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
          <NavLink to="/Happy">
            <TextHover
              id={Code}
              text="Harpinder"
              MouseEntered={this.mouseEntered}
              MouseLeft={this.mouseLeft}
              hoverActive={this.state.hovering}
            />
          </NavLink>
        </div>
      </div>
    );

    return Screen;
  }
}
export default Landing;
