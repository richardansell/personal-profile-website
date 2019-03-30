import React, {Component} from "react";
import {connect} from "react-redux";
import {Fade, Grid, Hidden, Paper, Slide, Toolbar, Tooltip, Typography, withStyles, withWidth} from "@material-ui/core";
import {updateComponentDistancesToTop, updateEducation} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import UoBLogo from "./media/uob-logo-slate-grey.png";
import UoBLogoWp from "./media/uob-logo-slate-grey.webp";

const styles = theme => ({
    border: {
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth: "1px"
    },
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
    return {educationComponent: state.navigation.educationComponent};
};

const mapDispatchToProps = dispatch => {
    return {
        updateComponentDistancesToTop: update => dispatch(updateComponentDistancesToTop(update)),
        updateEducation: dimensions => dispatch(updateEducation(dimensions))
    }
};

class Education extends Component {

    constructor(props) {
        super(props);
        this.state = {
            instituteName: "University of Bath",
            instituteUrl: "https://www.bath.ac.uk/",
            tooltipVisitInstituteTitle: "Visit University of Bath website",
            courseDetails: "BSc Applied Computing, First Class (Honours) (GPA 4.0), 2014 - 2017",
            courseContent: "Key modules included: Creative Computing, Multi-Tasking Systems, Advanced Web-Based Technologies, Mobile Technologies, Computer Hardware, Cyber Security and Ethics, Systems Analysis, Networking, Programming and Database Development.\n\nDevelopment work included the creation of a website for the Local Safeguarding Children’s Board for Bath & North-East Somerset Council, a professional services website and a website and Android mobile application for a client specialising in promoting shopping events across the UK."
        };
        this.educationRef = React.createRef();
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
        if (prevProps.educationComponent.height !== this.educationRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.resizeEventTimer);
        window.removeEventListener("resize", this.resizeEvent);
    }

    setComponentMeasurements = () => {
        const height = this.educationRef.current.scrollHeight;
        this.props.updateEducation({height: height});
        this.props.updateComponentDistancesToTop(true);
    };

    universityOfBathLogo = style => (
        <Tooltip title={this.state.tooltipVisitInstituteTitle}>
            <picture>
                <source type="image/webp" srcSet={UoBLogoWp}/>
                <source type="image/png" srcSet={UoBLogo}/>
                <img alt={this.state.instituteName}
                     className={style}
                     onClick={() => window.open(this.state.instituteUrl, "", "", false)}
                     src={UoBLogo}/>
            </picture>
        </Tooltip>
    );

    render() {
        const {classes} = this.props;
        const {instituteName, courseDetails, courseContent} = this.state;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <div className={classes.border} ref={this.educationRef}>
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
                                            {this.universityOfBathLogo(classes.universityOfBathLogo)}
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