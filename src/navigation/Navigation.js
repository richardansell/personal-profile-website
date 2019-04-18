import React, {Component} from "react";
import {connect} from "react-redux";
import {
    AppBar,
    Hidden,
    Menu,
    MenuItem,
    Slide,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import {updateAppBar} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";

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
        "@media (min-width: 600px)": {
            paddingTop: theme.spacing.unit * 2
        }
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
        this.state = {
            menuIndex: 0,
            showNavigation: false,
            showSmallScreenMenu: null
        };
        this.appBarRef = React.createRef();
        this.slideInTimer = null;
        this.resizeEventTimer = null;
    }

    componentDidMount() {
        this.slideInTimer = setTimeout(() => {
            this.setState({showNavigation: true});
        }, 1250);
        window.addEventListener("load", this.setComponentMeasurements);
        window.addEventListener("resize", this.resizeEvent);
        window.addEventListener("scroll", this.setMenuItemIndex);
    }

    resizeEvent = () => {
        clearTimeout(this.resizeEventTimer);
        this.resizeEventTimer = setTimeout(() => {
            this.setComponentMeasurements();
        }, 250);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.navigation.appBarComponent.height !== this.appBarRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.slideInTimer);
        clearTimeout(this.resizeEventTimer);
        window.removeEventListener("resize", this.resizeEvent);
        window.removeEventListener("scroll", this.setMenuItemIndex);
    }

    setMenuItemIndex = () => {
        const {menuIndex} = this.state;
        const {skillsComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent} = this.props.navigation;
        const {ABOUT, SKILLS, PORTFOLIO, EDUCATION, EXPERIENCE, CONTACT} = tabs;
        const scrollPoint = (document.scrollingElement.scrollTop || document.documentElement.scrollTop) + 12;
        if (scrollPoint < skillsComponent.distanceToTop) {
            if (menuIndex === ABOUT) return;
            this.setState({menuIndex: ABOUT});
        } else if (scrollPoint >= skillsComponent.distanceToTop && scrollPoint < portfolioComponent.distanceToTop) {
            if (menuIndex === SKILLS) return;
            this.setState({menuIndex: SKILLS});
        } else if (scrollPoint >= portfolioComponent.distanceToTop && scrollPoint < educationComponent.distanceToTop) {
            if (menuIndex === PORTFOLIO) return;
            this.setState({menuIndex: PORTFOLIO});
        } else if (scrollPoint >= educationComponent.distanceToTop && scrollPoint < experienceComponent.distanceToTop) {
            if (menuIndex === EDUCATION) return;
            this.setState({menuIndex: EDUCATION});
        } else if (scrollPoint >= experienceComponent.distanceToTop && scrollPoint < contactComponent.distanceToTop) {
            if (menuIndex === EXPERIENCE) return;
            this.setState({menuIndex: EXPERIENCE});
        } else if (scrollPoint >= contactComponent.distanceToTop) {
            if (menuIndex === CONTACT) return;
            this.setState({menuIndex: CONTACT});
        }
    };

    setComponentMeasurements = () => {
        const height = this.appBarRef.current.scrollHeight;
        this.props.updateAppBar({height: height});
    };

    scrollToTarget = target => {
        this.setState({showSmallScreenMenu: null}, () => window.scrollTo({
            top: target - 12,
            left: 0,
            behavior: "smooth"
        }))
    };

    handleClose = () => this.setState({showSmallScreenMenu: null});

    render() {
        const {ABOUT, SKILLS, PORTFOLIO, EDUCATION, EXPERIENCE, CONTACT} = tabs;
        const {classes, navigation} = this.props;
        const {skillsComponent, portfolioComponent, educationComponent, experienceComponent, contactComponent} = navigation;
        const {showNavigation, showSmallScreenMenu, menuIndex} = this.state;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <Slide direction="down" in={showNavigation} timeout={{enter: 1000}}>
                <div className={classes.root} ref={this.appBarRef}>
                    <AppBar color="inherit" position="static">
                        <Toolbar>
                            <CodeIcon className={classes.codeIcon} color="secondary"/>
                            <Typography className={classes.appBarName} color="secondary"
                                        variant={widthSmDown ? "body1" : "h6"}>
                                Richard
                            </Typography>
                            <Hidden lgUp>
                                <IconButton aria-haspopup="true"
                                            aria-owns={showSmallScreenMenu ? "small-screen-menu" : undefined}
                                            color="inherit"
                                            onClick={event => this.setState({showSmallScreenMenu: event.currentTarget})}>
                                    <MoreIcon/>
                                </IconButton>
                                <Menu anchorEl={showSmallScreenMenu} id="small-screen-menu" onClose={this.handleClose}
                                      open={Boolean(showSmallScreenMenu)}>
                                    <MenuItem onClick={() => this.scrollToTarget(0)}
                                              selected={menuIndex === ABOUT}>About</MenuItem>
                                    <MenuItem onClick={() => this.scrollToTarget(skillsComponent.distanceToTop)}
                                              selected={menuIndex === SKILLS}>Skills</MenuItem>
                                    <MenuItem onClick={() => this.scrollToTarget(portfolioComponent.distanceToTop)}
                                              selected={menuIndex === PORTFOLIO}>Portfolio</MenuItem>
                                    <MenuItem onClick={() => this.scrollToTarget(educationComponent.distanceToTop)}
                                              selected={menuIndex === EDUCATION}>Education</MenuItem>
                                    <MenuItem onClick={() => this.scrollToTarget(experienceComponent.distanceToTop)}
                                              selected={menuIndex === EXPERIENCE}>Experience</MenuItem>
                                    <MenuItem onClick={() => this.scrollToTarget(contactComponent.distanceToTop)}
                                              selected={menuIndex === CONTACT}>Contact me</MenuItem>
                                </Menu>
                            </Hidden>
                            <Hidden mdDown>
                                <Tabs indicatorColor="secondary" color="secondary" value={menuIndex}>
                                    <Tab label="About" onClick={() => this.scrollToTarget(0)} style={tabStyle}/>
                                    <Tab label="Skills"
                                         onClick={() => this.scrollToTarget(skillsComponent.distanceToTop)}
                                         style={tabStyle}/>
                                    <Tab label="Portfolio"
                                         onClick={() => this.scrollToTarget(portfolioComponent.distanceToTop)}
                                         style={tabStyle}/>
                                    <Tab label="Education"
                                         onClick={() => this.scrollToTarget(educationComponent.distanceToTop)}
                                         style={tabStyle}/>
                                    <Tab label="Experience"
                                         onClick={() => this.scrollToTarget(experienceComponent.distanceToTop)}
                                         style={tabStyle}/>
                                    <Tab label="Contact"
                                         onClick={() => this.scrollToTarget(contactComponent.distanceToTop)}
                                         style={tabStyle}/>
                                </Tabs>
                            </Hidden>
                        </Toolbar>
                    </AppBar>
                </div>
            </Slide>
        )
    }

}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Navigation)));