import "./Landing.css";
import React, { Component } from "react";
import TextHover from "./TextHover";
import { NavLink } from "react-router-dom";
import Code from "./assets/Code.jpg";
// import Ayush from './assets/Ayush.jpg';
// import Sparsh from './assets/Sparsh.jpg';
// import Abhijeet from './assets/Abhijeet.jpg';
// import Atmadeep from './assets/Atmadeep.jpg';
// import Yash from './assets/Yash.jpg';
// import Rahil from './assets/Rahil.jpg';
// import Vishnupriya from './assets/Vishnupriya.jpg'
// import Nikhil from './assets/Nikhil.jpg';
// import Nirav from './assets/Nirav.jpg';

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

    // loader: 1,
    // logoCollapser: {},
  };
  // componentDidMount() {
  //   setTimeout(() => {
  //   	this.setState({
  //   		logoCollapser: {
  //   			borderRadius: '100%',
  //   			marginLeft: '10px',
  //   			marginTop: '30px',
  //   			width: '0',
  //   			height: '0',
  //   			color: 'transparent',
  //   		},
  //   	});
  //   }, 3000);
  //   setTimeout((s) => {
  //   	this.setState({ loader: 0 });
  //   }, 4200);
  // }
  componentDidMount() {
    // let heightElem = document.querySelector(".Header1").offsetHeight * 9;
    let heightElem =
      document.querySelector(".MainContainer").offsetHeight +
      document.querySelector(".Headline").offsetHeight;
    console.log(heightElem);
    this.setState({ height: heightElem });
    console.log(this.state.height);
    // document.querySelector(".BlueSlider").style.height =
    //   this.state.height + "px";
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
        {/* <div className='Loader' style={{ ...this.state.logoCollapser }}>
					<Animated animationIn='slideInUp' isVisible={true}>
						<div>
							<h3>Hey, this is Pranay and you are watching my portfolio!</h3>
						</div>
					</Animated>
				</div> */}
      </div>
    );

    Screen = (
      <div className="Landing">
        <nav className="">
          {/* <div className='Logo'>
							<div className='red'>B</div>
						</div> */}
          <span className="Projects">
            <h4>
              Farewell{" "}
              <span className="Headline" style={headLine}>
                Farewell{" "}
              </span>
            </h4>
          </span>
          {/* <div className='Menu'>
							<p>
								More <span>//</span>
							</p>
						</div> */}
        </nav>
        <div className="Background1" style={backGround}></div>
        <div
          className="BlueSlider"
          style={{
            backgroundPosition: "100% 0",
            height: this.state.height,
          }}
        ></div>

        <div className="MainContainer">
          {" "}
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
              text="Ayush"
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
        </div>
      </div>
    );

    return Screen;
  }
}
export default Landing;
