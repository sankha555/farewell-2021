import React, {useState, useEffect} from 'react'
import Rotate from '../components/Rotate/Rotate';
import CustomModal from '../components/Modal/Modal';
// import Image from '../components/Images/Images';
import Spinner from '../components/Spinner/Spinner';
import Road from '../components/Road/Road';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';
import './Layout.css';
import Landing from '../components/LandingPage/Landing'
import img1 from '../assets/about1.jpg'


const cacheImages=async(srcArray)=> {
    const promises=await srcArray.map((src)=>{
        return new Promise(function(resolve,reject){
            const img=new Image();
            img.src=src;                                         //code for caching images
            img.onload=resolve();                                   
            img.onerror=reject();
        });
    });
    await Promise.all(promises);
};

const Layout = ({tag}) => {
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const imgs=[
            "https://source.unsplash.com/1600x900/?graduation",
            img1 
        ]
        cacheImages(imgs);                                            //comment this out to skip caching
        setTimeout(() => setLoading(false), 2000);
        // setLoading(false);
        })


    
if(loading && tag.type.name==='Landing'){                     
    /*load spinner only when Landing page opens,remove comparison check to load it on every page opening */
    return (
            <Spinner/>
        );}
        else{
            console.log(tag);
    return(
            <div className="layoutDiv">
                 <Rotate rtag={tag}/>                
                 {/* <Landing/> */}
            </div>);}
    
        
        
};


export default Layout;