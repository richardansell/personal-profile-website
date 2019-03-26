import React, {Component} from "react";
import {connect} from "react-redux";
import {isWidthDown} from "@material-ui/core/withWidth";
import {
    colors,
    Grid,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Toolbar,
    Tooltip,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import {updateComponentDistancesToTop, updateExperience} from "../redux/actions";
import CodeIcon from '@iconify/react/fe/code';
import MubalooLogo from "./media/mubaloo-logo.svg";
import BathCollegeLogo from "./media/bath-college-logo.svg";
import VaxLogo from "./media/vax-logo.svg";
import IdeaOfTheYear2006AwardOne from "./media/idea-of-the-year-2006-award-one.jpeg";
import IdeaOfTheYear2006AwardTwo from "./media/idea-of-the-year-2006-award-two.jpeg";
import IdeaOfTheQuarter2008Award from "./media/idea-of-the-quarter-2008-award.jpeg";
import {Icon} from "@iconify/react";
import CardMediaSingle, {mediaType} from "../utils/CardMediaSingle";

const styles = () => ({
    border: {
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth: "1px"
    },
    card: {
        marginTop: 20,
        maxWidth: 500
    },
    companyLogo: {
        cursor: "pointer"
    },
    companyTitle: {
        flexGrow: 1
    },
    descriptionBottomMargin: {
        marginBottom: 20
    },
    noteBottomMargin: {
        marginTop: 30
    },
    media: {
        height: 200
    }
});

const mapStateToProps = state => {
    return {experienceComponent: state.navigation.experienceComponent};
};

const mapDispatchToProps = dispatch => {
    return {
        updateComponentDistancesToTop: update => dispatch(updateComponentDistancesToTop(update)),
        updateExperience: dimensions => dispatch(updateExperience(dimensions)),
    }
};

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            positions: [
                {
                    key: 0,
                    company: "Freelance Work",
                    logo: CodeIcon,
                    logoDetails: {
                        height: 48,
                        iconColor: colors.blueGrey[900],
                        isIcon: true,
                        width: 48
                    },
                    role: "Android / Front End Developer - Self-Employed",
                    dates: "2012 - " + new Date().getFullYear(),
                    description: "Created and deployed over 20 Android mobile applications to the major app stores (Google Play Store and Amazon Appstore) built using Android Studio; achieving in excess of 250,000 downloads and maintaining 'Top 10' app-store rankings for broad keywords. Additional development work has included the creation and maintenance of several websites for various clients, built in React and WordPress.",
                    link: null,
                    mediaAvailable: false
                },
                {
                    key: 1,
                    company: "Mubaloo",
                    logo: MubalooLogo,
                    logoDetails: {
                        height: 80,
                        isIcon: false,
                        width: 80
                    },
                    role: "Junior Android Developer",
                    dates: "2018",
                    description: "Developed Android applications as per specifications for various clients within an Agile environment, including banking, investment and transport applications.",
                    link: "https://mubaloo.com/",
                    mediaAvailable: false
                },
                {
                    key: 2,
                    company: "Bath College",
                    logo: BathCollegeLogo,
                    logoDetails: {
                        height: 80,
                        isIcon: false,
                        width: 80
                    },
                    role: "Lecturer (Information Technology) - Self-Employed",
                    dates: "2017 - 2019",
                    description: "Delivered interactive lectures to groups of students from levels 3 to 5, including Java and Android programming.",
                    link: "https://www.bathcollege.ac.uk/",
                    mediaAvailable: false
                },
                {
                    key: 3,
                    company: "Vax Limited",
                    logo: VaxLogo,
                    logoDetails: {
                        height: 48,
                        isIcon: false,
                        width: 48
                    },
                    role: "Territory Manager",
                    dates: "2013 - 2014",
                    description: "Provided leadership, motivation and strategic direction to a team of demonstrators to support key accounts.",
                    link: "https://www.vax.co.uk/",
                    mediaAvailable: false
                },
                {
                    key: 4,
                    company: "Vax Limited",
                    logo: VaxLogo,
                    logoDetails: {
                        height: 48,
                        isIcon: false,
                        width: 48
                    },
                    role: "Field Support Executive",
                    dates: "2010 - 2013",
                    description: "Supported the National Field Sales Manager by merchandising displays and delivering training programmes.",
                    link: "https://www.vax.co.uk/",
                    mediaAvailable: true,
                    media: {
                        cardTitle: "Highlights",
                        cycleOnlyMedia: false,
                        items: [
                            {
                                key: 0,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/AYwpzcl_B-A"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My sixth QVC appearance with presenter Miceal Murphy."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 1,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/W_C4fOG3ijI"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My seventh QVC appearance with presenter Simon Biagi."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 2,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/cjokUDILrnM"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My eighth QVC appearance with presenter Julia Roberts."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 3,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/jwnzzDPEcts"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My ninth QVC appearance with presenter Simon Biagi."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 4,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/j0-vodPFDK4"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My tenth QVC appearance with presenter Debbie Flint."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 5,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/AOd4VgTgWnY"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My eleventh QVC appearance with presenter Dale Franklin."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 6,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/p3iKKSvD28k"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My twelfth QVC appearance with presenter Dale Franklin."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            }
                        ]
                    }
                },
                {
                    key: 5,
                    company: "Vax Limited",
                    logo: VaxLogo,
                    logoDetails: {
                        height: 48,
                        isIcon: false,
                        width: 48
                    },
                    role: "Training Officer",
                    dates: "2008 - 2010",
                    description: "Introduced a highly-structured induction programme alongside carrying out product training across the company.",
                    link: "https://www.vax.co.uk/",
                    mediaAvailable: false
                },
                {
                    key: 6,
                    company: "Vax Limited",
                    logo: VaxLogo,
                    logoDetails: {
                        height: 48,
                        isIcon: false,
                        width: 48
                    },
                    role: "Sales and Events Executive",
                    dates: "2007 - 2008",
                    description: "Planned all aspects of the company exhibitions at various venues across the UK, including setting up and managing the Ideal Home Show at Earl’s Court, alongside overseeing staff training and incentivisation.",
                    link: "https://www.vax.co.uk/",
                    mediaAvailable: true,
                    media: {
                        cardTitle: "Highlights",
                        cycleOnlyMedia: false,
                        items: [
                            {
                                key: 0,
                                cardMedia: {
                                    mediaType: mediaType.IMAGE,
                                    alt: "Idea of the Quarter 2008 Award",
                                    media: IdeaOfTheQuarter2008Award
                                },
                                cardContent: {
                                    title: "Idea of the Quarter 2008 Award",
                                    description: "Developed a cost-saving initiative and was given ‘Idea of the Quarter’ award by the Board of Directors."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            }
                        ]
                    }
                },
                {
                    key: 7,
                    company: "Vax Limited",
                    logo: VaxLogo,
                    logoDetails: {
                        height: 48,
                        isIcon: false,
                        width: 48
                    },
                    role: "Commercial Account Manager",
                    dates: "2007",
                    description: "Travelled extensively across the UK visiting prospective customers to present Vax’s new commercial product range, alongside opening and managing new commercial accounts.",
                    link: "https://www.vax.co.uk/",
                    mediaAvailable: true,
                    media: {
                        cardTitle: "Highlights",
                        cycleOnlyMedia: false,
                        items: [
                            {
                                key: 0,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/G4GZKIOFxyY"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My first QVC appearance with presenter Catherine Huntley!"
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 1,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/RlMQRSj4kdU"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My second QVC appearance with presenter Jilley Halliday."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 2,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/nJFoMTWTunc"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My third QVC appearance with presenter Claudia Sylvester."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 3,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/6ExalnrEkVs"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My fourth QVC appearance with presenter Claudia Sylvester."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            },
                            {
                                key: 4,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "QVC Live Guest Appearance",
                                    media: "https://www.youtube.com/embed/B6u6rYx_ON4"
                                },
                                cardContent: {
                                    title: "QVC Live Guest Appearance",
                                    description: "My fifth QVC appearance with presenter Julian Ballantyne."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            }
                        ]
                    }
                },
                {
                    key: 8,
                    company: "Vax Limited",
                    logo: VaxLogo,
                    logoDetails: {
                        height: 48,
                        isIcon: false,
                        width: 48
                    },
                    role: "Regional Sales and Merchandising Executive (UK-wide)",
                    dates: "2005 - 2007",
                    description: "Reinforced brand presence in retail stores merchandising product displays, organising and carrying out staff training events and conducted product demonstrations.",
                    link: "https://www.vax.co.uk/",
                    mediaAvailable: true,
                    media: {
                        cardTitle: "Highlights",
                        cycleOnlyMedia: true,
                        items: [
                            {
                                key: 0,
                                cardMedia: [
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Idea of the Year 2006 Award",
                                        media: IdeaOfTheYear2006AwardOne
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Idea of the Year 2006 Award",
                                        media: IdeaOfTheYear2006AwardTwo
                                    }
                                ],
                                cardContent: {
                                    title: "Idea of the Year 2006 Award",
                                    description: "Received ‘Idea of the Year’ award by the Board of Directors in recognition of innovation and creativity."
                                },
                                cardAction: {
                                    link: null,
                                    iconButtonsAvailable: false
                                }
                            }
                        ]
                    }
                }
            ]
        };
        this.experienceRef = React.createRef();
    }

    componentDidMount() {
        this.setComponentMeasurements();
        window.addEventListener('resize', this.setComponentMeasurements);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.experienceComponent.height !== this.experienceRef.current.scrollHeight) {
            this.setComponentMeasurements();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setComponentMeasurements);
    }

    setComponentMeasurements = () => {
        const height = this.experienceRef.current.scrollHeight;
        this.props.updateExperience({height: height});
        this.props.updateComponentDistancesToTop(true);
    };

    render() {
        const {classes} = this.props;
        const widthSmDown = isWidthDown("sm", this.props.width);
        return (
            <div className={classes.border} ref={this.experienceRef}>
                <Grid alignItems="flex-start" container justify="center" spacing={24}>
                    <Grid item md={12} xs={12}>
                        <Typography color="secondary" gutterBottom variant={widthSmDown ? "h5" : "h4"}>
                            Experience
                        </Typography>
                        <Stepper elevation={2} orientation="vertical" square={true}>
                            {this.state.positions.map(position => {
                                return (
                                    <Step active key={position.key}>
                                        <StepLabel icon={
                                            <Tooltip
                                                disableFocusListener={position.link === null}
                                                disableHoverListener={position.link === null}
                                                disableTouchListener={position.link === null}
                                                title={"Visit " + position.company + " website"}>
                                                {position.logoDetails.isIcon ?
                                                    <Icon color={position.logoDetails.iconColor}
                                                          height={position.logoDetails.height} icon={position.logo}
                                                          width={position.logoDetails.width}/>
                                                    :
                                                    <img alt={position.company}
                                                         className={classes.companyLogo}
                                                         height={position.logoDetails.height}
                                                         onClick={() => window.open(position.link, "", "", false)}
                                                         src={position.logo}
                                                         width={position.logoDetails.width}/>
                                                }
                                            </Tooltip>
                                        }/>
                                        <StepContent>
                                            <Toolbar disableGutters={true} variant="dense">

                                                <Typography className={classes.companyTitle} color="secondary"
                                                            variant={widthSmDown ? "h6" : "h5"}>
                                                    {position.company}
                                                </Typography>
                                                <Typography color="textSecondary"
                                                            variant={widthSmDown ? "h6" : "h5"}>
                                                    {position.dates}
                                                </Typography>
                                            </Toolbar>
                                            <Typography color="textSecondary"
                                                        variant={widthSmDown ? "subtitle1" : "h6"}>
                                                {position.role}
                                            </Typography>
                                            <Typography
                                                className={position.mediaAvailable ? classes.descriptionBottomMargin : null}
                                                color="secondary" gutterBottom variant="body1">
                                                {position.description}
                                            </Typography>
                                            {position.mediaAvailable &&
                                            <Grid container justify="center" spacing={24}>
                                                <Grid item>
                                                    <CardMediaSingle
                                                        cycleOnlyMediaPosition={position.media.cycleOnlyMedia ? position.media.items[0].key : null}
                                                        media={position.media}
                                                        isCycleOnlyMedia={position.media.cycleOnlyMedia}
                                                        square={false}
                                                        setComponentMeasurements={this.setComponentMeasurements}/>
                                                </Grid>
                                            </Grid>}
                                        </StepContent>
                                    </Step>
                                )
                            })}
                        </Stepper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withWidth()(withStyles(styles, {withTheme: true})(connect(mapStateToProps, mapDispatchToProps)(Experience)));