import React from 'react';
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import './Rotate.css';
import Particles from 'react-particles-js';


const window = Dimensions.get("window");    

 const Rotate = () => {
  
  const [dimensions, setDimensions] = useState({window});
   const onChange = ({window}) => {
    setDimensions({window});
  };    

     useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });     

          if (dimensions.window.width<dimensions.window.height) {
             return (<div>
               <div class='bg'>
                 <div className="phone-container" >
        <div className="phone">
          </div>
          <div className="message">
            Please rotate your device!
        </div>
        </div>
<Particles
    width={dimensions.window.width} height={dimensions.window.height} params={{
	    "particles": {
	        "number": {
	            "value": 100
	        },
	        "size": {
	            "value": 3
	        },
            "color": {
            "value":"#ffffff"
        },
         "opacity": {
              "value": 0.1,
            },
            "links": {
              "opacity": 0.3,
            },
          },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    },
      "background": {
            "color": {
              "value": "#000000",
            },
          }
	}} />
</div>

        </div>
        );
      }
           else {
            return null;
           }
          }
export default Rotate;