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
      milestoneText: "First Impressions",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Jab unse pehli baar mila tha toh intro mei roughly kuchh aisa bola tha " + "Coding krta hu aur CG laata hu.",
      modalTitle: "Logo ke saath mulakate",
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
      milestoneText: "Fuck Cisco",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Intern tha inka Cisco mei but company mei feel nhi aaya toh 27 lpa ka PPO thukra diya. Reasons sunno: they're in losses, have mass layoffs and are reducing pay, I had rejected their ppo",
      modalTitle: "I don't need you, you need me",
      index: 2

    },
    {
      milestoneText: "Happy Ending",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Born in a massage center in Bangkok Ayush Jhaveri is the boy whose story still seeks a happy ending. He is the man who will come after your job and girl and will definitely succeed in stealing the former.",
      modalTitle: "Happy Ending",
      index: 3

    },
  ];

  const imagesInfo = [
    {
      src: "https://i.ibb.co/C6pfZb5/3.jpg",
      left: "500px",
      width: "300px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/TMpcXby/4.jpg",
      left: "1400px",
      width: "300px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/19SsVyJ/5.jpg",
      left: "2300px",
      width: "300px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/gr1ZkTc/1.jpg",
      left: "3200px",
      width: "300px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/jzBntMh/2.png",
      left: "4100px",
      width: "300px",
      bottom: "0%"
    },
  ]


  return (
    <div>
      {/* <Rotate/> */}

      <div className="roadContainer">
        <div ref={scrollRef} className="road" onWheel={onWheel}>
          <Doodle
            id="moving_doodle"
            move={position}
            doodleImg="https://i.ibb.co/K21kgPV/aysuh-jhaveri-Pics-Art-06-25-10-32-45.png"
            width="180px"
          />


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