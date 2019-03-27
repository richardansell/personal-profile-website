import React, {Component} from "react";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MobileStepper,
    Tooltip,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {isWidthUp} from "@material-ui/core/withWidth";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ProfilePicture from "../utils/media/profile-picture.jpg";
import ProfilePictureWp from "./media/profile-picture.webp";
import {Icon} from "@iconify/react";

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
        maxHeight: "100%",
        maxWidth: "100%",
        width: "auto"
    },
    cardMediaVideo: {
        height: 200
    },
    cardMediaSection: {
        height: 200,
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
    iconContainer: {
        display: "flex",
        justifyContent: "start",
        flexWrap: "wrap",
        paddingTop: 20
    }
});

export const mediaType = {IMAGE: 0, VIDEO: 1};

class CardMediaSingle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            dialogImage: null,
            dialogImageAlt: null,
            name: "Richard Ansell",
            showSelectedImageDialog: false
        };
    }

    componentDidMount() {
        this.props.setComponentMeasurements();
    }

    handleNext = mediaLength => this.setState(prevState => ({activeStep: prevState.activeStep !== mediaLength - 1 ? prevState.activeStep + 1 : 0}));

    handleBack = mediaLength => this.setState(prevState => ({activeStep: prevState.activeStep === 0 ? mediaLength - 1 : prevState.activeStep - 1}));

    handleImageDialogClose = () => this.setState({showSelectedImageDialog: false});

    openLink = url => window.open(url, "", "", false);

    setMobileStepper = (activeStep, media, isCycleOnlyMedia, item, theme, widthSmUp) => {
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
                        onClick={() => this.handleBack(isCycleOnlyMedia ? item.cardMedia.length : media.items.length)}
                        size="small">
                        {theme.direction === 'rtl' ? <KeyboardArrowRight/> :
                            <KeyboardArrowLeft/>}
                        {widthSmUp ? "Back" : null}
                    </Button>
                }
                nextButton={
                    <Button
                        onClick={() => this.handleNext(isCycleOnlyMedia ? item.cardMedia.length : media.items.length)}
                        size="small">
                        {widthSmUp ? "Next" : null}
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> :
                            <KeyboardArrowRight/>}
                    </Button>
                }
                position="static"
                steps={isCycleOnlyMedia ? item.cardMedia.length : media.items.length}
                variant={widthSmUp && variant ? "dots" : "progress"}/>
        )
    };

    render() {
        const widthSmUp = isWidthUp("sm", this.props.width);
        const {classes, cycleOnlyMediaPosition, media, isCycleOnlyMedia, square, theme} = this.props;
        const {activeStep, dialogImage, dialogImageAlt, name, showSelectedImageDialog} = this.state;
        const item = isCycleOnlyMedia ? media.items[cycleOnlyMediaPosition] : media.items[activeStep];
        return (
            <div>
                <Dialog
                    aria-labelledby="image-dialog-title" maxWidth="md"
                    onBackdropClick={this.handleImageDialogClose}
                    open={showSelectedImageDialog} transitionDuration={{enter: 0, exit: 500}}>
                    <DialogTitle id="image-dialog-title">
                        {dialogImageAlt}
                    </DialogTitle>
                    <DialogContent>
                        <img alt={dialogImageAlt} height="auto" src={dialogImage} width="100%"/>
                    </DialogContent>
                    <DialogActions className={classes.dialogAction}>
                        <Button color="secondary" onClick={this.handleImageDialogClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

                <Card className={widthSmUp ? classes.cardSmUp : classes.cardSmDown} elevation={6} square={square}>
                    {widthSmUp ?
                        <CardHeader
                            avatar={
                                <Avatar aria-label={name}>
                                    <Avatar alt={name} src={ProfilePicture}
                                            srcSet={`${ProfilePictureWp}, ${ProfilePicture}`}/>
                                </Avatar>
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
                                <CardMedia
                                    alt={item.cardMedia[activeStep].alt}
                                    className={classes.cardMediaVideo}
                                    component="iframe"
                                    image={item.cardMedia[activeStep].media}
                                />
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
                                            dialogImage: item.cardMedia[activeStep].media,
                                            dialogImageAlt: item.cardMedia[activeStep].alt,
                                            showSelectedImageDialog: true
                                        })}
                                    />
                                </picture>
                            :
                            item.cardMedia.mediaType === mediaType.VIDEO ?
                                <CardMedia
                                    alt={item.cardMedia.alt}
                                    className={classes.cardMediaVideo}
                                    component="iframe"
                                    image={item.cardMedia.media}
                                />
                                :
                                <picture>
                                    <source type="image/webp" srcSet={item.cardMedia.mediaWp}/>
                                    <source type={item.cardMedia.originalMediaType} srcSet={item.cardMedia.media}/>
                                    <CardMedia
                                        alt={item.cardMedia.alt}
                                        className={classes.cardMedia}
                                        component="img"
                                        image={item.cardMedia.media}
                                        onClick={() => this.setState({
                                            dialogImage: item.cardMedia.media,
                                            dialogImageAlt: item.cardMedia.alt,
                                            showSelectedImageDialog: true
                                        })}
                                    />
                                </picture>
                        }
                    </div>

                    {isCycleOnlyMedia && this.setMobileStepper(activeStep, media, isCycleOnlyMedia, item, theme, widthSmUp)}

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
                                    <Tooltip key={iconButton.key} title={iconButton.label}>
                                        <Avatar className={classes.avatarBackground}
                                                onClick={() => this.openLink(iconButton.link)}>
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
                                onClick={() => this.openLink(item.cardAction.link)}
                                size="small">
                            {item.cardAction.linkButtonText}
                        </Button>}
                    </CardActions>

                    {!isCycleOnlyMedia && this.setMobileStepper(activeStep, media, isCycleOnlyMedia, item, theme, widthSmUp)}
                </Card>
            </div>
        )
    }

}

export default withWidth()(withStyles(styles, {withTheme: true})(CardMediaSingle));