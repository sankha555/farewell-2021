import React from 'react';
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import './Rotate.css';


 const Rotate = () => {
     const [orientation, setOrientation] = useState("LANDSCAPE");

     useEffect(() => {
        Dimensions.addEventListener('change', ({window:{width,height}})=>{
          if (width<height) {
            setOrientation("PORTRAIT")
          } else {
            setOrientation("LANDSCAPE")
        
          }
        })
    
      }, []);
  if(orientation === "PORTRAIT")
      {
      return (
          <div className="phone-container">
        <div className="phone center">
        </div>
        <div className="message center">
          Please rotate your device!
        </div>
        </div>
        );
      }
    else
      return null;
    }


export default Rotate;