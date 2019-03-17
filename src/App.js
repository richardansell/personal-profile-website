import React, {Component} from 'react';
import {connect} from "react-redux";
import "./App.css";
import {
    updateComponentDistancesToTop,
    updateContact,
    updateEducation,
    updateExperience,
    updatePortfolio,
    updateSkills,
    updateTabIndex
} from "./redux/actions";
import {colors, createMuiTheme, Grid, MuiThemeProvider} from "@material-ui/core";
import BackgroundVideo from "./background_video/BackgroundVideo";
import Navigation, {tabs} from "./navigation/Navigation";
import BackToTopButton from "./back_to_top_button/BackToTopButton";
import About from "./about/About";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import Experience from "./experience/Experience";

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
        useNextVariants: true
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
        updateContact: dimensions => dispatch(updateContact(dimensions))
    }
};

class App extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        setTimeout(() => {
            this.props.updateTabIndex(tabs.ABOUT);
        }, 100);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.navigation.componentDistancesToTop === true) this.setSectionComponentDistancesToTop();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    setSectionComponentDistancesToTop = () => {
        const {appBarComponent, aboutComponent, skillsComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent} = this.props.navigation;
        const componentSections = [skillsComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent];
        let distanceToTop = 200 + aboutComponent.height - appBarComponent.height;
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
        const {appBarComponent, aboutComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent} = this.props.navigation;
        const {ABOUT, SKILLS, PORTFOLIO, EDUCATION, EXPERIENCE, CONTACT} = tabs;
        const scrollPoint = document.scrollingElement.scrollTop || document.documentElement.scrollTop;
        const initialDistance = 200 + aboutComponent.height - appBarComponent.height;
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
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <BackgroundVideo/>
                    <div id="navigation-bar">
                        <Grid container justify="center">
                            <Grid item lg={8} xs={9}>
                                <Navigation/>
                            </Grid>
                        </Grid>
                    </div>
                    <div id="content">
                        <Grid container justify="center">
                            <Grid className="section" item lg={8} xs={9}>
                                <About/>
                            </Grid>
                            <Grid className="section" item lg={8} xs={9}>
                                <Skills/>
                            </Grid>
                            <Grid className="section" item lg={8} xs={9}>
                                <Education/>
                            </Grid>
                            <Grid className="section" item lg={8} xs={9}>
                                <Experience/>
                            </Grid>
                        </Grid>
                        <BackToTopButton/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);