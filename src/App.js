import React, {Component} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {connect} from "react-redux";
import isTouchDevice from "is-touch-device";
import {
    setContactFormStatus,
    setTouchScreenStatus,
    updateContact,
    updateEducation,
    updateExperience,
    updatePortfolio,
    updateSkills,
    updateWebPsupportLossless,
    updateWebPsupportLossy
} from "./redux/actions";
import {
    colors,
    createMuiTheme,
    Grid,
    MuiThemeProvider,
    Snackbar,
    SnackbarContent,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {isWidthDown} from "@material-ui/core/withWidth";
import classNames from "classnames";
import BackgroundVideo from "./background_video/BackgroundVideo";
import Navigation from "./navigation/Navigation";
import BackToTopButton from "./back_to_top_button/BackToTopButton";
import About from "./about/About";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import ActionMessage from "./utils/ActionMessage";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import SmoothScroll from "smoothscroll-polyfill";

require("dotenv").config();

const variantIcon = {success: CheckCircleIcon, error: ErrorIcon};

const theme = createMuiTheme({
    overrides: {
        MuiSnackbarContent: {
            root: {
                "@media (min-width: 768px)": {
                    flexGrow: 0,
                    minWidth: 360
                }
            }
        }
    },
    palette: {
        primary: {
            main: colors.blueGrey[50]
        },
        secondary: {
            main: colors.blueGrey[900]
        }
    },
    typography: {
        "fontFamily": "\"Montserrat\", sans-serif",
        useNextVariants: true
    }
});

const styles = theme => ({
    content: {
        left: 0,
        margin: "0 auto",
        position: "absolute",
        right: 0
    },
    contactFormError: {
        backgroundColor: theme.palette.error.dark
    },
    contactFormSuccess: {
        backgroundColor: colors.green[600]
    },
    icon: {
        fontSize: 20
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit
    },
    message: {
        display: "flex",
        alignItems: "center"
    },
    navigationBar: {
        left: 0,
        margin: "0 auto",
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 99
    },
    section: {
        paddingBottom: "24px"
    }
});

const mapStateToProps = state => {
    return {
        navigation: state.navigation,
        actionMessage: state.actionMessage.actionMessageContent,
        contactFormStatus: state.contactFormStatus.contactFormStatusContent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateSkills: dimensions => dispatch(updateSkills(dimensions)),
        updatePortfolio: dimensions => dispatch(updatePortfolio(dimensions)),
        updateEducation: dimensions => dispatch(updateEducation(dimensions)),
        updateExperience: dimensions => dispatch(updateExperience(dimensions)),
        updateContact: dimensions => dispatch(updateContact(dimensions)),
        updateWebPsupportLossy: supported => dispatch(updateWebPsupportLossy(supported)),
        updateWebPsupportLossless: supported => dispatch(updateWebPsupportLossless(supported)),
        setTouchScreenStatus: isTouchScreen => dispatch(setTouchScreenStatus(isTouchScreen)),
        setContactFormStatus: status => dispatch(setContactFormStatus(status))
    }
};

class App extends Component {

    constructor(props) {
        super(props);
        firebase.initializeApp({
            apiKey: process.env.REACT_APP_FIREBASE_KEY,
            authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
            databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
            projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
            storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
        });
        SmoothScroll.polyfill();
        const touchScreen = isTouchDevice();
        this.props.setTouchScreenStatus(touchScreen);
    }

    componentDidMount() {
        this.checkWebPSupport();
    }

    checkWebPSupport = () => {
        const testImages = [
            {format: "lossy", data: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"},
            {format: "lossless", data: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="}
        ];
        testImages.forEach(testImage => {
            const image = new Image();
            image.onload = () => {
                const result = (image.width > 0) && (image.height > 0);
                if (!result) return;
                if (testImage.format === "lossy") {
                    this.props.updateWebPsupportLossy(result);
                } else {
                    this.props.updateWebPsupportLossless(result);
                }
            };
            image.src = "data:image/webp;base64," + testImage.data;
        });
    };

    render() {
        const {classes, contactFormStatus} = this.props;
        const Icon = contactFormStatus.error ? variantIcon.error : variantIcon.success;
        const {actionMessageType, copyText, link, message, open} = this.props.actionMessage;
        const contentStartPoint = isWidthDown("xs", this.props.width) ? 100 : 200;
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <BackgroundVideo/>
                    <div className={classes.navigationBar}>
                        <Grid container justify="center">
                            <Grid item md={9} lg={8} sm={9} xs={12}>
                                <Navigation/>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.content} style={{top: contentStartPoint}}>
                        <Grid container justify="center">
                            <Grid className={classes.section} item lg={8} xs={9}>
                                <About/>
                            </Grid>
                            <Grid className={classes.section} item lg={8} xs={9}>
                                <Skills/>
                            </Grid>
                            <Grid className={classes.section} item lg={8} xs={9}>
                                <Portfolio/>
                            </Grid>
                            <Grid className={classes.section} item lg={8} xs={9}>
                                <Education/>
                            </Grid>
                            <Grid className={classes.section} item lg={8} xs={9}>
                                <Experience/>
                            </Grid>
                            <Grid className={classes.section} item lg={8} xs={9}>
                                <Contact/>
                            </Grid>
                        </Grid>
                        <Footer/>
                        <ActionMessage actionMessageType={actionMessageType} copyText={copyText} link={link}
                                       message={message} open={open}/>
                        <Snackbar
                            autoHideDuration={10000}
                            ClickAwayListenerProps={{
                                onClickAway: () => this.props.setContactFormStatus({error: false, open: false})
                            }}
                            ContentProps={{"aria-describedby": "contact-form-snackbar-message-id"}}
                            onClose={() => this.props.setContactFormStatus({error: false, open: false})}
                            open={contactFormStatus.open}>
                            <SnackbarContent
                                aria-describedby="contact-form-snackbar-message-id"
                                action={
                                    <Typography color="inherit" onClick={() => this.props.setContactFormStatus({
                                        error: false, open: false
                                    })} style={{cursor: "pointer"}} variant="overline">
                                        Close
                                    </Typography>
                                }
                                className={contactFormStatus.error ? classes.contactFormError : classes.contactFormSuccess}
                                message={
                                    <span id="contact-form-snackbar-message-id" className={classes.message}>
                                        <Icon className={classNames(classes.icon, classes.iconVariant)}/>
                                        <Typography color="inherit" variant="caption">
                                            {contactFormStatus.error ? "Error sending your message, please try again" : "Message sent!"}
                                        </Typography>
                                    </span>
                                }
                                square={true}
                            />
                        </Snackbar>
                        <BackToTopButton/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App)));