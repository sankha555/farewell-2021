import React from 'react';
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import './Rotate.css';

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
             return (
        <div className="phone-container">
        <div className="phone">
          </div>
          <div className="message">
            Please rotate your device!
        </div>
        </div>
        );
      }
           else {
            return null;
           }
          }
export default Rotate;