import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    Avatar,
    Button,
    colors,
    createMuiTheme,
    Grid,
    MuiThemeProvider,
    Paper,
    Slide,
    Tooltip,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {isWidthDown} from "@material-ui/core/withWidth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGithub as GithubIcon,
    faLinkedinIn as LinkedInIcon,
    faStackOverflow as StackOverflowIcon
} from "@fortawesome/free-brands-svg-icons";
import {setActionMessage, updateAbout} from "../redux/actions";
import ProfilePicture from "../utils/media/profile-picture.jpg";
import ProfilePictureWp from "../utils/media/profile-picture.webp";
import {actionMessageType} from "../utils/ActionMessage";

const styles = theme => ({
    border: {
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth: "1px"
    },
    emailHover: {
        cursor: "pointer"
    },
    githubIconHover: {
        "&:hover": {
            color: "#6e5494"
        },
        color: colors.blueGrey[900],
        cursor: "pointer",
        padding: 8
    },
    locationHover: {
        cursor: "pointer"
    },
    linkedInIconHover: {
        "&:hover": {
            color: "#0077B5"
        },
        color: colors.blueGrey[900],
        cursor: "pointer",
        padding: 8
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4
    },
    stackOverflowIconHover: {
        "&:hover": {
            color: "#E5853D"
        },
        color: colors.blueGrey[900],
        cursor: "pointer",
        padding: 8
    }
});

const tooltipCustomTheme = createMuiTheme({
    overrides: {
        MuiTooltip: {
            tooltip: {
                fontSize: "1em",
                color: "white",
                backgroundColor: colors.blueGrey[900]
            }
        }
    },
    typography: {
        "fontFamily": "\"Montserrat\", sans-serif",
        useNextVariants: true
    }
});

const mapStateToProps = state => {
    return {navigation: state.navigation, touchScreen: state.touchScreen.isTouchScreen};
};

const mapDispatchToProps = dispatch => {
    return {
        updateAbout: dimensions => dispatch(updateAbout(dimensions)),
        setActionMessage: actionMessageContent => dispatch(setActionMessage(actionMessageContent))
    }
};

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Richard Ansell",
            title: "Android / Front End Developer",
            githubUrl: "https://github.com/richardansell",
            linkedInUrl: "https://www.linkedin.com/in/ransell/",
            stackOverflowUrl: "https://stackoverflow.com/users/5955426/richard-ansell",
            introduction: "Hi, I'm Richard! I'm an Android and front-end web developer with a passion for all things tech. Check out my portfolio and other info I've shared about myself. Please also feel free to reach out by filling out my short contact form below.",
            location: "Wolverhampton, United Kingdom",
            email: "richard.ansell@bath.edu",
            toolTipSelected: false,
            toolTipCopyEmailInitial: "Click to copy email",
            toolTipCopyEmailSuccess: "Email copied!",
        };
        this.aboutRef = React.createRef();
        this.toolTipCopyEmailTimer = null;
        this.resizeEventTimer = null;
    }

    componentDidMount() {
        this.setComponentMeasurements();
        window.addEventListener("resize", this.resizeEvent);
    }

    resizeEvent = () => {
        clearTimeout(this.resizeEventTimer);
        this.resizeEventTimer = setTimeout(() => {
            this.setComponentMeasurements();
        }, 250);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.navigation.aboutComponent.height !== this.aboutRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.toolTipCopyEmailTimer);
        clearTimeout(this.resizeEventTimer);
        window.removeEventListener("resize", this.resizeEvent);
    }

    setComponentMeasurements = () => {
        const height = this.aboutRef.current.scrollHeight;
        this.props.updateAbout({height});
    };

    scrollToContactForm = () => {
        const {contactComponent} = this.props.navigation;
        window.scrollTo({
            top: contactComponent.distanceToTop,
            left: 0,
            behavior: 'smooth'
        });
    };

    handleEmailCopy = (isTouchScreen, actionMessageType, event, message) => {
        if (!isTouchScreen) {
            this.setState({toolTipSelected: true});
            const tempTextArea = document.createElement("textarea");
            tempTextArea.innerText = event.nativeEvent.target.innerText;
            document.body.appendChild(tempTextArea);
            tempTextArea.select();
            document.execCommand("copy");
            tempTextArea.remove();
            this.toolTipCopyEmailTimer = setTimeout(() => {
                this.setState({toolTipSelected: false})
            }, 1000);
        } else {
            this.props.setActionMessage({
                actionMessageType: actionMessageType,
                copyText: event.nativeEvent.target.innerText,
                message: message,
                open: true
            });
        }
    };

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

    render() {
        const {classes, touchScreen} = this.props;
        const {VISIT, COPY} = actionMessageType;
        const {name, githubUrl, linkedInUrl, stackOverflowUrl, title, introduction, location, toolTipSelected, toolTipCopyEmailSuccess, toolTipCopyEmailInitial, email} = this.state;
        const widthSmDown = isWidthDown("sm", this.props.width);
        const avatarStyle = {
            height: widthSmDown ? 100 : 200,
            width: widthSmDown ? 100 : 200
        };
        return (
            <Slide direction="down" in={true} timeout={{enter: 1500}}>
                <div className={classes.border} ref={this.aboutRef}>
                    <Paper className={classes.paper} square={true}>
                        <Grid alignItems="center" container justify="center" spacing={24}>
                            <Grid item md={5}>
                                <Grid alignItems="center" container direction="column">
                                    <Grid item xs={12}>
                                        <picture>
                                            <source type="image/webp" srcSet={ProfilePictureWp}/>
                                            <source type="image/jpg" srcSet={ProfilePicture}/>
                                            <Avatar alt={name} src={ProfilePicture} style={avatarStyle}/>
                                        </picture>
                                    </Grid>
                                    <Grid item xs={12}>


                                        <Tooltip disableHoverListener={touchScreen} disableFocusListener={touchScreen}
                                                 disableTouchListener={touchScreen} title="Github">
                                            <FontAwesomeIcon className={classes.githubIconHover}
                                                             icon={GithubIcon}
                                                             onClick={() => this.handleLinkClick(touchScreen, VISIT, githubUrl, "Github profile")}
                                                             size="2x"/>
                                        </Tooltip>

                                        <Tooltip disableHoverListener={touchScreen} disableFocusListener={touchScreen}
                                                 disableTouchListener={touchScreen} title="LinkedIn">
                                            <FontAwesomeIcon className={classes.linkedInIconHover}
                                                             icon={LinkedInIcon}
                                                             onClick={() => this.handleLinkClick(touchScreen, VISIT, linkedInUrl, "LinkedIn profile")}
                                                             size="2x"/>
                                        </Tooltip>

                                        <Tooltip disableHoverListener={touchScreen} disableFocusListener={touchScreen}
                                                 disableTouchListener={touchScreen} title="Stack Overflow">
                                            <FontAwesomeIcon className={classes.stackOverflowIconHover}
                                                             icon={StackOverflowIcon}
                                                             onClick={() => this.handleLinkClick(touchScreen, VISIT, stackOverflowUrl, "Stack Overflow profile")}
                                                             size="2x"/>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={7}>
                                <Grid alignItems={widthSmDown ? "center" : "flex-start"} container spacing={24}>
                                    <Grid item style={{textAlign: widthSmDown ? "center" : "left"}} xs={12}>
                                        <Typography color="secondary" variant={widthSmDown ? "h5" : "h4"}>
                                            {name}
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{textAlign: widthSmDown ? "center" : "left"}} xs={12}>
                                        <Typography color="textSecondary" variant={widthSmDown ? "subtitle1" : "h6"}>
                                            {title.toUpperCase()}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid alignItems={widthSmDown ? "center" : "flex-start"} container>
                                            <Grid item xs={12}>
                                                <Typography color="secondary" variant="body1">
                                                    {introduction}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container justify={widthSmDown ? "center" : "flex-start"} spacing={16}>
                                            <Grid item>
                                                <Button color="secondary" onClick={this.scrollToContactForm}
                                                        size={widthSmDown ? "medium" : "large"}
                                                        variant="contained">
                                                    Contact
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item style={{paddingTop: widthSmDown ? 30 : 50}} xs={12}>
                                        <Grid alignItems={widthSmDown ? "center" : "flex-start"} container>
                                            <Grid item sm={3} xs={12}>
                                                <Typography color="secondary" style={{fontWeight: "bold"}}
                                                            variant="body1">
                                                    Location
                                                </Typography>
                                            </Grid>
                                            <Grid item sm={9} xs={12}>
                                                <Tooltip disableHoverListener={touchScreen}
                                                         disableFocusListener={touchScreen}
                                                         disableTouchListener={touchScreen} title="Open in Google Maps">
                                                    <Typography className={classes.locationHover} color="textSecondary"
                                                                gutterBottom
                                                                onClick={() => this.handleLinkClick(touchScreen, VISIT, "https://maps.google.com/?q=" + location, "Open in Google Maps?")}
                                                                variant="body1">
                                                        {location}
                                                    </Typography>
                                                </Tooltip>
                                            </Grid>
                                            <Grid item sm={3} xs={12}>
                                                <Typography color="secondary" style={{fontWeight: "bold"}}
                                                            variant="body1">
                                                    Email
                                                </Typography>
                                            </Grid>
                                            <Grid item sm={9} xs={12}>
                                                <MuiThemeProvider theme={tooltipCustomTheme}>
                                                    <Tooltip disableHoverListener={touchScreen}
                                                             disableFocusListener={touchScreen}
                                                             disableTouchListener={touchScreen}
                                                             title={toolTipSelected ? toolTipCopyEmailSuccess : toolTipCopyEmailInitial}>
                                                        <Typography className={classes.emailHover} color="textSecondary"
                                                                    onClick={event => this.handleEmailCopy(touchScreen, COPY, event, "Copy email address?")}
                                                                    variant="body1">
                                                            {email}
                                                        </Typography>
                                                    </Tooltip>
                                                </MuiThemeProvider>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </Slide>
        )
    }
}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(About)));