import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Avatar,
    Chip,
    Fade,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Slide,
    Tooltip,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {setActionMessage, updateComponentDistancesToTop, updateSkills} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import {ProjectIcon} from "./media/ProjectIcon";
import {VisioIcon} from "./media/VisioIcon";
import {CPlusPlusIcon} from "./media/CPlusPlusIcon";
import {CSharpIcon} from "./media/CSharpIcon";
import {Icon} from '@iconify/react';

import JavaIcon from '@iconify/react/logos/java';
import KotlinIcon from '@iconify/react/logos/kotlin';
import XmlIcon from '@iconify/react/mdi/file-xml';
import JavaScriptIcon from '@iconify/react/logos/javascript';
import ReactIcon from '@iconify/react/logos/react';
import AngularIcon from '@iconify/react/logos/angular-icon';
import PhpIcon from '@iconify/react/logos/php';
import HtmlIcon from '@iconify/react/logos/html-5';
import CssIcon from '@iconify/react/logos/css-3';

import AndroidStudioIcon from '@iconify/react/flat-color-icons/android-os';
import IntelliJIdeaIcon from '@iconify/react/logos/intellij-idea';
import FirebaseIcon from '@iconify/react/logos/firebase';
import EclipseIcon from '@iconify/react/logos/eclipse';
import WordPressIcon from '@iconify/react/dashicons/wordpress';
import AdobeCsIcon from '@iconify/react/fa-brands/adobe';
import MicrosoftOfficeIcon from '@iconify/react/whh/microsoftoffice';
import VisualStudioIcon from '@iconify/react/logos/visual-studio';
import UnrealEngineIcon from '@iconify/react/mdi/unreal';

import DecisionIcon from '@iconify/react/mdi/arrow-decision';
import HandshakeIcon from '@iconify/react/vaadin/handshake';
import TeamIcon from '@iconify/react/ant-design/team-outline';
import PriorityIcon from '@iconify/react/ic/priority-high';
import PresentingIcon from '@iconify/react/mdi/presentation-play';
import {actionMessageType} from "../utils/ActionMessage";

const styles = theme => ({
    avatarBackground: {
        backgroundColor: "#fff",
        borderColor: "#bdbdbd",
        borderStyle: "solid",
        borderWidth: "0.5px"
    },
    border: {
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth: "1px"
    },
    chip: {
        margin: theme.spacing.unit
    },
    chipContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    icon: {
        margin: theme.spacing.unit * 2
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4
    },
    technicalSkillSubtitle: {
        fontWeight: "bold",
        textAlign: "center"
    }
});

const mapStateToProps = state => {
    return {skillsComponent: state.navigation.skillsComponent, touchScreen: state.touchScreen.isTouchScreen};
};

const mapDispatchToProps = dispatch => {
    return {
        updateComponentDistancesToTop: update => dispatch(updateComponentDistancesToTop(update)),
        updateSkills: dimensions => dispatch(updateSkills(dimensions)),
        setActionMessage: actionMessageContent => dispatch(setActionMessage(actionMessageContent))
    }
};

class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personalSkills: [
                {key: 0, label: 'Decision making, analytical skills and problem-solving', icon: DecisionIcon},
                {
                    key: 1,
                    label: 'Communications, negotiation, relationship building and influencing',
                    icon: HandshakeIcon
                },
                {
                    key: 2,
                    label: 'Teamwork, staff leadership, stakeholder engagement and performance management',
                    icon: TeamIcon
                },
                {key: 3, label: 'Ability to prioritise and work under pressure', icon: PriorityIcon},
                {
                    key: 4,
                    label: 'Commercial account management, presenting (including TV) and sales reporting, including KPIs',
                    icon: PresentingIcon
                }
            ],
            programmingSkills: [
                {
                    key: 0, label: 'Java', icon: JavaIcon, isCustomIcon: false, link: "https://www.java.com"
                },
                {key: 1, label: 'Kotlin', icon: KotlinIcon, isCustomIcon: false, link: "https://kotlinlang.org/"},
                {
                    key: 2,
                    label: 'XML',
                    icon: XmlIcon,
                    isCustomIcon: false,
                    link: "https://www.w3.org/TR/REC-xml/",
                    color: "#E07A2E"
                },
                {
                    key: 3,
                    label: 'JavaScript',
                    icon: JavaScriptIcon,
                    isCustomIcon: false,
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                },
                {key: 4, label: 'React', icon: ReactIcon, isCustomIcon: false, link: "https://reactjs.org/"},
                {key: 5, label: 'AngularJS', icon: AngularIcon, isCustomIcon: false, link: "https://angularjs.org/"},
                {key: 6, label: 'PHP', icon: PhpIcon, isCustomIcon: false, link: "http://php.net/"},
                {key: 7, label: 'HTML', icon: HtmlIcon, isCustomIcon: false, link: "https://www.w3.org/html/"},
                {key: 8, label: 'CSS', icon: CssIcon, isCustomIcon: false, link: "https://www.w3.org/TR/CSS/#css"},
                {
                    key: 9,
                    label: 'C#',
                    icon: <CSharpIcon/>,
                    isCustomIcon: true,
                    link: "https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"
                },
                {key: 10, label: 'C++', icon: <CPlusPlusIcon/>, isCustomIcon: true, link: "http://www.cplusplus.com/"}
            ],
            softwareSkills: [
                {
                    key: 0,
                    label: 'Android Studio',
                    icon: AndroidStudioIcon,
                    isCustomIcon: false,
                    link: "https://developer.android.com/studio"
                },
                {
                    key: 1,
                    label: 'IntelliJ IDEA',
                    icon: IntelliJIdeaIcon,
                    isCustomIcon: false,
                    link: "https://www.jetbrains.com/idea/"
                },
                {
                    key: 2,
                    label: 'Firebase',
                    icon: FirebaseIcon,
                    isCustomIcon: false,
                    link: "https://firebase.google.com/"
                },
                {
                    key: 3,
                    label: 'Eclipse',
                    icon: EclipseIcon,
                    isCustomIcon: false,
                    link: "https://www.eclipse.org/ide/"
                },
                {
                    key: 4,
                    label: 'WordPress',
                    icon: WordPressIcon,
                    isCustomIcon: false,
                    color: "#2F73A5",
                    link: "https://en-gb.wordpress.org/"
                },
                {
                    key: 5,
                    label: 'Adobe CS',
                    icon: AdobeCsIcon,
                    isCustomIcon: false,
                    color: "#EB3223",
                    link: "https://www.adobe.com/uk/"
                },
                {
                    key: 6,
                    label: 'Microsoft Office',
                    icon: MicrosoftOfficeIcon,
                    isCustomIcon: false,
                    color: "#C84721",
                    link: ""
                },
                {
                    key: 7,
                    label: 'Visual Studio',
                    icon: VisualStudioIcon,
                    isCustomIcon: false,
                    link: "https://www.office.com/"
                },
                {
                    key: 8,
                    label: 'Project',
                    icon: <ProjectIcon/>,
                    isCustomIcon: true,
                    link: "https://products.office.com/en-gb/project/"
                },
                {
                    key: 9,
                    label: 'Visio',
                    icon: <VisioIcon/>,
                    isCustomIcon: true,
                    link: "https://products.office.com/en-gb/visio/"
                },
                {
                    key: 10,
                    label: 'Unreal Engine',
                    icon: UnrealEngineIcon,
                    isCustomIcon: false,
                    color: "#2A2A2A",
                    link: "https://www.unrealengine.com/en-US/what-is-unreal-engine-4"
                }
            ]
        };
        this.skillsRef = React.createRef();
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
        if (prevProps.skillsComponent.height !== this.skillsRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.resizeEventTimer);
        window.removeEventListener("resize", this.resizeEvent);
    }

    setComponentMeasurements = () => {
        const height = this.skillsRef.current.scrollHeight;
        this.props.updateSkills({height: height});
        this.props.updateComponentDistancesToTop(true);
    };

    handleLinkClick = (isTouchScreen, actionMessageType, link, message) => {
        if (!isTouchScreen) {
            window.open(link, "", "", false);
        } else {
            this.props.setActionMessage({
                actionMessageType: actionMessageType,
                link: link,
                message: message,
                open: true
            });
        }
    };

    render() {
        const {classes, touchScreen} = this.props;
        const {VISIT} = actionMessageType;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <div className={classes.border} ref={this.skillsRef}>
                <Grid alignItems="flex-start" container justify="center" spacing={24}>
                    <Grid item md={6} xs={12}>
                        <Fade in={true} timeout={{enter: 3000}}>
                            <Typography color="secondary" gutterBottom variant={widthSmDown ? "h5" : "h4"}>
                                Technical Skills
                            </Typography>
                        </Fade>
                        <Slide direction="right" in={true} timeout={{enter: 3000}}>
                            <Paper className={classes.paper} square={true}>
                                <Typography className={classes.technicalSkillSubtitle} color="secondary" gutterBottom
                                            variant="overline">
                                    Programming Languages
                                </Typography>
                                <div className={classes.chipContainer}>
                                    {this.state.programmingSkills.map(chip => {
                                        return (
                                            <Tooltip disableHoverListener={touchScreen}
                                                     disableFocusListener={touchScreen}
                                                     disableTouchListener={touchScreen} key={chip.key}
                                                     title="Learn more">
                                                <Chip
                                                    avatar={
                                                        <Avatar className={classes.avatarBackground}>
                                                            {chip.isCustomIcon ? chip.icon :
                                                                <Icon color={chip.color} icon={chip.icon}/>}
                                                        </Avatar>
                                                    }
                                                    className={classes.chip}
                                                    clickable
                                                    color="default"
                                                    label={chip.label}
                                                    onClick={() => this.handleLinkClick(touchScreen, VISIT, chip.link, `Learn more of ${chip.label}`)}
                                                    variant="outlined"
                                                />
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                                <Typography className={classes.technicalSkillSubtitle} color="secondary" gutterBottom
                                            variant="overline">
                                    Software Applications
                                </Typography>
                                <div className={classes.chipContainer}>
                                    {this.state.softwareSkills.map(chip => {
                                        return (
                                            <Tooltip disableHoverListener={touchScreen}
                                                     disableFocusListener={touchScreen}
                                                     disableTouchListener={touchScreen} key={chip.key}
                                                     title="Learn more">
                                                <Chip
                                                    avatar={
                                                        <Avatar className={classes.avatarBackground}>
                                                            {chip.isCustomIcon ? chip.icon :
                                                                <Icon color={chip.color} icon={chip.icon}/>}
                                                        </Avatar>
                                                    }
                                                    className={classes.chip}
                                                    clickable
                                                    color="default"
                                                    label={chip.label}
                                                    onClick={() => this.handleLinkClick(touchScreen, VISIT, chip.link, `Learn more of ${chip.label}`)}
                                                    variant="outlined"
                                                />
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                            </Paper>
                        </Slide>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Fade in={true} timeout={{enter: 3000}}>
                            <Typography color="secondary" gutterBottom variant={widthSmDown ? "h5" : "h4"}>
                                Personal Skills
                            </Typography>
                        </Fade>
                        <Slide direction="left" in={true} timeout={{enter: 3000}}>
                            <Paper className={classes.paper} square={true}>
                                <List dense={true}>
                                    {this.state.personalSkills.map(skill => {
                                        return (
                                            <ListItem key={skill.key}>
                                                <ListItemIcon>
                                                    <Icon height="24px" icon={skill.icon} width="24px"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography color="secondary" variant="body1">
                                                            {skill.label}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Paper>
                        </Slide>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Skills)));