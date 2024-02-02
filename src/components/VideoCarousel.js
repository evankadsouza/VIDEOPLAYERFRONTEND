import "./VideoCarousel.css";
import React from "react";
import { Carousel } from "react-bootstrap";
import Vid1 from "./videos/vid1.mp4";
import Vid2 from "./videos/vid2.mp4";
import Vid3 from "./videos/vid3.mp4";
import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef, useEffect } from 'react';
// import Controls from './Controls.jsx';
import { formatTime } from "./format";


const VideoCarousel = () => {
  
const [videoState, setVideoState] = useState({
  playing: true,
  muted: false,
  volume: 0.5,
  played: 0,
  seeking: false,
  Buffer : true
});
const videoPlayerRef = useRef(null);//to get the live video time


const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : "00:00";
  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);


//Destructuring the properties from the videoState, assigning to variables 
const {playing} = videoState



const playPauseHandler = () => {
  //plays and pause the video (toggling)
  setVideoState({ ...videoState, playing: !videoState.playing });//false/true depending on play/pause
  // currentTime = videoPlayerRef.current.getCurrentTime();
  
};
console.log(currentTime);


  const videoProperties = [//hard coded data
    {
      id: 1,
      title: "Video 1",
      src: Vid1,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: Vid2,
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: Vid3,
      credit: "Video by cottonbro from Pexels",
    },
  ];

  return (
    <div className="App">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                ref={videoPlayerRef}
                url={videoObj.src}
                playing={playing}
                controls={true}
              />
                  {/*<Controls onPlayPause={playPauseHandler} playing={playing}/> */}           
            </Carousel.Item>
          );
        })}
      </Carousel>
      
    </div>
  );
};



export default VideoCarousel;
