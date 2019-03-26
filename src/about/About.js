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
import {updateAbout} from "../redux/actions";
import ProfilePicture from "../utils/media/profile-picture.jpg";

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
        useNextVariants: true,
    }
});

const mapStateToProps = state => {
    return {navigation: state.navigation};
};

const mapDispatchToProps = dispatch => {
    return {updateAbout: dimensions => dispatch(updateAbout(dimensions))}
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
            introduction: "Hi, I'm Richard! I'm an Android and front-end web developer with a passion for all things tech. Check out my portfolio and other info I've shared about me. Please feel free to reach out by filling out my short contact form below.",
            location: "Wolverhampton, United Kingdom",
            email: "richard.ansell@bath.edu",
            toolTipSelected: false,
            toolTipCopyEmailInitial: "Click to copy email",
            toolTipCopyEmailSuccess: "Email copied!",
        };
        this.aboutRef = React.createRef();
        this.toolTipCopyEmailTimer = null;
    }

    componentDidMount() {
        this.setComponentMeasurements();
        window.addEventListener('resize', this.setComponentMeasurements);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.navigation.aboutComponent.height !== this.aboutRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.toolTipCopyEmailTimer);
        window.removeEventListener('resize', this.setComponentMeasurements);
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

    openLink = url => window.open(url, "", "", false);

    copyEmail = event => {
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
    };

    render() {
        const {classes} = this.props;
        const widthSmDown = isWidthDown("sm", this.props.width);
        const avatarStyle = {
            height: widthSmDown ? 100 : 200,
            width: widthSmDown ? 100 : 200
        };
        return (
            <div className={classes.border} ref={this.aboutRef}>
                <Paper className={classes.paper} square={true}>
                    <Grid alignItems="center" container justify="center" spacing={24}>
                        <Grid item md={5}>
                            <Grid alignItems="center" container direction="column">
                                <Grid item xs={12}>
                                    <Avatar alt={this.state.name} src={ProfilePicture} style={avatarStyle}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Tooltip title="Github">
                                        <FontAwesomeIcon className={classes.githubIconHover} icon={GithubIcon}
                                                         onClick={() => this.openLink(this.state.githubUrl)} size="2x"/>
                                    </Tooltip>
                                    <Tooltip title="LinkedIn">
                                        <FontAwesomeIcon className={classes.linkedInIconHover} icon={LinkedInIcon}
                                                         onClick={() => this.openLink(this.state.linkedInUrl)}
                                                         size="2x"/>
                                    </Tooltip>
                                    <Tooltip title="Stack Overflow">
                                        <FontAwesomeIcon className={classes.stackOverflowIconHover}
                                                         icon={StackOverflowIcon}
                                                         onClick={() => this.openLink(this.state.stackOverflowUrl)}
                                                         size="2x"/>
                                    </Tooltip>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={7}>
                            <Grid alignItems={widthSmDown ? "center" : "flex-start"} container spacing={24}>
                                <Grid item style={{textAlign: widthSmDown ? "center" : "left"}} xs={12}>
                                    <Typography color="secondary" variant={widthSmDown ? "h5" : "h4"}>
                                        {this.state.name}
                                    </Typography>
                                </Grid>
                                <Grid item style={{textAlign: widthSmDown ? "center" : "left"}} xs={12}>
                                    <Typography color="textSecondary" variant={widthSmDown ? "subtitle1" : "h6"}>
                                        {this.state.title.toUpperCase()}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid alignItems={widthSmDown ? "center" : "flex-start"} container>
                                        <Grid item xs={12}>
                                            <Typography color="secondary" variant="body1">
                                                {this.state.introduction}
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
                                            <Tooltip title="Open in Google Maps">
                                                <Typography className={classes.locationHover} color="textSecondary"
                                                            gutterBottom
                                                            onClick={() => this.openLink("https://maps.google.com/?q=term" + this.state.location)}
                                                            variant="body1">
                                                    {this.state.location}
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
                                                <Tooltip
                                                    title={this.state.toolTipSelected ? this.state.toolTipCopyEmailSuccess : this.state.toolTipCopyEmailInitial}>
                                                    <Typography className={classes.emailHover} color="textSecondary"
                                                                onClick={this.copyEmail}
                                                                variant="body1">
                                                        {this.state.email}
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
        )
    }
}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(About)));