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
import {setActionMessage, updateSkills} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import {Icon} from '@iconify/react';

import AngularMaterialIcon from '@iconify/react/simple-icons/angular';
import AngularIcon from '@iconify/react/logos/angular-icon';
import BootstrapIcon from '@iconify/react/logos/bootstrap';
import {CSharpIcon} from "./media/CSharpIcon";
import {CPlusPlusIcon} from "./media/CPlusPlusIcon";
import CssIcon from '@iconify/react/logos/css-3';
import {GrommetIcon} from "./media/GrommetIcon";
import HtmlIcon from '@iconify/react/logos/html-5';
import JavaIcon from '@iconify/react/logos/java';
import JavaScriptIcon from '@iconify/react/logos/javascript';
import KotlinIcon from '@iconify/react/logos/kotlin';
import PhpIcon from '@iconify/react/logos/php';
import ReactIcon from '@iconify/react/logos/react';
import {ReactMaterialIcon} from "./media/ReactMaterialIcon";
import XmlIcon from '@iconify/react/mdi/file-xml';

import AdobeCsIcon from '@iconify/react/fa-brands/adobe';
import AndroidStudioIcon from '@iconify/react/flat-color-icons/android-os';
import BitbucketIcon from '@iconify/react/logos/bitbucket';
import {BitriseIcon} from './media/BitriseIcon';
import EclipseIcon from '@iconify/react/logos/eclipse';
import FabricIcon from '@iconify/react/logos/fabric-io';
import FirebaseIcon from '@iconify/react/logos/firebase';
import GithubIcon from '@iconify/react/icomoon-free/github';
import GitIcon from '@iconify/react/logos/git-icon';
import IntelliJIdeaIcon from '@iconify/react/logos/intellij-idea';
import MicrosoftOfficeIcon from '@iconify/react/whh/microsoftoffice';
import {ProjectIcon} from "./media/ProjectIcon";
import UnrealEngineIcon from '@iconify/react/mdi/unreal';
import {VisioIcon} from "./media/VisioIcon";
import VisualStudioIcon from '@iconify/react/logos/visual-studio';
import WordPressIcon from '@iconify/react/dashicons/wordpress';

import DecisionIcon from '@iconify/react/mdi/arrow-decision';
import HandshakeIcon from '@iconify/react/vaadin/handshake';
import TeamIcon from '@iconify/react/ant-design/team-outline';
import PriorityIcon from '@iconify/react/ic/priority-high';
import PresentingIcon from '@iconify/react/mdi/presentation-play';
import TechnologyIcon from '@iconify/react/uil/technology';
import {actionMessageType} from "../utils/ActionMessage";

const styles = theme => ({
    avatarBackground: {
        backgroundColor: "#fff",
        borderColor: "#bdbdbd",
        borderStyle: "solid",
        borderWidth: "0.5px"
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
    return {navigation: state.navigation, touchScreen: state.touchScreen.isTouchScreen};
};

const mapDispatchToProps = dispatch => {
    return {
        updateSkills: dimensions => dispatch(updateSkills(dimensions)),
        setActionMessage: actionMessageContent => dispatch(setActionMessage(actionMessageContent))
    }
};

class Skills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personalSkills: [
                {
                    key: 0,
                    label: 'Decision making, analytical skills and problem-solving',
                    icon: DecisionIcon
                },
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
                {
                    key: 3,
                    label: 'Ability to prioritise and work under pressure',
                    icon: PriorityIcon
                },
                {
                    key: 4,
                    label: 'Commercial account management, presenting (including TV) and sales reporting, including KPIs',
                    icon: PresentingIcon
                },
                {
                    key: 5,
                    label: 'Awareness of and willingness to learn new and emerging technologies',
                    icon: TechnologyIcon
                }
            ],
            programmingSkills: [
                {
                    key: 0,
                    label: 'Angular Material',
                    icon: AngularMaterialIcon,
                    isCustomIcon: false,
                    link: "https://material.angular.io/",
                    color: "#3F51B5"
                },
                {
                    key: 1,
                    label: 'AngularJS',
                    icon: AngularIcon,
                    isCustomIcon: false,
                    link: "https://angularjs.org/"
                },
                {
                    key: 2,
                    label: 'Bootstrap',
                    icon: BootstrapIcon,
                    isCustomIcon: false,
                    link: "https://getbootstrap.com/"
                },
                {
                    key: 3,
                    label: 'C#',
                    icon: <CSharpIcon/>,
                    isCustomIcon: true,
                    link: "https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"
                },
                {
                    key: 4,
                    label: 'C++',
                    icon: <CPlusPlusIcon/>,
                    isCustomIcon: true,
                    link: "http://www.cplusplus.com/"
                },
                {
                    key: 5,
                    label: 'CSS',
                    icon: CssIcon,
                    isCustomIcon: false,
                    link: "https://www.w3.org/TR/CSS/#css"
                },
                {
                    key: 6,
                    label: 'Grommet',
                    icon: <GrommetIcon/>,
                    isCustomIcon: true,
                    link: "https://v2.grommet.io/"
                },
                {
                    key: 7,
                    label: 'HTML',
                    icon: HtmlIcon,
                    isCustomIcon: false,
                    link: "https://www.w3.org/html/"
                },
                {
                    key: 8,
                    label: 'Java',
                    icon: JavaIcon,
                    isCustomIcon: false,
                    link: "https://www.java.com"
                },
                {
                    key: 9,
                    label: 'JavaScript',
                    icon: JavaScriptIcon,
                    isCustomIcon: false,
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                },
                {
                    key: 10,
                    label: 'Kotlin',
                    icon: KotlinIcon,
                    isCustomIcon: false,
                    link: "https://kotlinlang.org/"
                },
                {
                    key: 11,
                    label: 'PHP',
                    icon: PhpIcon,
                    isCustomIcon: false,
                    link: "http://php.net/"
                },
                {
                    key: 12,
                    label: 'React',
                    icon: ReactIcon,
                    isCustomIcon: false,
                    link: "https://reactjs.org/"
                },
                {
                    key: 13,
                    label: 'React Material',
                    icon: <ReactMaterialIcon/>,
                    isCustomIcon: true,
                    link: "https://material-ui.com/"
                },
                {
                    key: 14,
                    label: 'XML',
                    icon: XmlIcon,
                    isCustomIcon: false,
                    link: "https://material-ui.com/",
                    color: "#E07A2E"
                }
            ],
            softwareSkills: [
                {
                    key: 0,
                    label: 'Adobe CS',
                    icon: AdobeCsIcon,
                    isCustomIcon: false,
                    color: "#EB3223",
                    link: "https://www.adobe.com/uk/"
                },
                {
                    key: 1,
                    label: 'Android Studio',
                    icon: AndroidStudioIcon,
                    isCustomIcon: false,
                    link: "https://developer.android.com/studio"
                },
                {
                    key: 3,
                    label: 'Bitbucket',
                    icon: BitbucketIcon,
                    isCustomIcon: false,
                    link: "https://bitbucket.org"
                },
                {
                    key: 4,
                    label: 'Bitrise',
                    icon: <BitriseIcon/>,
                    isCustomIcon: true,
                    link: "https://www.bitrise.io/"
                },
                {
                    key: 5,
                    label: 'Eclipse',
                    icon: EclipseIcon,
                    isCustomIcon: false,
                    link: "https://www.eclipse.org/ide/"
                },
                {
                    key: 6,
                    label: 'Fabric',
                    icon: FabricIcon,
                    isCustomIcon: false,
                    link: "https://get.fabric.io"
                },
                {
                    key: 7,
                    label: 'Firebase',
                    icon: FirebaseIcon,
                    isCustomIcon: false,
                    link: "https://firebase.google.com/"
                },
                {
                    key: 8,
                    label: 'Git',
                    icon: GitIcon,
                    isCustomIcon: false,
                    link: "https://git-scm.com/"
                }, {
                    key: 9,
                    label: 'Github',
                    icon: GithubIcon,
                    isCustomIcon: false,
                    color: "#6e5494",
                    link: "https://github.com/"
                },
                {
                    key: 10,
                    label: 'IntelliJ IDEA',
                    icon: IntelliJIdeaIcon,
                    isCustomIcon: false,
                    link: "https://www.jetbrains.com/idea/"
                },
                {
                    key: 11,
                    label: 'Microsoft Office',
                    icon: MicrosoftOfficeIcon,
                    isCustomIcon: false,
                    color: "#C84721",
                    link: ""
                },
                {
                    key: 12,
                    label: 'Project',
                    icon: <ProjectIcon/>,
                    isCustomIcon: true,
                    link: "https://products.office.com/en-gb/project/"
                },
                {
                    key: 13,
                    label: 'Unreal Engine',
                    icon: UnrealEngineIcon,
                    isCustomIcon: false,
                    color: "#2A2A2A",
                    link: "https://www.unrealengine.com/en-US/what-is-unreal-engine-4"
                },
                {
                    key: 14,
                    label: 'Visio',
                    icon: <VisioIcon/>,
                    isCustomIcon: true,
                    link: "https://products.office.com/en-gb/visio/"
                },
                {
                    key: 15,
                    label: 'Visual Studio',
                    icon: VisualStudioIcon,
                    isCustomIcon: false,
                    link: "https://www.office.com/"
                },
                {
                    key: 16,
                    label: 'WordPress',
                    icon: WordPressIcon,
                    isCustomIcon: false,
                    color: "#2F73A5",
                    link: "https://en-gb.wordpress.org/"
                }
            ]
        };
        this.skillsRef = React.createRef();
        this.resizeEventTimer = null;
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeEvent);
        window.addEventListener("load", this.setComponentMeasurements);
    }

    resizeEvent = () => {
        clearTimeout(this.resizeEventTimer);
        this.resizeEventTimer = setTimeout(() => {
            this.setComponentMeasurements();
        }, 250);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.navigation.skillsComponent.height !== this.skillsRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.resizeEventTimer);
        window.removeEventListener("resize", this.resizeEvent);
    }

    setComponentMeasurements = () => {
        const contentStartPoint = isWidthDown("xs", this.props.width) ? 100 : 200;
        const {appBarComponent} = this.props.navigation;
        const height = this.skillsRef.current.scrollHeight;
        const distanceToTop = this.skillsRef.current.offsetTop + (contentStartPoint - appBarComponent.height);
        this.props.updateSkills({height: height, distanceToTop: distanceToTop});
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
        const {programmingSkills, softwareSkills, personalSkills} = this.state;
        const {LEARN_MORE} = actionMessageType;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <div ref={this.skillsRef}>
                <Grid alignItems="flex-start" container justify="center" spacing={24}>
                    <Grid item md={6} xs={12}>
                        <Fade in={true} timeout={{enter: 3000}}>
                            <Typography color="secondary" gutterBottom variant={widthSmDown ? "h5" : "h4"}>
                                Technical Skills
                            </Typography>
                        </Fade>
                        <Slide direction="right" in={true} timeout={{enter: 3000}}>
                            <Paper className={classes.paper} square={true}>
                                <Typography className={classes.technicalSkillSubtitle} color="secondary"
                                            variant="overline">
                                    Programming Languages & Frameworks
                                </Typography>
                                <div className={classes.chipContainer}>
                                    {programmingSkills.map(chip => {
                                        return (
                                            <Tooltip disableHoverListener={touchScreen}
                                                     disableFocusListener={touchScreen}
                                                     disableTouchListener={touchScreen} key={chip.key}
                                                     title={`Learn more about ${chip.label}`}>
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
                                                    onClick={() => this.handleLinkClick(touchScreen, LEARN_MORE, chip.link, chip.label)}
                                                    variant="outlined"
                                                />
                                            </Tooltip>
                                        );
                                    })}
                                </div>
                                <Typography className={classes.technicalSkillSubtitle} color="secondary"
                                            variant="overline">
                                    Software Applications & Services
                                </Typography>
                                <div className={classes.chipContainer}>
                                    {softwareSkills.map(chip => {
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
                                                    onClick={() => this.handleLinkClick(touchScreen, LEARN_MORE, chip.link, chip.label)}
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
                                    {personalSkills.map(skill => {
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