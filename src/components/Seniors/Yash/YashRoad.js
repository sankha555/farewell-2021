import React, { useState, useEffect, useRef } from 'react';
import '../../Road/Road.css';
import Doodle from '../../Doodle/Doodle';
import Milestone from '../../Milestone/Milestone';
import CustomModal from '../../Modal/Modal';
import Landing from '../../LandingPage/Landing';
import Rotate from '../../Rotate/Rotate'
import BackgroundImage from '../../BackgroundImage/BackgroundImage'
import Image from '../../Images/Images'

function YashRoad() {
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
      milestoneText: "Sports freak",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Hockey me Gold medal in BOSM 2017(maybe akele khele honge :P), Bronze in bosm 2018.",
      modalTitle: "Khel kood me number 1",
      index: 0

    },
    {
      milestoneText: "Ghotness",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Ye aadmi ne EG itna phoda ki saakshaat Kamlesh Kumar ko inke paaas aana pada EG sikhne.",
      modalTitle: "Saannnppp",
      index: 1

    },
    {
      milestoneText: "Love life",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "Gave up his girl friend kyuke usne uski choco.pie khayi bina puche. Cheated on his girlfriend just to get her to show up at his house and reveal everything to his parents.",
      modalTitle: "Dominance mex",
      index: 2

    },
    {
      milestoneText: "LafdaBazi",
      // imagePath: "https://source.unsplash.com/1600x900/?graduation",
      modalText: "He has a knack of taking up fights with supris. Ends up getting belted by his parents. Also likes to jerk off in his bucket, dont know for what.",
      modalTitle: "Manliness to dikhani padti he",
      index: 3

    },
  ];

  const imagesInfo = [
    {
      src: "https://i.ibb.co/r4ptFdr/2.jpg",
      left: "500px",
      width: "500px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/VH6Sy6R/3.jpg",
      left: "1400px",
      width: "500px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/WD9J3qg/4.jpg",
      left: "2300px",
      width: "400px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/q9Tqkm1/5.jpg",
      left: "3200px",
      width: "500px",
      bottom: "0%"
    },
    {
      src: "https://i.ibb.co/BCWBtS9/1.jpg",
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
          <Doodle id="moving_doodle" move={position} doodleImg="https://i.ibb.co/wM08hPy/New2-1.png" />


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


export default YashRoad;