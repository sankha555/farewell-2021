import React from "react";
import "./ParticleBackground.css";
import Particles from "react-particles-js";
import ParticleConfig from "./Particle-config";
import { Dimensions } from "react-native";
import {setState,useEffect,useState} from "react";



    function ParticleBackground()
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
        
        <div class="bg">
<Particles
            width={dimensions.window.width}
            height={dimensions.window.height}
            params={ParticleConfig}
          />
</div>);
    }

export default ParticleBackground;