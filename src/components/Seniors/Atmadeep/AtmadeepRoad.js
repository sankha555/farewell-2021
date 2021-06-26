import React, { useState, useEffect, useRef } from 'react';
import '../../Road/Road.css';
import Doodle from '../../Doodle/Doodle';
import Milestone from '../../Milestone/Milestone';
import CustomModal from '../../Modal/Modal';
import Landing from '../../LandingPage/Landing';
import Rotate from '../../Rotate/Rotate'
import BackgroundImage from '../../BackgroundImage/BackgroundImage'
import Image from '../../Images/Images'

function AtmadeepRoad() {
  const [position, setPosition] = useState(0);
  const [modalIndex, setModalIndex] = useState(0);

  const [modalShown, setModalShown] = useState(false);

  function handleClose() {
    setModalShown(false);
  }

  function handleShow() {
    setModalShown(true);
  }

  const speed = 0.25; //set the wheel speed here.
  const speed_2 = 2; //set arrow keys speed here.

  const onWheel = (e) => {
    if (!modalShown) {
      const container = scrollRef.current;
      const containerScrollPosition = scrollRef.current.scrollLeft;

      container.scrollTo({
        top: 0,
        left: containerScrollPosition + e.deltaY * speed,
      });

      if (
        position + e.deltaY * 1.1 * speed > 15 &&
        position + e.deltaY * 1.1 * speed < 5900
      ) {
        setPosition(position + e.deltaY * 1.1 * speed);
      }
    }
  };

  function useEvent(event, handler) {
    useEffect(() => {
      window.addEventListener(event, handler);
      return function cleanup() {
        window.removeEventListener(event, handler);
      };
    });
  }

  const moveRight = (e) => {
    e.preventDefault();
    if (e.key === "ArrowRight") {
      if (!modalShown) {
        const container = scrollRef.current;
        const containerScrollPosition = scrollRef.current.scrollLeft;

        container.scrollTo({
          top: 0,
          left: containerScrollPosition + 10 * speed_2,
        });

        if (
          position + 10 * 1.1 * speed_2 > 15 &&
          position + 10 * 1.1 * speed_2 < 5900
        ) {
          setPosition(position + 10 * 1.1 * speed_2);
        }
      }
    }
  };

  const moveLeft = (e) => {
    e.preventDefault();
    if (e.key === "ArrowLeft") {
      if (!modalShown) {
        const container = scrollRef.current;
        const containerScrollPosition = scrollRef.current.scrollLeft;

        container.scrollTo({
          top: 0,
          left: containerScrollPosition - 10 * speed_2,
        });

        if (
          position - 10 * 1.1 * speed_2 > 30 &&
          position - 10 * 1.1 * speed_2 < 5900
        ) {
          setPosition(position - 10 * 1.1 * speed_2);
        }
      }
    }
  };

  useEvent("keydown", moveRight);
  useEvent("keydown", moveLeft);

  const scrollRef = useRef(null);

  const milestones = [
    {
      milestoneText: "Mashin Lurning",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "ML gawd. Andrew Ng of CC perhaps. Pure time model train hota rehta hai room pe.",  
      
      modalTitle: "Mashin Lurning",
      index: 0,
    },
    {
      milestoneText: "Ad-Astra",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Pixxel ka BITS head. Harvard ya kahin se thesis kar raha tha.",
      modalTitle: "Ad-Astra",
      index: 1,
    },
    {
      milestoneText: "Fuml Teamworkbaazi",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Philips ka hackathon akele hi jeet liya tha kyonki baki dono ne kuch nahi kiya.koi company bay area bula rahi hai job ke liyere",
      modalTitle: "Fuml Teamworkbaazi",
      index: 2,
    },
    {
      milestoneText: "Boring Peoples",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Bore ho rha tha toh yeh sab kar liya.",
      modalTitle: "Boring Peoples",
      index: 3,
    },
  ];

  const imagesInfo = [
    {
      src: "https://i.ibb.co/26PwWJW/1.jpg",
      left: "500px",
      width: "500px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/rZg9Yxf/4.jpg",
      left: "1400px",
      width: "500px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/7RGP7k6/5.jpg",
      left: "2300px",
      width: "500px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/0GHCqBv/1.jpg",
      left: "3200px",
      width: "400px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/WNrD2Lr/2.jpg",
      left: "4100px",
      width: "500px",
      bottom: "0%"
    },
  ]


  return (
    <div>
      {/* <Rotate/> */}

      <div className="roadContainer">
        <div ref={scrollRef} className="road" onWheel={onWheel}>
          <Doodle id="moving_doodle" move={position} doodleImg="https://i.ibb.co/jrgqwhj/Pics-Art-06-25-07-44-06.png" />


          {
            imagesInfo.map((imageinfo =>
              <Image
                src={imageinfo.src}
                left={imageinfo.left}
                width={imageinfo.width}
                bottom={imageinfo.bottom}
              />))
          }


          {milestones.map((milestone, index) => (
            <Milestone
              left={1250 * (index + 1)}
              milestone={milestone.milestoneText}
              showModal={modalShown}
              handleClose={handleClose}
              handleShow={() => {
                setModalShown(true);
                setModalIndex(index);
              }}
              //   imagePath={milestone.imagePath}
              modalText={milestone.modalText}
              modalTitle={milestone.modalTitle}
              index={modalIndex}
              selfIndex={milestone.index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AtmadeepRoad;