import React, {Component} from "react";
import {connect} from "react-redux";
import {Grid, Hidden, Paper, Toolbar, Tooltip, Typography, withStyles, withWidth} from "@material-ui/core";
import {updateEducation} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import UoBLogo from "./media/uob-logo-slate-grey.png";

const styles = theme => ({
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

const mapDispatchToProps = dispatch => {
    return {updateEducation: dimensions => dispatch(updateEducation(dimensions))}
};

class Education extends Component {

    constructor(props) {
        super(props);
        this.state = {universityOfBathUrl: "https://www.bath.ac.uk/"};
        this.educationRef = React.createRef();
    }

    componentDidMount() {
        this.setComponentMeasurements();
    }

    setComponentMeasurements = () => {
        const height = this.educationRef.current.scrollHeight;
        const distanceToTop = this.educationRef.current.offsetTop;
        this.props.updateEducation({height, distanceToTop});
    };
    
    universityOfBathLogo = style => (
        <Tooltip title="Visit University of Bath website">
            <img alt="University of Bath"
                 className={style}
                 onClick={() => window.open(this.state.universityOfBathUrl, "", "", false)}
                 src={UoBLogo}/>
        </Tooltip>
    );


    render() {
        const {classes} = this.props;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <div ref={this.educationRef}>
                <Grid alignItems="flex-start" container justify="center" spacing={24}>
                    <Grid item md={12}>
                        <Typography color="secondary" gutterBottom
                                    variant={widthSmDown ? "h5" : "h4"}>
                            Education
                        </Typography>
                        <Paper className={classes.paper}>
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
                                    University of Bath
                                </Typography>
                                <Hidden smDown>
                                    {this.universityOfBathLogo(classes.universityOfBathLogo)}
                                </Hidden>
                            </Toolbar>
                            <Typography color="textSecondary" variant={widthSmDown ? "subtitle1" : "h6"}>
                                BSc Applied Computing, First Class (Honours) (GPA 4.0), 2014 -2017
                            </Typography>
                            <Typography color="secondary" variant="body1">
                                Key modules included: Creative Computing, Multi-Tasking Systems, Advanced Web-Based
                                Technologies, Mobile Technologies, Computer Hardware, Cyber Security and
                                Ethics, Systems Analysis, Networking, Programming and Database Development.
                                <br/><br/>
                                Development work included the creation of a website for the Local Safeguarding
                                Children’s Board for Bath & North-East Somerset Council, a professional services website
                                and a website and Android mobile application for a client specialising in promoting
                                shopping events across the UK.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withWidth()(withStyles(styles)(connect(null, mapDispatchToProps)(Education)));