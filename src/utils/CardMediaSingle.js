import React, {Component} from "react";
import firebase from "firebase/app";
import "firebase/storage";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    colors,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grow,
    LinearProgress,
    MobileStepper,
    Tooltip,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {isWidthUp} from "@material-ui/core/withWidth";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import BackgroundPlaceholder from "./media/background-placeholder.png";
import ProfilePicture from "../utils/media/profile-picture.jpg";
import ProfilePictureWp from "./media/profile-picture.webp";
import {Icon} from "@iconify/react";
import FileSaver from "file-saver";
import {connect} from "react-redux";
import {setActionMessage} from "../redux/actions";
import {actionMessageType} from "./ActionMessage";

const styles = () => ({
    avatarBackground: {
        "&:hover": {
            backgroundColor: "#fafafa"
        },
        backgroundColor: "#fff",
        borderColor: "#bdbdbd",
        borderStyle: "solid",
        borderWidth: "0.5px",
        cursor: "pointer",
        margin: 3
    },
    cardContentDescription: {
        whiteSpace: "pre-line"
    },
    cardMedia: {
        cursor: "pointer",
        height: "auto",
        margin: "0 auto",
        maxHeight: 200,
        maxWidth: "100%",
        width: "auto"
    },
    cardMediaVideoIframe: {
        height: 200
    },
    cardMediaSection: {
        height: "auto",
        maxHeight: 200
    },
    cardSmDown: {
        maxWidth: 400,
        width: "auto"
    },
    cardSmUp: {
        marginBottom: 5,
        maxWidth: 400,
        width: "auto"
    },
    dialogAction: {
        margin: 15
    },
    dotActive: {
        backgroundColor: colors.blueGrey[900]
    },
    downloadError: {
        color: colors.red[500],
        marginBottom: 15,
        marginLeft: 15
    },
    iconContainer: {
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        paddingTop: 20
    }
});

const mapStateToProps = state => {
    return {touchScreen: state.touchScreen.isTouchScreen};
};

const mapDispatchToProps = dispatch => {
    return {
        setActionMessage: actionMessageContent => dispatch(setActionMessage(actionMessageContent))
    }
};

export const mediaType = {IMAGE: 0, VIDEO: 1};

class CardMediaSingle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            dialogMedia: null,
            downloadError: false,
            downloadErrorText: "An error was encountered while downloading, please try again later",
            downloadRequested: false,
            downloadRequestVariant: "determinate",
            downloadRequestPercentage: 0,
            name: "Richard Ansell",
            showSelectedImageDialog: false
        };
        this.downloadErrorTimer = null;
        this.downloadRequest = null;
    }

    componentDidMount() {
        window.addEventListener("load", this.setIframeSrcs);
        this.props.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.downloadErrorTimer);
        window.removeEventListener("load", this.setIframeSrcs);
    }

    setIframeSrcs = () => {
        let vidDefer = document.getElementsByTagName("iframe");
        for (let i = 0; i < vidDefer.length; i++) {
            if (vidDefer[i].getAttribute("datasrc")) {
                vidDefer[i].setAttribute("src", vidDefer[i].getAttribute("datasrc"));
            }
        }
    };

    setSingleIframeSrc = (mediaItem, isCycleOnlyMedia) => {
        if (isCycleOnlyMedia ? mediaItem.mediaType === mediaType.VIDEO : mediaItem.cardMedia.mediaType === mediaType.VIDEO) {
            let iframe = document.getElementById(isCycleOnlyMedia ? mediaItem.youtubeVideoId : mediaItem.cardMedia.youtubeVideoId);
            if (iframe.getAttribute("datasrc")) iframe.setAttribute("src", iframe.getAttribute("datasrc"));
        }
    };

    handleNext = (media, isCycleOnlyMedia) => this.setState(prevState => ({activeStep: prevState.activeStep !== media.length - 1 ? prevState.activeStep + 1 : 0}), () => {
        this.setSingleIframeSrc(media[this.state.activeStep], isCycleOnlyMedia)
    });

    handleBack = (media, isCycleOnlyMedia) => this.setState(prevState => ({activeStep: prevState.activeStep === 0 ? media.length - 1 : prevState.activeStep - 1}), () => {
        this.setSingleIframeSrc(media[this.state.activeStep], isCycleOnlyMedia)
    });

    handleImageDialogClose = () => this.setState({dialogMedia: null, showSelectedImageDialog: false});

    handleLinkClick = (isTouchScreen, actionMessageType, link, message) => {
        if (!isTouchScreen) {
            window.open(link, "", "", false);
        } else {
            this.props.setActionMessage({
                actionMessageType: actionMessageType,
                link: link,
                message: message,
                open: true
            });
        }
    };

    setMobileStepper = (activeStep, classes, media, isCycleOnlyMedia, item, theme, widthLgUp) => {
        if (isCycleOnlyMedia) {
            if (item.cardMedia.length < 2) return null;
        } else {
            if (media.items.length < 2) return null;
        }
        const variant = isCycleOnlyMedia ? item.cardMedia.length <= 20 : media.items.length <= 20;
        return (
            <MobileStepper
                activeStep={activeStep}
                backButton={
                    <Button
                        onClick={() => isCycleOnlyMedia ? this.handleBack(item.cardMedia, isCycleOnlyMedia) : this.handleBack(media.items, isCycleOnlyMedia)}
                        size="small">
                        {theme.direction === "rtl" ? <KeyboardArrowRight/> :
                            <KeyboardArrowLeft/>}
                        {widthLgUp ? "Back" : null}
                    </Button>
                }
                classes={{"dotActive": classes.dotActive}}
                LinearProgressProps={{color: "secondary"}}
                nextButton={
                    <Button
                        onClick={() => isCycleOnlyMedia ? this.handleNext(item.cardMedia, isCycleOnlyMedia) : this.handleNext(media.items, isCycleOnlyMedia)}
                        size="small">
                        {widthLgUp ? "Next" : null}
                        {theme.direction === "rtl" ? <KeyboardArrowLeft/> :
                            <KeyboardArrowRight/>}
                    </Button>
                }
                position="static"
                steps={isCycleOnlyMedia ? item.cardMedia.length : media.items.length}
                variant={widthLgUp && variant ? "dots" : "progress"}
            />
        )
    };

    downloadApk = cardActionContent => {
        this.setState({downloadRequested: true}, () => {
            firebase.storage().ref().child(cardActionContent.link).getDownloadURL().then(url => {
                this.downloadRequest = new XMLHttpRequest();
                this.downloadRequest.addEventListener("load", () => this.downloadCompleted(this.downloadRequest, cardActionContent.link));
                this.downloadRequest.addEventListener("progress", this.updateDownloadProgress);
                this.downloadRequest.addEventListener("error", this.downloadError);
                this.downloadRequest.addEventListener("abort", this.downloadAborted);
                this.downloadRequest.responseType = "blob";
                this.downloadRequest.open("GET", url);
                this.downloadRequest.send();
            }).catch(error => {
                if (error.code === "storage/quota-exceeded") {
                    window.open(cardActionContent.backupDownloadLink, "", "", false);
                } else {
                    this.downloadError();
                }
            });
        });
    };

    updateDownloadProgress = downloadRequest => {
        if (downloadRequest.lengthComputable) {
            this.setState({downloadRequestPercentage: downloadRequest.loaded / downloadRequest.total * 100});
        } else {
            this.setState({downloadRequestVariant: "indeterminate"});
        }
    };

    downloadError = () => this.setState({
        downloadError: true,
        downloadRequested: false,
        downloadRequestVariant: "determinate",
        downloadRequestPercentage: 0
    }, () => {
        this.downloadErrorTimer = setTimeout(() => {
            this.setState({downloadError: false}, () => this.downloadRequest = null);
        }, 3000);
    });

    downloadAborted = () => this.setState({
        downloadRequested: false,
        downloadRequestVariant: "determinate",
        downloadRequestPercentage: 0
    }, () => this.downloadRequest = null);

    downloadCompleted = (download, fileName) => this.setState({
        downloadRequested: false,
        downloadRequestVariant: "determinate",
        downloadRequestPercentage: 0
    }, () => {
        FileSaver(download.response, fileName, {autoBOM: true});
        this.downloadRequest = null
    });

    render() {
        const {LEARN_MORE} = actionMessageType;
        const widthSmUp = isWidthUp("sm", this.props.width);
        const widthLgUp = isWidthUp("lg", this.props.width);
        const {classes, cycleOnlyMediaPosition, media, isCycleOnlyMedia, square, theme, touchScreen} = this.props;
        const {activeStep, dialogMedia, downloadError, downloadErrorText, downloadRequested, downloadRequestPercentage, downloadRequestVariant, name, showSelectedImageDialog} = this.state;
        const item = isCycleOnlyMedia ? media.items[cycleOnlyMediaPosition] : media.items[activeStep];
        return (
            <div>
                {dialogMedia !== null && <Dialog
                    aria-labelledby="image-dialog-title" maxWidth="md"
                    onBackdropClick={this.handleImageDialogClose}
                    open={showSelectedImageDialog} transitionDuration={{enter: 0, exit: 500}}>
                    <DialogTitle id="image-dialog-title">
                        {dialogMedia.alt}
                    </DialogTitle>
                    <DialogContent>
                        <picture>
                            <source type="image/webp" srcSet={dialogMedia.mediaWp}/>
                            <source type={dialogMedia.originalMediaType} srcSet={dialogMedia.media}/>
                            <img alt={dialogMedia.alt} height="auto" src={dialogMedia.media} width="100%"/>
                        </picture>
                    </DialogContent>
                    <DialogActions className={classes.dialogAction}>
                        <Button color="secondary" onClick={this.handleImageDialogClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>}

                <Grow in={true} timeout={{enter: 3000}}>
                    <Card className={widthSmUp ? classes.cardSmUp : classes.cardSmDown} elevation={6} square={square}>
                        {widthSmUp ?
                            <CardHeader
                                avatar={
                                    <picture>
                                        <source type="image/webp" srcSet={ProfilePictureWp}/>
                                        <source type="image/jpg" srcSet={ProfilePicture}/>
                                        <Avatar alt={name} src={ProfilePicture}/>
                                    </picture>
                                }
                                title={media.cardTitle}
                                titleTypographyProps={{color: "secondary", variant: "h6"}}
                            />
                            :
                            <CardHeader
                                title={media.cardTitle}
                                titleTypographyProps={{color: "secondary", variant: "h6"}}
                            />
                        }

                        <div className={classes.cardMediaSection}>
                            {isCycleOnlyMedia ?
                                item.cardMedia[activeStep].mediaType === mediaType.VIDEO ?
                                    <CardMedia alt={item.cardMedia[activeStep].alt}
                                               className={classes.cardMediaVideoIframe} component="iframe"
                                               datasrc={`${item.cardMedia[activeStep].media}?rel=0`}
                                               id={item.cardMedia[activeStep].youtubeVideoId}
                                               image={BackgroundPlaceholder} src=""/>
                                    :
                                    <picture>
                                        <source type="image/webp" srcSet={item.cardMedia[activeStep].mediaWp}/>
                                        <source type={item.cardMedia[activeStep].originalMediaType}
                                                srcSet={item.cardMedia[activeStep].media}/>
                                        <CardMedia
                                            alt={item.cardMedia[activeStep].alt}
                                            className={classes.cardMedia}
                                            component="img"
                                            image={item.cardMedia[activeStep].media}
                                            onClick={() => this.setState({
                                                dialogMedia: item.cardMedia[activeStep],
                                                showSelectedImageDialog: true
                                            })}
                                        />
                                    </picture>
                                :
                                item.cardMedia.mediaType === mediaType.VIDEO ?
                                    <CardMedia alt={item.cardMedia.alt} className={classes.cardMediaVideoIframe}
                                               component="iframe" datasrc={`${item.cardMedia.media}?rel=0`}
                                               id={item.cardMedia.youtubeVideoId}
                                               image={BackgroundPlaceholder} src=""/>
                                    :
                                    <picture>
                                        <source type="image/webp" srcSet={item.cardMedia.mediaWp}/>
                                        <source type={item.cardMedia.originalMediaType}
                                                srcSet={item.cardMedia.media}/>
                                        <CardMedia
                                            alt={item.cardMedia.alt}
                                            className={classes.cardMedia}
                                            component="img"
                                            image={item.cardMedia.media}
                                            onClick={() => this.setState({
                                                dialogMedia: item.cardMedia,
                                                showSelectedImageDialog: true
                                            })}
                                        />
                                    </picture>
                            }
                        </div>

                        {isCycleOnlyMedia && this.setMobileStepper(activeStep, classes, media, isCycleOnlyMedia, item, theme, widthLgUp)}

                        <CardContent>
                            <Typography color="secondary" component="h2" gutterBottom variant="h5">
                                {item.cardContent.title}
                            </Typography>
                            <Typography className={classes.cardContentDescription} component="p">
                                {item.cardContent.description}
                            </Typography>
                            {item.cardAction.iconButtonsAvailable &&
                            <div className={classes.iconContainer}>
                                {item.cardAction.iconButtons.map(iconButton => {
                                    return (
                                        <Tooltip disableHoverListener={touchScreen} disableFocusListener={touchScreen}
                                                 disableTouchListener={touchScreen} key={iconButton.key}
                                                 title={iconButton.label}>
                                            <Avatar className={classes.avatarBackground}
                                                    onClick={() => this.handleLinkClick(touchScreen, LEARN_MORE, iconButton.link, iconButton.label)}>
                                                {iconButton.isCustomIcon ?
                                                    iconButton.icon :
                                                    <Icon color={iconButton.color} icon={iconButton.icon}/>
                                                }
                                            </Avatar>
                                        </Tooltip>
                                    );
                                })}
                            </div>}
                        </CardContent>

                        <CardActions>
                            {item.cardAction.link !== null &&
                            <Button color="secondary"
                                    onClick={() => item.cardAction.isDownloadLink ? !downloadRequested ? this.downloadApk(item.cardAction) : this.downloadRequest.abort() : window.open(item.cardAction.link, "", "", false)}
                                    size="small">
                                {!downloadRequested ? item.cardAction.linkButtonText : "Cancel download"}
                            </Button>}
                        </CardActions>

                        {downloadError &&
                        <Typography className={classes.downloadError} variant="caption">
                            {downloadErrorText}
                        </Typography>}

                        {downloadRequested && <LinearProgress color="secondary" value={downloadRequestPercentage}
                                                              variant={downloadRequestVariant}/>}

                        {!isCycleOnlyMedia && this.setMobileStepper(activeStep, classes, media, isCycleOnlyMedia, item, theme, widthLgUp)}
                    </Card>
                </Grow>
            </div>
        )
    }

}

export default withWidth()(withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(CardMediaSingle)));