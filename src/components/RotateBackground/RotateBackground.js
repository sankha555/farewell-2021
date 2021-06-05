import React from 'react';
import Particles from 'react-particles-js';

const RotateBackground = () => {
return(
<div class='bg'>
<Particles
    width={window.innerWidth} height={window.innerHeight} params={{
	    "particles": {
	        "number": {
	            "value": 200
	        },
	        "size": {
	            "value": 5
	        },
            "color": {
            "value":"#ffffff"
        },
        },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
</div>);
}

export default RotateBackground;