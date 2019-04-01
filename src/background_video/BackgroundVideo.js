import React, {Component} from "react";
import firebase from "firebase/app";
import "firebase/storage";
import {connect} from "react-redux";
import {Fade, withStyles} from "@material-ui/core";
import BgImageFallback from "./media/background-image-fallback.jpg";
import BgImageFallbackWp from "./media/background-image-fallback.webp";

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
        backgroundSize: "cover",
        height: "500px",
        marginLeft: "-10px",
        marginRight: "-10px",
        overflow: "hidden",
        position: "relative",
        top: "-10px"
    }
});

const mapStateToProps = state => {
    return {webpSupport: state.webpSupport};
};

const backgroundVideos = ["background-video-one.mp4", "background-video-two.mp4", "background-video-three.mp4",
    "background-video-four.mp4", "background-video-five.mp4", "background-video-six.mp4", "background-video-seven.mp4"];

class BackgroundVideo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            videoDownloadError: null,
            videoReady: false,
            videoUrl: null
        };
        this.downloadVideo(backgroundVideos[new Date().getDay()])
    }

    downloadVideo = fileName => firebase.storage().ref().child(fileName).getDownloadURL()
        .then(backgroundVideoUrl => this.setState({videoReady: true, videoUrl: backgroundVideoUrl}))
        .catch(() => this.setState({videoDownloadError: true}));

    render() {
        const {videoDownloadError, videoReady, videoUrl} = this.state;
        const {classes, webpSupport} = this.props;
        const chromeDataSavingEnabled = ("connection" in navigator) ? !!(navigator.connection.saveData) : false;
        const fallbackBgImage = chromeDataSavingEnabled || videoDownloadError ? webpSupport.lossless ? BgImageFallbackWp : BgImageFallback : null;
        return (
            <div>
                {!chromeDataSavingEnabled && !videoDownloadError ?
                    videoReady && <Fade in={true} timeout={{enter: 5000}}>
                        <div className={classes.backgroundContainer}>
                            <video autoPlay={true} className={classes.backgroundVideo} controls={false} loop={true}
                                   muted={true}>
                                <source src={videoUrl} type="video/mp4"/>
                            </video>
                        </div>
                    </Fade> : <Fade in={true} timeout={{enter: 5000}}>
                        <div className={classes.backgroundImageFallback}
                             style={{background: "url(" + fallbackBgImage + ") center"}}/>
                    </Fade>}
            </div>
        )
    }
}

export default withStyles(styles)(connect(mapStateToProps)(BackgroundVideo));