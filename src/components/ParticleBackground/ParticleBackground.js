import React from "react";
import "./ParticleBackground.css";
import Particles from "react-particles-js";
import ParticleConfig from "./Particle-config";
import { Dimensions } from "react-native";
import {setState,useEffect,useState} from "react";



    function ParticleBackground(props)
    {
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
    return(
        
        <div className="bgParticles">
<Particles
            params={props.config}
            width="100vw"
            height="100vh"
          />
</div>);
    }

export default ParticleBackground;