import React, { useState, useEffect } from 'react'
import Rotate from '../components/Rotate/Rotate';
import CustomModal from '../components/Modal/Modal';
// import Image from '../components/Images/Images';
import Spinner from '../components/Spinner/Spinner';
import Road from '../components/Road/Road';
import ParticleBackground from '../components/ParticleBackground/ParticleBackground';
import './Layout.css';
import Landing from '../components/LandingPage/Landing'
import img1 from '../assets/about1.jpg'


const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
        return new Promise(function (resolve, reject) {
            const img = new Image();
            img.src = src;                                         //code for caching images
            img.onload = resolve();
            img.onerror = reject();
        });
    });
    await Promise.all(promises);
};

const Layout = ({ tag }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const imgs = [
            img1,
            "https://i.ibb.co/qnHBzgX/c2.jpg",
            "https://i.ibb.co/27yG4JJ/2.jpg",
            "https://i.ibb.co/sqqJpM8/c3.jpg",
            "https://i.ibb.co/JBfRVqB/c4.jpg",
            "https://i.ibb.co/ysX987f/c1.jpg",
            "https://i.ibb.co/hXhPKVj/ABhijeet-Borole.png",

            "https://i.ibb.co/26PwWJW/1.jpg",
            "https://i.ibb.co/rZg9Yxf/4.jpg",
            "https://i.ibb.co/7RGP7k6/5.jpg",
            "https://i.ibb.co/0GHCqBv/1.jpg",
            "https://i.ibb.co/WNrD2Lr/2.jpg",
            "https://i.ibb.co/cY3tQ7K/1-1.jpg",
            "https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png",

            "https://i.ibb.co/cY3tQ7K/1-1.jpg",
            // "https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png",

            "https://i.ibb.co/jw3Wd3c/2.jpg",
            "https://i.ibb.co/dpbHvdL/3.jpg",
            "https://i.ibb.co/YR2mPVX/4.jpg",
            "https://i.ibb.co/L0Z0m7m/5.jpg",
            "https://i.ibb.co/9ZTksnv/1.jpg",
            // "https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png",

            "https://i.ibb.co/42tT8yB/3.jpg",
            "https://i.ibb.co/0G4N1Kn/4.jpg",
            "https://i.ibb.co/dPhbk72/5.jpg",
            "https://i.ibb.co/njJ5QG2/1.jpg",
            "https://i.ibb.co/j59mYC6/2.jpg",
            // "https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png",

            "https://i.ibb.co/c20g2hw/2.jpg",
            "https://i.ibb.co/94fQqpB/3.jpg",
            "https://i.ibb.co/pWNj0VP/4.jpg",
            "https://i.ibb.co/2M7Bqcc/5.jpg",
            "https://i.ibb.co/f9v1pCC/1.jpg",
            // "https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png",

            "https://i.ibb.co/NN4rmK6/2.jpg",
            "https://i.ibb.co/smnLwQs/3.jpg",
            "https://i.ibb.co/7zhz7K1/4.jpg",
            "https://i.ibb.co/Wsvf7Kc/5.jpg",
            "https://i.ibb.co/Y7fLhDM/1.jpg",
            // "https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png",

            "https://i.ibb.co/DCXbLkn/1.jpg",
            "https://i.ibb.co/2dTwDFF/3.jpg",
            "https://i.ibb.co/8srw3V1/4.jpg",
            "https://i.ibb.co/pb7yX39/2.jpg",
            "https://i.ibb.co/WtLTNpW/5-1.jpg",
            // "https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png",

            "https://i.ibb.co/r4ptFdr/2.jpg",
            "https://i.ibb.co/VH6Sy6R/3.jpg",
            "https://i.ibb.co/WD9J3qg/4.jpg",
            "https://i.ibb.co/q9Tqkm1/5.jpg",
            "https://i.ibb.co/BCWBtS9/1.jpg",
            // "https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png",

            "https://i.ibb.co/n6vF5bP/3.jpg",
            "https://i.ibb.co/CQVRH63/4.jpg",
            "https://i.ibb.co/vHKpkVt/1.jpg",
            "https://i.ibb.co/ZVDV2Rd/2.jpg",
            // "https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png",
        ]
        cacheImages(imgs);                                            //comment this out to skip caching
        setTimeout(() => setLoading(false), 2000);
        // setLoading(false);
    })



    if (loading) {
        /*load spinner only when Landing page opens,remove comparison check to load it on every page opening */
        return (
            <Spinner />
        );
    }
    else {
        // console.log(tag);
        return (
            <div className="layoutDiv">
                <Rotate rtag={tag} />
                {/* <Landing/> */}
            </div>);
    }



};


export default Layout;