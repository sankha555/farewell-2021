import React, { useState, useEffect, useRef } from 'react';
import '../../Road/Road.css';
import Doodle from '../../Doodle/Doodle';
import Milestone from '../../Milestone/Milestone';
import CustomModal from '../../Modal/Modal';
import Landing from '../../LandingPage/Landing';
import Rotate from '../../Rotate/Rotate'
import BackgroundImage from '../../BackgroundImage/BackgroundImage'
import Image from '../../Images/Images'

function YashdeepRoad() {
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
            milestoneText: "First Year",
            // imagePath: "https://source.unsplash.com/1600x900/?graduation",
            modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
            modalTitle: "Story",
            index: 0

        },
        {
            milestoneText: "Second Year",
            // imagePath: "https://source.unsplash.com/1600x900/?graduation",
            modalText: "Story title",
            modalTitle: "Story",
            index: 1

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
            src: "https://i.ibb.co/n6vF5bP/3.jpg",
            left: "500px",
            width: "500px",
            bottom: "0%"
        },
        {
            src: "https://i.ibb.co/CQVRH63/4.jpg",
            left: "1400px",
            width: "300px",
            bottom: "0%"
        },
        {
            src: "https://i.ibb.co/vHKpkVt/1.jpg",
            left: "2300px",
            width: "500px",
            bottom: "0%"
        },
        {
            src: "https://i.ibb.co/ZVDV2Rd/2.jpg",
            left: "3200px",
            width: "300px",
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


export default YashdeepRoad;