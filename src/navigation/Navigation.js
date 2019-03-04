import React, {Component} from 'react';
import {AppBar, Hidden, IconButton, Tab, Tabs, Toolbar, Typography, withStyles} from "@material-ui/core";
import * as Icon from "@material-ui/icons";
import {connect} from "react-redux";

const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
        marginLeft: 7,
        marginRight: -1,
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 2,
    }
});

const tabStyle = {minWidth: 50, paddingBottom: 20, paddingTop: 20};

const tabs = {
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

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        const {aboutComponent, skillsComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent} = this.props.navigation;
        const {ABOUT, SKILLS, PORTFOLIO, EDUCATION, EXPERIENCE, CONTACT} = tabs;
        const scrollPoint = event.srcElement.documentElement.scrollTop;
        if (this.isScrollPointInComponent(scrollPoint, aboutComponent) || scrollPoint === 0) {
            this.setState({tabIndex: ABOUT});
        } else if (this.isScrollPointInComponent(scrollPoint, skillsComponent)) {
            this.setState({tabIndex: SKILLS});
        } else if (this.isScrollPointInComponent(scrollPoint, portfolioComponent)) {
            this.setState({tabIndex: PORTFOLIO});
        } else if (this.isScrollPointInComponent(scrollPoint, educationComponent)) {
            this.setState({tabIndex: EDUCATION});
        } else if (this.isScrollPointInComponent(scrollPoint, experienceComponent)) {
            this.setState({tabIndex: EXPERIENCE});
        } else if (this.isScrollPointInComponent(scrollPoint, contactComponent)) {
            this.setState({tabIndex: CONTACT});
        }
    };

    isScrollPointInComponent = (scrollPoint, component) => scrollPoint >= component.distanceToTop && scrollPoint <= (component.distanceToTop + component.height);

    handleTabChange = (event, value) => {
        const {aboutComponent, skillsComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent} = this.props.navigation;
        const {ABOUT, SKILLS, PORTFOLIO, EDUCATION, EXPERIENCE, CONTACT} = tabs;
        let scrollToPoint = 0;
        switch (value) {
            case ABOUT:
                scrollToPoint = aboutComponent.distanceToTop;
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
        window.scrollTo({top: scrollToPoint - 125, left: 0, behavior: 'smooth'});
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar color="inherit" position="static">
                    <Toolbar>
                        <IconButton aria-label="Menu" className={classes.menuButton}
                                    color="inherit">
                            <Icon.Menu/>
                        </IconButton>
                        <Typography className={classes.grow} color="inherit" variant="h6">
                            Richard
                        </Typography>
                        <Hidden mdDown>
                            <Tabs indicatorColor="secondary" onChange={this.handleTabChange}
                                  textColor="inherit" value={this.state.tabIndex}>
                                <Tab label="About" style={tabStyle}/>
                                <Tab label="Skills" style={tabStyle}/>
                                <Tab label="Portfolio" style={tabStyle}/>
                                <Tab label="Education" style={tabStyle}/>
                                <Tab label="Experience" style={tabStyle}/>
                                <Tab label="Contact" style={tabStyle}/>
                            </Tabs>
                        </Hidden>
                        <IconButton aria-label="More" color="inherit">
                            <Icon.MoreVert/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }

}

export default withStyles(styles)(connect(mapStateToProps)(Navigation));