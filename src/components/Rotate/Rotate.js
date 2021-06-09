import React from "react";
import "./Rotate.css";
import Particles from "react-particles-js";
import Road from "../../components/Road/Road";
import { Dimensions } from "react-native";
import {setState,useEffect,useState} from "react";
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import ParticleConfig from './Particle-config';
import Landing from '../LandingPage/Landing';

const Rotate = () => {
  const window = Dimensions.get("window");

  const [dimensions, setDimensions] = useState({ window });
  const onChange = ({ window }) => {
    setDimensions({ window });
  };
  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  if (dimensions.window.width < dimensions.window.height) {
    return (
      <div>
        <ParticleBackground config={ParticleConfig} />
        <div className="phone-container">
          <div className="phone"></div>
          <div className="message">Please rotate your device!</div>
        </div>
      </div>
    );
  } else {
    return null; 
  }
};
export default Rotate;
