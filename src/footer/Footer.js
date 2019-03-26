import React, {Component} from "react";
import {colors, Grid, Typography, withStyles, withWidth} from "@material-ui/core";
import styled, {keyframes} from "styled-components";
import {Icon} from '@iconify/react';
import ReactIcon from '@iconify/react/simple-icons/react';

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const RotateDiv = styled.div`
    animation: ${rotate} infinite 20s linear;
`;

const styles = () => ({
    footerBackground: {
        backgroundColor: colors.blueGrey[500],
        overflowY: "hidden",
        paddingBottom: 30,
        paddingTop: 30,
        textAlign: "center"
    },
    reactDevelopmentTagline: {
        color: "#fff",
        fontFamily: "Kaushan Script, cursive"
    },
    reactIcon: {
        padding: 20
    },
    textColor: {
        color: "#fff"
    },
    websiteLogo: {
        color: "#fff",
        fontFamily: "Audiowide, cursive",
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
                                <Typography className={classes.websiteLogo} variant="h5">
                                    RICHARD ANSELL
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.textColor} variant="overline">
                                    Tech enthusiast
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <RotateDiv>
                                    <Icon className={classes.reactIcon} color="#fff" height={96} icon={ReactIcon}
                                          width={96}/>
                                </RotateDiv>
                                <Typography className={classes.reactDevelopmentTagline} variant="h6">
                                    Lovingly created with React
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