import React, {Component} from 'react';
import {AppBar, Button, Hidden, Tab, Tabs, Toolbar, Typography, withStyles, withWidth} from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import {connect} from "react-redux";
import {updateAppBar} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";

const styles = theme => ({
    appBarName: {
        flexGrow: 1,
        fontWeight: "bold",
        marginRight: 10
    },
    codeIcon: {
        fontSize: 32,
        marginLeft: -5,
        marginRight: 10
    },
    root: {
        paddingTop: theme.spacing.unit * 2
    }
});

const tabStyle = {minWidth: 50, paddingBottom: 20, paddingTop: 20};

export const tabs = {
    ABOUT: 0,
    SKILLS: 1,
    PORTFOLIO: 2,
    EDUCATION: 3,
    EXPERIENCE: 4,
    CONTACT: 5
};

const mapStateToProps = state => {
    return {navigation: state.navigation};
};

const mapDispatchToProps = dispatch => {
    return {updateAppBar: dimensions => dispatch(updateAppBar(dimensions))}
};

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.appBarRef = React.createRef();
    }

    componentDidMount() {
        this.setComponentMeasurements();
    }

    setComponentMeasurements = () => {
        const height = this.appBarRef.current.scrollHeight;
        const appBarStyle = window.getComputedStyle(this.appBarRef.current);
        const appBarTopPadding = parseInt(appBarStyle.getPropertyValue('padding-top'));
        const totalHeight = 200 - (height - (appBarTopPadding * 2));
        this.props.updateAppBar({height: totalHeight, paddingTop: appBarTopPadding});
    };

    handleTabChange = (event, value) => {
        const {appBarComponent, skillsComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent} = this.props.navigation;
        const {ABOUT, SKILLS, PORTFOLIO, EDUCATION, EXPERIENCE, CONTACT} = tabs;
        let scrollToPoint = 0;
        switch (value) {
            case ABOUT:
                scrollToPoint = 0;
                break;
            case SKILLS:
                scrollToPoint = skillsComponent.distanceToTop;
                break;
            case PORTFOLIO:
                scrollToPoint = portfolioComponent.distanceToTop;
                break;
            case EDUCATION:
                scrollToPoint = educationComponent.distanceToTop;
                break;
            case EXPERIENCE:
                scrollToPoint = experienceComponent.distanceToTop;
                break;
            case CONTACT:
                scrollToPoint = contactComponent.distanceToTop;
                break;
            default:
                break;
        }
        window.scrollTo({
            top: scrollToPoint - (appBarComponent.height - (appBarComponent.paddingTop * 0.5)),
            left: 0,
            behavior: 'smooth'
        });
    };

    scrollToContactForm = () => {
        const {appBarComponent, contactComponent} = this.props.navigation;
        window.scrollTo({
            top: contactComponent.distanceToTop - (appBarComponent.height - (appBarComponent.paddingTop * 0.5)),
            left: 0,
            behavior: 'smooth'
        });
    };

    render() {
        const {classes, navigation} = this.props;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <div className={classes.root} ref={this.appBarRef}>
                <AppBar color="inherit" position="static">
                    <Toolbar>
                        <Icon.Code className={classes.codeIcon} color="secondary"/>
                        <Typography className={classes.appBarName} color="secondary" variant={widthSmDown ? "body1" : "h6"}>
                            Richard
                        </Typography>
                        <Hidden lgUp>
                            <Button color="secondary" onClick={this.scrollToContactForm} size={widthSmDown ? "small" : "medium"}>
                                Contact
                            </Button>
                        </Hidden>
                        <Hidden mdDown>
                            <Tabs indicatorColor="secondary" onChange={this.handleTabChange}
                                  color="secondary" value={navigation.tabIndex}>
                                <Tab label="About" style={tabStyle}/>
                                <Tab label="Skills" style={tabStyle}/>
                                <Tab label="Portfolio" style={tabStyle}/>
                                <Tab label="Education" style={tabStyle}/>
                                <Tab label="Experience" style={tabStyle}/>
                                <Tab label="Contact" style={tabStyle}/>
                            </Tabs>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Navigation)));