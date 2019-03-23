import React, {Component} from "react";
import {colors, Grid, Typography, withStyles, withWidth} from "@material-ui/core";

const styles = () => ({
    textColor: {
        color: "#fff"
    },
    footerBackground: {
        backgroundColor: colors.blueGrey[500],
        bottom: 0,
        height: 150,
        left: 0,
        right: 0,
        textAlign: "center"
    },
    websiteLogo: {
        color: "#fff",
        fontWeight: "bold"
    }
});

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid alignItems="center" className={classes.footerBackground} container>
                    <Grid item xs={12}>
                        <Grid container direction="column">
                            <Grid item xs={12}>
                                <Typography className={classes.websiteLogo} variant="h6">
                                    RICHARD ANSELL
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textColor} variant="overline">
                                    Tech enthusiast
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textColor} gutterBottom
                                            variant="overline">
                                    Copyright © {new Date().getFullYear()} | All Rights Reserved
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withWidth()(withStyles(styles)(Footer));