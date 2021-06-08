import React from 'react'
import '../Spinner/Spinner.css'
import '../ParticleBackground/ParticleBackground';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import ParticleConfig from './Particle-config';

function Spinner(props) {
    return ( <div>
    <ParticleBackground config={ParticleConfig}/>
    <div id="spinnerdiv">     
    <div id="wrapD3Cube">
        <div id="D3Cube"><div id="side1"><div id="main1"></div><div id="sidediv1"></div>
            </div>
            <div id="side2"><div id="main2"></div><div id="sidediv2"></div></div>
            <div id="side3"><div id="main3"></div><div id="sidediv3"></div></div>
            <div id="side4"><div id="main4"></div><div id="sidediv4"></div></div>
            <div id="side5"><div id="main5"></div><div id="sidediv5"></div></div>
            <div id="side6"></div>
        </div>
     </div>
    <p id= "spinner_txt">CODING CLUB</p>
    <div id="loader"></div>
    </div> </div>);
}


export default Spinner;