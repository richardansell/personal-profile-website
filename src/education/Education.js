import React, {Component} from "react";
import {connect} from "react-redux";
import {Fade, Grid, Hidden, Paper, Slide, Toolbar, Tooltip, Typography, withStyles, withWidth} from "@material-ui/core";
import {setActionMessage, updateEducation} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import UoBLogo from "./media/uob-logo-slate-grey.png";
import UoBLogoWp from "./media/uob-logo-slate-grey.webp";
import {actionMessageType} from "../utils/ActionMessage";

const styles = theme => ({
    courseContentText: {
        whiteSpace: "pre-line"
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4
    },
    universityOfBathLogo: {
        cursor: "pointer"
    },
    universityTitle: {
        flexGrow: 1
    }
});

const mapStateToProps = state => {
    return {navigation: state.navigation, touchScreen: state.touchScreen.isTouchScreen};
};

const mapDispatchToProps = dispatch => {
    return {
        updateEducation: dimensions => dispatch(updateEducation(dimensions)),
        setActionMessage: actionMessageContent => dispatch(setActionMessage(actionMessageContent))
    }
};

class Education extends Component {

    constructor(props) {
        super(props);
        this.state = {
            instituteName: "University of Bath",
            instituteUrl: "https://www.bath.ac.uk/",
            visitInstituteTitle: "Visit University of Bath website",
            courseDetails: "BSc Applied Computing, First-Class (Honours) (GPA 4.0), 2014 - 2017",
            courseContent: "Key modules included: Creative Computing, Multi-Tasking Systems, Advanced Web-Based Technologies, Mobile Technologies, Computer Hardware, Cyber Security and Ethics, Systems Analysis, Networking, Programming and Database Development.\n\nDevelopment work included the creation of a website for the Local Safeguarding Children’s Board for Bath & North-East Somerset Council, a professional services website and a website and Android mobile application for a client specialising in promoting shopping events across the UK."
        };
        this.educationRef = React.createRef();
        this.resizeEventTimer = null;
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeEvent);
        window.addEventListener("load", this.setComponentMeasurements);
    }

    resizeEvent = () => {
        clearTimeout(this.resizeEventTimer);
        this.resizeEventTimer = setTimeout(() => {
            this.setComponentMeasurements();
        }, 250);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.navigation.educationComponent.height !== this.educationRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.resizeEventTimer);
        window.removeEventListener("resize", this.resizeEvent);
    }

    setComponentMeasurements = () => {
        const contentStartPoint = isWidthDown("xs", this.props.width) ? 100 : 200;
        const {appBarComponent} = this.props.navigation;
        const height = this.educationRef.current.scrollHeight;
        const distanceToTop = this.educationRef.current.offsetTop + (contentStartPoint - appBarComponent.height);
        this.props.updateEducation({height: height, distanceToTop: distanceToTop});
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

    universityOfBathLogo = (style, touchScreen) => (
        <Tooltip disableHoverListener={touchScreen} disableFocusListener={touchScreen}
                 disableTouchListener={touchScreen} title={this.state.visitInstituteTitle}>
            <picture>
                <source type="image/webp" srcSet={UoBLogoWp}/>
                <source type="image/png" srcSet={UoBLogo}/>
                <img alt={this.state.instituteName}
                     className={style}
                     onClick={() => this.handleLinkClick(touchScreen, actionMessageType.OK, this.state.instituteUrl, this.state.visitInstituteTitle)}
                     src={UoBLogo}/>
            </picture>
        </Tooltip>
    );

    render() {
        const {classes, touchScreen} = this.props;
        const {instituteName, courseDetails, courseContent} = this.state;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <div ref={this.educationRef}>
                <Grid alignItems="flex-start" container justify="center" spacing={24}>
                    <Grid item md={12} xs={12}>
                        <Fade in={true} timeout={{enter: 3000}}>
                            <Typography color="secondary" gutterBottom
                                        variant={widthSmDown ? "h5" : "h4"}>
                                Education
                            </Typography>
                        </Fade>
                        <Slide direction="right" in={true} timeout={{enter: 3000}}>
                            <Paper className={classes.paper} square={true}>
                                <Hidden mdUp>
                                    <Grid container justify="flex-end">
                                        <Grid item>
                                            {this.universityOfBathLogo(classes.universityOfBathLogo, touchScreen)}
                                        </Grid>
                                    </Grid>
                                </Hidden>
                                <Toolbar disableGutters={true}>
                                    <Typography className={classes.universityTitle} color="secondary"
                                                variant={widthSmDown ? "h6" : "h5"}>
                                        {instituteName}
                                    </Typography>
                                    <Hidden smDown>
                                        {this.universityOfBathLogo(classes.universityOfBathLogo)}
                                    </Hidden>
                                </Toolbar>
                                <Typography color="textSecondary" variant={widthSmDown ? "subtitle1" : "h6"}>
                                    {courseDetails}
                                </Typography>
                                <Typography className={classes.courseContentText} color="secondary" variant="body1">
                                    {courseContent}
                                </Typography>
                            </Paper>
                        </Slide>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Education)));