import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import BgVideoOne from "./media/background-video-one.mp4";
import BgVideoTwo from "./media/background-video-two.mp4";
import BgVideoThree from "./media/background-video-three.mp4";
import BgVideoFour from "./media/background-video-four.mp4";
import BgVideoFive from "./media/background-video-five.mp4";
import BgVideoSix from "./media/background-video-six.mp4";
import BgVideoSeven from "./media/background-video-seven.mp4";
import BgImageFallback from "./media/background-image-fallback.jpg";

const styles = () => ({
    backgroundContainer: {
        height: "500px",
        marginLeft: "-10px",
        marginRight: "-10px",
        overflow: "hidden",
        position: "relative",
        top: "-10px"
    },
    backgroundVideo: {
        bottom: "50%",
        height: "auto",
        minHeight: "100%",
        minWidth: "100%",
        overflow: "hidden",
        position: "absolute",
        right: "50%",
        transform: "translateX(50%) translateY(50%)",
        webkitTransform: "translateX(50%) translateY(50%)",
        width: "auto"
    },
    backgroundImageFallback: {
        background: "url(" + BgImageFallback + ") center",
        backgroundSize: "cover",
        height: "500px",
        marginLeft: "-10px",
        marginRight: "-10px",
        overflow: "hidden",
        position: "relative",
        top: "-10px"
    }
});

const bgVideos = [BgVideoOne, BgVideoTwo, BgVideoThree, BgVideoFour, BgVideoFive, BgVideoSix, BgVideoSeven];

class BackgroundVideo extends Component {
    render() {
        const {classes} = this.props;
        const chromeDataSavingEnabled = ("connection" in navigator) ? !!(navigator.connection.saveData) : false;
        const videoPosition = new Date().getDay();
        return (
            <div>
                {!chromeDataSavingEnabled ?
                    <div className={classes.backgroundContainer}>
                        <video autoPlay={true} className={classes.backgroundVideo} controls={false} loop={true}
                               muted={true}>
                            <source src={bgVideos[videoPosition]} type="video/mp4"/>
                        </video>
                    </div> : <div className={classes.backgroundImageFallback}/>}
            </div>
        )
    }
}

export default withStyles(styles)(BackgroundVideo);