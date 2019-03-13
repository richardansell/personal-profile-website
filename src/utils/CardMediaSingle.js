import React, {Component} from "react";
import {
    Avatar,
    Button,
    Card,
    CardActionArea,
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
        height: 250,
        maxHeight: 250
    },
    cardSmDown: {
        marginTop: 30,
        width: "auto",
    },
    cardSmUp: {
        marginTop: 30,
        maxWidth: 400,
        width: 400
    },
    dialogAction: {
        margin: 15
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap'
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

    handleNext = media => this.setState(prevState => ({activeStep: prevState.activeStep !== media.count - 1 ? prevState.activeStep + 1 : 0}));

    handleBack = media => this.setState(prevState => ({activeStep: prevState.activeStep === 0 ? media.count - 1 : prevState.activeStep - 1}));

    handleImageDialogClose = () => this.setState({showSelectedImageDialog: false});

    openLink = url => window.open(url, "", "", false);

    render() {
        const widthSmUp = isWidthUp("sm", this.props.width);
        const {classes, theme, media} = this.props;
        const {activeStep, dialogImage, dialogImageAlt, name, showSelectedImageDialog} = this.state;
        const item = media.items[activeStep];
        return (
            <div>
                <Dialog
                    aria-labelledby="image-dialog-title"
                    onBackdropClick={this.handleImageDialogClose}
                    open={showSelectedImageDialog}
                    transitionDuration={{enter: 0, exit: 500}}>
                    <DialogTitle id="image-dialog-title">
                        {dialogImageAlt}
                    </DialogTitle>
                    <DialogContent>
                        <img alt={dialogImageAlt} height="100%" src={dialogImage} width="100%"/>
                    </DialogContent>
                    <DialogActions className={classes.dialogAction}>
                        <Button color="secondary" onClick={this.handleImageDialogClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

                <Card className={widthSmUp ? classes.cardSmUp : classes.cardSmDown}>
                    {widthSmUp ?
                        <CardHeader
                            avatar={
                                <Avatar aria-label={name}>
                                    <Avatar alt={name} src={ProfilePicture}/>
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
                    <CardActionArea>
                        {item.cardMedia.mediaType === mediaType.VIDEO ?
                            <CardMedia
                                alt={item.cardMedia.alt}
                                className={classes.cardMedia}
                                component="iframe"
                                image={item.cardMedia.media}
                                title={item.cardMedia.title}
                            />
                            :
                            <CardMedia
                                alt={item.cardMedia.alt}
                                className={classes.cardMedia}
                                image={item.cardMedia.media}
                                onClick={() => this.setState({
                                    dialogImage: item.cardMedia.media,
                                    dialogImageAlt: item.cardMedia.alt,
                                    showSelectedImageDialog: true
                                })}
                                title={item.cardMedia.title}
                            />
                        }
                    </CardActionArea>
                    <CardContent>
                        <Typography color="secondary" component="h2" gutterBottom variant="h5">
                            {item.cardContent.title}
                        </Typography>
                        <Typography className={classes.cardContentDescription} component="p">
                            {item.cardContent.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {item.cardAction.link !== null &&
                        <Button color="secondary"
                                onClick={() => this.openLink(item.cardAction.link)}
                                size="small">
                            {item.cardAction.link !== null}
                        </Button>}

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
                        </div>
                        }

                    </CardActions>
                    {media.count > 1 &&
                    <MobileStepper
                        activeStep={activeStep}
                        backButton={
                            <Button onClick={() => this.handleBack(media)} size="small">
                                {theme.direction === 'rtl' ? <KeyboardArrowRight/> :
                                    <KeyboardArrowLeft/>}
                                {widthSmUp ? "Back" : null}
                            </Button>
                        }
                        nextButton={
                            <Button onClick={() => this.handleNext(media)}
                                    size="small">
                                {widthSmUp ? "Next" : null}
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> :
                                    <KeyboardArrowRight/>}
                            </Button>
                        }
                        position="static"
                        steps={media.count}
                        variant={widthSmUp ? "dots" : null}/>}
                </Card>
            </div>
        )
    }

}

export default withWidth()(withStyles(styles, {withTheme: true})(CardMediaSingle));