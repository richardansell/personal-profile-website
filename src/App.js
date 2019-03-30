import React, {Component} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {connect} from "react-redux";
import {
    updateComponentDistancesToTop,
    updateContact,
    updateEducation,
    updateExperience,
    updatePortfolio,
    updateSkills,
    updateTabIndex,
    updateWebPsupportLossless,
    updateWebPsupportLossy
} from "./redux/actions";
import {colors, createMuiTheme, Grid, MuiThemeProvider, withStyles, withWidth} from "@material-ui/core";
import BackgroundVideo from "./background_video/BackgroundVideo";
import Navigation, {tabs} from "./navigation/Navigation";
import BackToTopButton from "./back_to_top_button/BackToTopButton";
import About from "./about/About";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import {isWidthDown} from "@material-ui/core/withWidth";

require("dotenv").config();

const theme = createMuiTheme({
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

const styles = () => ({
    navigationBar: {
        left: 0,
        margin: "0 auto",
        position: "fixed",
        right: 0,
        top: 0,
        zIndex: 99
    },
    content: {
        left: 0,
        margin: "0 auto",
        position: "absolute",
        right: 0
    },
    section: {
        paddingBottom: "24px"
    }
});

const mapStateToProps = state => {
    return {navigation: state.navigation};
};

const mapDispatchToProps = dispatch => {
    return {
        updateComponentDistancesToTop: update => dispatch(updateComponentDistancesToTop(update)),
        updateTabIndex: tabIndex => dispatch(updateTabIndex(tabIndex)),
        updateSkills: dimensions => dispatch(updateSkills(dimensions)),
        updatePortfolio: dimensions => dispatch(updatePortfolio(dimensions)),
        updateEducation: dimensions => dispatch(updateEducation(dimensions)),
        updateExperience: dimensions => dispatch(updateExperience(dimensions)),
        updateContact: dimensions => dispatch(updateContact(dimensions)),
        updateWebPsupportLossy: supported => dispatch(updateWebPsupportLossy(supported)),
        updateWebPsupportLossless: supported => dispatch(updateWebPsupportLossless(supported))
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
    }

    componentDidMount() {
        this.checkWebPSupport();
        window.addEventListener("scroll", this.handleScroll);
        setTimeout(() => {
            this.props.updateTabIndex(tabs.ABOUT);
        }, 100);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.navigation.componentDistancesToTop === true) this.setSectionComponentDistancesToTop();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
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

    setSectionComponentDistancesToTop = () => {
        const {appBarComponent, aboutComponent, skillsComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent} = this.props.navigation;
        const componentSections = [skillsComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent];
        const contentStartPoint = isWidthDown("xs", this.props.width) ? 100 : 200;
        let distanceToTop = contentStartPoint + aboutComponent.height - appBarComponent.height;
        let margin = 24;
        componentSections.forEach(component => {
            if (component === skillsComponent) {
                this.props.updateSkills({distanceToTop: distanceToTop + margin, height: component.height});
                distanceToTop += component.height;
            } else {
                switch (component) {
                    case portfolioComponent:
                        this.props.updatePortfolio({
                            distanceToTop: distanceToTop + margin,
                            height: component.height
                        });
                        break;
                    case educationComponent:
                        this.props.updateEducation({
                            distanceToTop: distanceToTop + margin,
                            height: component.height
                        });
                        break;
                    case experienceComponent:
                        this.props.updateExperience({
                            distanceToTop: distanceToTop + margin,
                            height: component.height
                        });
                        break;
                    case contactComponent:
                        this.props.updateContact({
                            distanceToTop: distanceToTop,
                            height: component.height
                        });
                        break;
                    default:
                        break;
                }
                distanceToTop += component.height + margin;
            }
        });
        this.props.updateComponentDistancesToTop({componentDistancesToTop: false});
    };

    handleScroll = () => {
        if (isWidthDown("md", this.props.width)) return;
        const {appBarComponent, aboutComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent} = this.props.navigation;
        const {ABOUT, SKILLS, PORTFOLIO, EDUCATION, EXPERIENCE, CONTACT} = tabs;
        const scrollPoint = document.scrollingElement.scrollTop || document.documentElement.scrollTop;
        const contentStartPoint = isWidthDown("xs", this.props.width) ? 100 : 200;
        const initialDistance = contentStartPoint + aboutComponent.height - appBarComponent.height;
        if (scrollPoint <= initialDistance) {
            if (this.props.navigation.tabIndex === ABOUT) return;
            this.props.updateTabIndex(ABOUT);
        } else if (scrollPoint > initialDistance && scrollPoint < portfolioComponent.distanceToTop) {
            if (this.props.navigation.tabIndex === SKILLS) return;
            this.props.updateTabIndex(SKILLS);
        } else if (scrollPoint >= portfolioComponent.distanceToTop && scrollPoint < educationComponent.distanceToTop) {
            if (this.props.navigation.tabIndex === PORTFOLIO) return;
            this.props.updateTabIndex(PORTFOLIO);
        } else if (scrollPoint >= educationComponent.distanceToTop && scrollPoint < experienceComponent.distanceToTop) {
            if (this.props.navigation.tabIndex === EDUCATION) return;
            this.props.updateTabIndex(EDUCATION);
        } else if (scrollPoint >= experienceComponent.distanceToTop && scrollPoint < contactComponent.distanceToTop) {
            if (this.props.navigation.tabIndex === EXPERIENCE) return;
            this.props.updateTabIndex(EXPERIENCE);
        } else if (scrollPoint >= contactComponent.distanceToTop) {
            if (this.props.navigation.tabIndex === CONTACT) return;
            this.props.updateTabIndex(CONTACT);
        }
    };

    render() {
        const {classes} = this.props;
        const contentStartPoint = isWidthDown("xs", this.props.width) ? 100 : 200;
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <BackgroundVideo/>
                    <div className={classes.navigationBar}>
                        <Grid container justify="center">
                            <Grid item lg={8} xs={9}>
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
                        <BackToTopButton/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(App)));