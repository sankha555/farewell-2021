import React from "react";
import "./Rotate.css";
import Particles from "react-particles-js";
import ParticleConfig from "./Particle-config";
import { Dimensions } from "react-native";
import {setState,useEffect,useState} from "react";


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
        <div class="bg">
          <div className="phone-container">
            <div className="phone"></div>
            <div className="message">Please rotate your device!</div>
          </div>
          <Particles
            width={dimensions.window.width}
            height={dimensions.window.height}
            params={ParticleConfig}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Rotate;