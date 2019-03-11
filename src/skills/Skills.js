import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Avatar,
    Chip,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {updateSkills} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import {ProjectIcon} from "./media/ProjectIcon";
import {VisioIcon} from "./media/VisioIcon";
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
import EclipseIcon from '@iconify/react/logos/eclipse';
import WordPressIcon from '@iconify/react/dashicons/wordpress';
import AdobeCsIcon from '@iconify/react/fa-brands/adobe';
import MicrosoftOfficeIcon from '@iconify/react/whh/microsoftoffice';
import VisualStudioIcon from '@iconify/react/logos/visual-studio';

import DecisionIcon from '@iconify/react/mdi/arrow-decision';
import HandshakeIcon from '@iconify/react/vaadin/handshake';
import TeamIcon from '@iconify/react/ant-design/team-outline';
import PriorityIcon from '@iconify/react/ic/priority-high';
import PresentingIcon from '@iconify/react/mdi/presentation-play';

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

const mapDispatchToProps = dispatch => {
    return {updateSkills: dimensions => dispatch(updateSkills(dimensions))}
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
                {key: 0, label: 'Java', icon: JavaIcon, link: "https://www.java.com"},
                {key: 1, label: 'Kotlin', icon: KotlinIcon, link: "https://kotlinlang.org/"},
                {key: 2, label: 'XML', icon: XmlIcon, link: "https://www.w3.org/TR/REC-xml/", color: "#E07A2E"},
                {
                    key: 3,
                    label: 'JavaScript',
                    icon: JavaScriptIcon,
                    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                },
                {key: 4, label: 'React', icon: ReactIcon, link: "https://reactjs.org/"},
                {key: 5, label: 'AngularJS', icon: AngularIcon, link: "https://angularjs.org/"},
                {key: 6, label: 'PHP', icon: PhpIcon, link: "http://php.net/"},
                {key: 7, label: 'HTML', icon: HtmlIcon, link: "https://www.w3.org/html/"},
                {key: 8, label: 'CSS', icon: CssIcon, link: "https://www.w3.org/TR/CSS/#css"}
            ],
            softwareSkills: [
                {
                    key: 0,
                    label: 'Android Studio',
                    icon: AndroidStudioIcon,
                    link: "https://developer.android.com/studio"
                },
                {key: 1, label: 'IntelliJ IDEA', icon: IntelliJIdeaIcon, link: "https://www.jetbrains.com/idea/"},
                {key: 2, label: 'Eclipse', icon: EclipseIcon, link: "https://www.eclipse.org/ide/"},
                {
                    key: 3,
                    label: 'WordPress',
                    icon: WordPressIcon,
                    color: "#2F73A5",
                    link: "https://en-gb.wordpress.org/"
                },
                {key: 4, label: 'Adobe CS', icon: AdobeCsIcon, color: "#EB3223", link: "https://www.adobe.com/uk/"},
                {key: 5, label: 'Microsoft Office', icon: MicrosoftOfficeIcon, color: "#C84721", link: ""},
                {key: 6, label: 'Visual Studio', icon: VisualStudioIcon, link: "https://www.office.com/"},
                {key: 7, label: 'Project', icon: null, link: "https://products.office.com/en-gb/project/"},
                {key: 8, label: 'Visio', icon: null, link: "https://products.office.com/en-gb/visio/"}
            ]
        };
        this.skillsRef = React.createRef();
    }

    componentDidMount() {
        this.setComponentMeasurements();
    }

    setComponentMeasurements = () => {
        const height = this.skillsRef.current.scrollHeight;
        const distanceToTop = this.skillsRef.current.offsetTop;
        this.props.updateSkills({height, distanceToTop});
    };

    openLink = url => window.open(url, "", "", false);

    render() {
        const {classes} = this.props;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <div ref={this.skillsRef}>
                <Grid alignItems="flex-start" container justify="center" spacing={24}>
                    <Grid item md={6}>
                        <Typography color="secondary" gutterBottom variant={widthSmDown ? "h5" : "h4"}>
                            Technical Skills
                        </Typography>
                        <Paper className={classes.paper} square={true}>
                            <Typography className={classes.technicalSkillSubtitle} color="secondary" gutterBottom
                                        variant="overline">
                                Programming Languages
                            </Typography>
                            <div className={classes.chipContainer}>
                                {this.state.programmingSkills.map(chip => {
                                    return (
                                        <Chip
                                            avatar={
                                                <Avatar className={classes.avatarBackground}>
                                                    <Icon color={chip.color} icon={chip.icon}/>
                                                </Avatar>
                                            }
                                            className={classes.chip}
                                            clickable
                                            color="default"
                                            key={chip.key}
                                            label={chip.label}
                                            onClick={() => this.openLink(chip.link)}
                                            variant="outlined"
                                        />
                                    );
                                })}
                            </div>
                            <Typography className={classes.technicalSkillSubtitle} color="secondary" gutterBottom
                                        variant="overline">
                                Software Applications
                            </Typography>
                            <div className={classes.chipContainer}>
                                {this.state.softwareSkills.map(chip => {
                                    let icon = null;
                                    switch (chip.label) {
                                        case "Project":
                                            icon = <ProjectIcon/>;
                                            break;
                                        case "Visio":
                                            icon = <VisioIcon/>;
                                            break;
                                        default:
                                            icon = <Icon color={chip.color} icon={chip.icon}/>;
                                            break;
                                    }
                                    return (
                                        <Chip
                                            avatar={
                                                <Avatar className={classes.avatarBackground}>
                                                    {icon}
                                                </Avatar>
                                            }
                                            className={classes.chip}
                                            clickable
                                            color="default"
                                            key={chip.key}
                                            label={chip.label}
                                            onClick={() => this.openLink(chip.link)}
                                            variant="outlined"
                                        />
                                    );
                                })}
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Typography color="secondary" gutterBottom variant={widthSmDown ? "h5" : "h4"}>
                            Personal Skills
                        </Typography>
                        <Paper className={classes.paper}>
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
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withWidth()(withStyles(styles)(connect(null, mapDispatchToProps)(Skills)));