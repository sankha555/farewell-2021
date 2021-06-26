import React, { useState, useEffect, useRef } from 'react';
import '../../Road/Road.css';
import Doodle from '../../Doodle/Doodle';
import Milestone from '../../Milestone/Milestone';
import CustomModal from '../../Modal/Modal';
import Landing from '../../LandingPage/Landing';
import Rotate from '../../Rotate/Rotate'
import BackgroundImage from '../../BackgroundImage/BackgroundImage'
import Image from '../../Images/Images'

function AyushRoad() {
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
      milestoneText: "Formal Intro",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "init",
      modalTitle: "Story",
      index: 1
      
    },
    {
      milestoneText: "BOSM 2k18",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Puraa BOSM 2k18 ke liye app almost khudse banaya...",
      modalTitle: "AppD Guru",
      index: 0

    },
    {
      milestoneText: "Third Year",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Story title",
      modalTitle: "Story",
      index: 2

    },
    {
      milestoneText: "Fourth Year",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Story title",
      modalTitle: "Story",
      index: 3

    },
  ];

  const imagesInfo = [
    {
      src: "https://i.ibb.co/cY3tQ7K/1-1.jpg",
      left: "500px",
      width: "400px",
      bottom: "0%"
    },
    {
      src: "https://source.unsplash.com/1600x900/?graduation",
      left: "1400px",
      width: "500px",
      bottom: "0%"
    },
    {
      src: "https://source.unsplash.com/1600x900/?graduation",
      left: "2300px",
      width: "500px",
      bottom: "0%"
    },
    {
      src: "https://source.unsplash.com/1600x900/?graduation",
      left: "3200px",
      width: "500px",
      bottom: "0%"
    },
    {
      src: "https://source.unsplash.com/1600x900/?graduation",
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

export default AyushRoad;