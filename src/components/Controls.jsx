import React from "react";
import { makeStyles, Slider, withStyles, Button,  Tooltip,  Popover,Grid

} from "@material-ui/core";
import {
 FastForward,
 FastRewind,
 Pause,
 PlayArrow,
 SkipNext,
  VolumeUp,
} from "@material-ui/icons";
import "./Controls.css";

const useStyles = makeStyles({
    volumeSlider: {
      width: "100px",
      color: "#9556CC",
    },
   
    bottomIcons: {
      color: "#999",
      padding: "12px 8px",
    
   
    "&:hover": {
        color: "#fff",
      },
    },
   });
   
   const PrettoSlider = withStyles({
    root: {
      height: "20px",
      color: "#9556CC",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: "#9556CC",
      border: "2px solid currentColor",
      marginTop: -3,
      marginLeft: -12,
    "&:focus, &:hover, &$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
    },
    track: {
      height: 5,
      borderRadius: 4,
      width: "100%",
    },
    rail: {
      height: 5,
      borderRadius: 4,
    },
   })(Slider);

   const Controls = ({
    onPlayPause,
    playing,
    onRewind,
    onForward,
    played,
    onSeek,
    onSeekMouseUp,
    onVolumeChangeHandler,
    onVolumeSeekUp,
    volume,
    mute,
    onMute,
    duration,
    currentTime,
    onMouseSeekDown,
    controlRef
  }) => {
    const classes = useStyles();
    return(
<div>

<div className="top_container">
   <h2>Video PLayer</h2>
 </div>

<div className="mid__container">
<div className="icon__btn">
 <FastRewind fontSize="medium" />
</div>

<div className="icon__btn"  onClick={onPlayPause}>
    {playing?(<Pause fontSize="medium" />):(<PlayArrow fontSize="medium" />)}
</div>

<div className="icon__btn">
<FastForward fontSize="medium" />
</div>
</div>

<div className="bottom__container">
 <div className="slider__container">
   <PrettoSlider />
 </div>
    </div>

</div>
    );
}

export default Controls;
