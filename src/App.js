import React, {Component} from 'react';
import {colors, createMuiTheme, Grid, MuiThemeProvider} from "@material-ui/core";
import "./App.css";
import BackgroundVideo from "./background_video/BackgroundVideo";

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

class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <BackgroundVideo/>
                    <div className="content">
                        <Grid container justify="center" spacing={24}>
                            <Grid item xs={9}>

                            </Grid>
                        </Grid>
                    </div>
                    <div className="navigation-bar">
                        <Grid container justify="center" spacing={24}>
                            <Grid item xs={9}>

                            </Grid>
                        </Grid>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;