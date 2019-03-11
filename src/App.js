import React, {Component} from 'react';
import {connect} from "react-redux";
import "./App.css";
import {updateTabIndex} from "./redux/actions";
import {colors, createMuiTheme, Grid, MuiThemeProvider} from "@material-ui/core";
import BackgroundVideo from "./background_video/BackgroundVideo";
import Navigation, {tabs} from "./navigation/Navigation";
import BackToTopButton from "./back_to_top_button/BackToTopButton";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.blueGrey[50],
        },
        secondary: {
            main: colors.blueGrey[900],
        },
    },
    typography: {
        useNextVariants: true,
    }
});

const mapStateToProps = state => {
    return {navigation: state.navigation};
};

const mapDispatchToProps = dispatch => {
    return {updateTabIndex: tabIndex => dispatch(updateTabIndex(tabIndex))}
};

class App extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const {appBarComponent, skillsComponent, portfolioComponent, educationComponent, experienceComponent} = this.props.navigation;
        const {ABOUT, SKILLS, PORTFOLIO, EDUCATION, EXPERIENCE, CONTACT} = tabs;
        const scrollPoint = document.documentElement.scrollTop + appBarComponent.height;
        if (scrollPoint < skillsComponent.distanceToTop) {
            this.props.updateTabIndex(ABOUT);
        } else if (this.isScrollPointInComponent(scrollPoint, skillsComponent)) {
            if (this.props.navigation.tabIndex === SKILLS) return;
            this.props.updateTabIndex(SKILLS);
        } else if (this.isScrollPointInComponent(scrollPoint, portfolioComponent)) {
            if (this.props.navigation.tabIndex === PORTFOLIO) return;
            this.props.updateTabIndex(PORTFOLIO);
        } else if (this.isScrollPointInComponent(scrollPoint, educationComponent)) {
            if (this.props.navigation.tabIndex === EDUCATION) return;
            this.props.updateTabIndex(EDUCATION);
        } else if (this.isScrollPointInComponent(scrollPoint, experienceComponent)) {
            if (this.props.navigation.tabIndex === EXPERIENCE) return;
            this.props.updateTabIndex(EXPERIENCE);
        } else if (scrollPoint > (experienceComponent.distanceToTop + experienceComponent.height)) {
            if (this.props.navigation.tabIndex === CONTACT) return;
            this.props.updateTabIndex(CONTACT);
        }
    };

    isScrollPointInComponent = (scrollPoint, component) => {
        return (scrollPoint >= component.distanceToTop) && (scrollPoint <= (component.distanceToTop + component.height));
    };

    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <BackgroundVideo/>
                    <div id="navigation-bar">
                        <Grid container justify="center" spacing={24}>
                            <Grid item lg={8} xs={9}>
                                <Navigation/>
                            </Grid>
                        </Grid>
                    </div>
                    <div id="content">
                        <Grid container justify="center" spacing={24}>
                            <Grid item lg={8} xs={9}>
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