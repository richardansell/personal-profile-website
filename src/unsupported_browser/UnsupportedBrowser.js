import React, {Component} from "react";
import {
    AppBar,
    colors,
    createMuiTheme,
    Fab,
    Fade,
    Grid,
    MuiThemeProvider,
    Toolbar,
    Typography,
    withStyles
} from "@material-ui/core";
import {Icon} from "@iconify/react";
import GoogleChromeIconHover from "@iconify/react/logos/chrome";
import GoogleChromeIcon from "@iconify/react/icomoon-free/chrome";
import MozillaFirefoxIconHover from "@iconify/react/logos/firefox";
import MozillaFirefoxIcon from "@iconify/react/icomoon-free/firefox";
import MicrosoftEdgeHover from "@iconify/react/logos/microsoft-edge";
import MicrosoftEdgeIcon from "@iconify/react/icomoon-free/edge";
import SafariIconHover from "@iconify/react/logos/safari";
import SafariIcon from "@iconify/react/icomoon-free/safari";
import OperaIconHover from "@iconify/react/logos/opera";
import OperaIcon from "@iconify/react/icomoon-free/opera";
import WindowsIcon from "@iconify/react/fa-brands/windows";
import AppleIcon from "@iconify/react/fa-brands/apple";
import LinuxIcon from "@iconify/react/fa-brands/linux";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.blueGrey[900]
        },
        secondary: {
            main: colors.blueGrey[50]
        }
    },
    typography: {
        "fontFamily": "\"Montserrat\", sans-serif",
        useNextVariants: true
    }
});

const styles = () => ({
    appbarNotice: {
        alignItems: "center",
        flex: 1,
        padding: 5,
        textAlign: "center"
    },
    googleChrome: {
        "&:hover": {
            backgroundColor: colors.blueGrey[50],
            backgroundImage: `radial-gradient(#FFFFFF, #F9FAFA, ${colors.blueGrey[50]})`
        },
        backgroundColor: colors.blueGrey[50],
        height: "100vh",
        paddingTop: 50,
        position: "relative",
        textAlign: "center"
    },
    mozillaFirefox: {
        "&:hover": {
            backgroundColor: colors.indigo[900],
            backgroundImage: `radial-gradient(${colors.indigo[700]}, ${colors.indigo[800]}, ${colors.indigo[900]})`
        },
        backgroundColor: colors.indigo[900],
        height: "100vh",
        paddingTop: 50,
        position: "relative",
        textAlign: "center"
    },
    microsoftEdge: {
        "&:hover": {
            backgroundColor: colors.blueGrey[50],
            backgroundImage: `radial-gradient(#FFFFFF, #F9FAFA, ${colors.blueGrey[50]})`
        },
        backgroundColor: colors.blueGrey[50],
        height: "100vh",
        paddingTop: 50,
        position: "relative",
        textAlign: "center"
    },
    safari: {
        "&:hover": {
            backgroundColor: colors.blueGrey[900],
            backgroundImage: `radial-gradient(${colors.blueGrey[700]}, ${colors.blueGrey[800]}, ${colors.blueGrey[900]})`
        },
        backgroundColor: colors.blueGrey[900],
        height: "100vh",
        paddingTop: 50,
        position: "relative",
        textAlign: "center"
    },
    opera: {
        "&:hover": {
            backgroundColor: colors.blueGrey[50],
            backgroundImage: `radial-gradient(#FFFFFF, #F9FAFA, ${colors.blueGrey[50]})`
        },
        backgroundColor: colors.blueGrey[50],
        height: "100vh",
        paddingTop: 50,
        position: "relative",
        textAlign: "center"
    },
    browserIcon: {
        marginBottom: 50,
        marginTop: 50
    },
    browserSection: {
        opacity: 0,
        transition: "width 2s",
        "-webkit-transition": "width 2s"
    },
    browserSectionOnHover: {
        opacity: 1,
        transition: "width 2s",
        "-webkit-transition": "width 2s"
    },
    downloadBrowser: {
        marginTop: 50
    },
    availableOnlyWith: {
        marginTop: 25
    },
    availableFor: {
        bottom: 75,
        position: "absolute",
        width: "100%"
    },
    availableForIcon: {
        margin: 5
    }
});

const BROWSER_HOVERED = {
    GOOGLE_CHROME: 0,
    MOZILLA_FIREFOX: 1,
    MICROSOFT_EDGE: 2,
    SAFARI: 3,
    OPERA: 4
};

class UnsupportedBrowser extends Component {

    constructor(props) {
        super(props);
        const {GOOGLE_CHROME, MOZILLA_FIREFOX, MICROSOFT_EDGE, SAFARI, OPERA} = BROWSER_HOVERED;
        const {classes} = props;
        this.state = {
            browserHovered: null,
            browsers: [
                {
                    key: 0,
                    class: classes.googleChrome,
                    backgroundColor: colors.blueGrey[50],
                    colorScheme: "primary",
                    marketShare: "69.51%",
                    browserHovered: GOOGLE_CHROME,
                    browserName: "Google Chrome",
                    browserIcon: GoogleChromeIcon,
                    browserIconHovered: GoogleChromeIconHover,
                    downloadLink: "https://www.google.com/chrome/browser/desktop/",
                    availableForIcons: [WindowsIcon, AppleIcon, LinuxIcon],
                    availableForIconColors: colors.blueGrey[900]
                },
                {
                    key: 1,
                    class: classes.mozillaFirefox,
                    backgroundColor: colors.indigo[500],
                    colorScheme: "secondary",
                    marketShare: "9.57%",
                    browserHovered: MOZILLA_FIREFOX,
                    browserName: "Mozilla Firefox",
                    browserIcon: MozillaFirefoxIcon,
                    browserIconHovered: MozillaFirefoxIconHover,
                    downloadLink: "http://www.mozilla.org/firefox/new/",
                    availableForIcons: [WindowsIcon, AppleIcon, LinuxIcon],
                    availableForIconColors: colors.blueGrey[50]
                },
                {
                    key: 2,
                    class: classes.microsoftEdge,
                    backgroundColor: colors.blueGrey[50],
                    colorScheme: "primary",
                    marketShare: "4.56%",
                    browserHovered: MICROSOFT_EDGE,
                    browserName: "Microsoft Edge",
                    browserIcon: MicrosoftEdgeIcon,
                    browserIconHovered: MicrosoftEdgeHover,
                    downloadButtonText: "Download Win10",
                    downloadLink: "https://www.microsoft.com/software-download/windows10",
                    availableOnlyWithText: "Available only with Windows 10",
                    availableForIcons: [WindowsIcon],
                    availableForIconColors: colors.blueGrey[900]
                },
                {
                    key: 3,
                    class: classes.safari,
                    backgroundColor: colors.blueGrey[900],
                    colorScheme: "secondary",
                    marketShare: "6.44%",
                    browserHovered: SAFARI,
                    browserName: "Safari",
                    browserIcon: SafariIcon,
                    browserIconHovered: SafariIconHover,
                    downloadButtonText: "Download Mac Os",
                    downloadLink: "http://www.apple.com/osx/",
                    availableOnlyWithText: "Available only with macOS",
                    availableForIcons: [AppleIcon],
                    availableForIconColors: colors.blueGrey[50]
                },
                {
                    key: 5,
                    class: classes.opera,
                    backgroundColor: colors.blueGrey[50],
                    colorScheme: "primary",
                    marketShare: "2.43%",
                    browserHovered: OPERA,
                    browserName: "Opera",
                    browserIcon: OperaIcon,
                    browserIconHovered: OperaIconHover,
                    downloadLink: "https://www.opera.com/",
                    availableForIcons: [WindowsIcon, AppleIcon, LinuxIcon],
                    availableForIconColors: colors.blueGrey[900]
                }
            ]
        };
    }

    setBrowserHovered = browser => this.setState({browserHovered: browser});

    resetBrowserHovered = () => this.setState({browserHovered: null});

    openBrowserDownloadPage = link => window.open(link, "", "", false);

    render() {
        const {classes} = this.props;
        const {browserHovered, browsers} = this.state;
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <AppBar className={classes.appbarNotice} color="secondary" position="sticky">
                        <Toolbar disableGutters={true} variant="dense">
                            <Typography color="primary" variant="h6">
                                OUTDATED BROWSER<br/>PLEASE UPGRADE YOUR WEB BROWSER TO VIEW THIS SITE
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Grid alignContent="center" alignItems="center" container>

                        {browsers.map(browser => {
                            return (
                                <Grid className={browser.class} item key={browser.key} lg md={12}
                                      onMouseEnter={() => this.setBrowserHovered(browser.browserHovered)}
                                      onMouseLeave={this.resetBrowserHovered} sm={12} xs={12}>
                                    <Fade in={browserHovered === browser.browserHovered} timeout={{enter: 500}}>
                                        <div>
                                            <Typography color={browser.colorScheme} gutterBottom={true} variant="h2">
                                                {browser.marketShare}
                                            </Typography>
                                            <Typography color={browser.colorScheme} variant="body1">
                                                PEOPLE ARE USING<br/>THIS BROWSER
                                            </Typography>
                                        </div>
                                    </Fade>
                                    <Icon className={classes.browserIcon}
                                          color={browserHovered !== browser.browserHovered ? browser.availableForIconColors : ""}
                                          height={96}
                                          icon={browserHovered === browser.browserHovered ? browser.browserIconHovered : browser.browserIcon}
                                          width={96}/>
                                    <Typography color={browser.colorScheme} variant="button">
                                        {browser.browserName}
                                    </Typography>
                                    <Fade in={browserHovered === browser.browserHovered} timeout={{enter: 500}}>
                                        <Fab aria-label="Download" className={classes.downloadBrowser}
                                             color={browser.colorScheme}
                                             onClick={() => this.openBrowserDownloadPage(browser.downloadLink)}
                                             variant="extended">
                                            {browser.downloadButtonText ? browser.downloadButtonText : "Download"}
                                        </Fab>
                                    </Fade>
                                    {browser.availableOnlyWithText &&
                                    <div className={classes.availableOnlyWith}>
                                        <Fade in={browserHovered === browser.browserHovered} timeout={{enter: 500}}>
                                            <Typography color={browser.colorScheme}
                                                        gutterBottom={true}
                                                        variant="caption">
                                                {browser.availableOnlyWithText}
                                            </Typography>
                                        </Fade>
                                    </div>}
                                    <div className={classes.availableFor}>
                                        <Typography color={browser.colorScheme} gutterBottom={true} variant="overline">
                                            Available for
                                        </Typography>
                                        {browser.availableForIcons.map((icon, index) => {
                                            return (
                                                <Icon className={classes.availableForIcon}
                                                      color={browser.availableForIconColors}
                                                      height={24} icon={icon} key={index} width={24}/>
                                            )
                                        })}
                                    </div>
                                </Grid>
                            )
                        })}
                    </Grid>
                </MuiThemeProvider>
            </div>
        );
    }

}

export default withStyles(styles)(UnsupportedBrowser);