import React, {Component} from 'react';
import './BackgroundVideo.css';
import BgVideoOne from "./media/background-video-one.mp4";
import BgVideoTwo from "./media/background-video-two.mp4";
import BgVideoThree from "./media/background-video-three.mp4";
import BgVideoFour from "./media/background-video-four.mp4";
import BgVideoFive from "./media/background-video-five.mp4";
import BgVideoSix from "./media/background-video-six.mp4";
import BgVideoSeven from "./media/background-video-seven.mp4";

const bgVideos = [BgVideoOne, BgVideoTwo, BgVideoThree, BgVideoFour, BgVideoFive, BgVideoSix, BgVideoSeven];

class BackgroundVideo extends Component {
    render() {
        const chromeDataSavingEnabled = ("connection" in navigator) ? !!(navigator.connection.saveData) : false;
        const videoPosition = new Date().getDay();
        return (
            <div>
                {!chromeDataSavingEnabled ?
                    <div className="bg-container">
                        <video autoPlay={true} controls={false} id="bg-video" loop={true} muted={true}>
                            <source src={bgVideos[videoPosition]} type="video/mp4"/>
                        </video>
                    </div> : <div className="bg-container bg-image-fallback"/>}
            </div>
        )
    }
}

export default BackgroundVideo;