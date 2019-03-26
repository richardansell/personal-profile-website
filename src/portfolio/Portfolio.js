import React, {Component} from "react";
import {connect} from "react-redux";
import {Grid, GridList, GridListTile, Typography, withStyles, withWidth} from "@material-ui/core";
import {updateComponentDistancesToTop, updatePortfolio} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import CardMediaSingle, {mediaType} from "../utils/CardMediaSingle";

import UKMTNPromotionalPoster from "./media/traffic_news/uk_motorway_traffic_news_promotional_poster.jpg";
import UKMTN01Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-01-incidents-phone-screenshot.jpg";
import UKMTN02Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-02-detail-phone-screenshot.jpg";
import UKMTN03Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-03-map-cluster-phone-screenshot.jpg";
import UKMTN04Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-04-map-view-phone-screenshot.jpg";
import UKMTN05Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-05-near-me-phone-screenshot.jpg";
import UKMTN06Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-06-playback-phone-screenshot.jpg";
import UKMTN07Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-07-search-phone-screenshot.jpg";
import UKMTN08Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-08-voice-search-phone-screenshot.jpg";
import UKMTN01Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-01-incidents-tablet-screenshot.jpg";
import UKMTN02Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-02-map-cluster-tablet-screenshot.jpg";
import UKMTN03Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-03-map-view-tablet-screenshot.jpg";
import UKMTN04Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-04-near-me-tablet-screenshot.jpg";
import UKMTN05Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-05-playback-tablet-screenshot.jpg";
import UKMTN06Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-06-search-tablet-screenshot.jpg";
import UKMTN07Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-07-voice-search-tablet-screenshot.jpg";

import MomoAcademyOfDrama from "./media/momo-academy-of-drama.jpg";
import StogurseyVintage from "./media/stogursey-vintage.jpg";
import OOTHS01 from "./media/only_on_the_high_street/only-on-the-high-street-01-app-icon.png";
import OOTHS02 from "./media/only_on_the_high_street/only-on-the-high-street-02-app-upcoming-events.jpg";
import OOTHS03 from "./media/only_on_the_high_street/only-on-the-high-street-03-app-event-details.jpg";
import OOTHS04 from "./media/only_on_the_high_street/only-on-the-high-street-04-app-event-location.jpg";
import OOTHS05 from "./media/only_on_the_high_street/only-on-the-high-street-05-app-event-retailer-offers.jpg";
import OOTHS06 from "./media/only_on_the_high_street/only-on-the-high-street-06-app-event-treasure-hunt.jpg";
import OOTHS07 from "./media/only_on_the_high_street/only-on-the-high-street-07-app-menu.jpg";
import OOTHS08 from "./media/only_on_the_high_street/only-on-the-high-street-08-app-feedback.jpg";
import OOTHS09 from "./media/only_on_the_high_street/only-on-the-high-street-09-website-backend-login.jpg";
import OOTHS10 from "./media/only_on_the_high_street/only-on-the-high-street-10-website-backend-dashboard.jpg";
import OOTHS11 from "./media/only_on_the_high_street/only-on-the-high-street-11-website-backend-add-event-booking.jpg";
import OOTHS12
    from "./media/only_on_the_high_street/only-on-the-high-street-12-website-backend-add-event-booking-with-date.jpg";
import OOTHS13
    from "./media/only_on_the_high_street/only-on-the-high-street-13-website-backend-add-event-booking-with-google-location-search.jpg";
import OOTHS14 from "./media/only_on_the_high_street/only-on-the-high-street-14-website-backend-dashboard-menu.jpg";
import OOTHS15 from "./media/only_on_the_high_street/only-on-the-high-street-15-website-backend-event-offers.jpg";

import SammyHayes01 from "./media/sammy_hayes/sammy-hayes-01-home.jpg";
import SammyHayes02 from "./media/sammy_hayes/sammy-hayes-02-about.jpg";
import SammyHayes03 from "./media/sammy_hayes/sammy-hayes-03-contact.jpg";
import SammyHayes04 from "./media/sammy_hayes/sammy-hayes-04-booking-requests.jpg";
import SammyHayes05 from "./media/sammy_hayes/sammy-hayes-05-follow-and-footer.jpg";
import SammyHayes06 from "./media/sammy_hayes/sammy-hayes-06-menu.jpg";
import SammyHayes07 from "./media/sammy_hayes/sammy-hayes-07-frequently-asked-questions.jpg";
import SammyHayes08 from "./media/sammy_hayes/sammy-hayes-08-newsletter-sign-up.jpg";
import SammyHayes09 from "./media/sammy_hayes/sammy-hayes-09-share.jpg";
import SammyHayes10 from "./media/sammy_hayes/sammy-hayes-10-website-backend-login.jpg";
import SammyHayes11 from "./media/sammy_hayes/sammy-hayes-11-website-backend-login-verification.jpg";
import SammyHayes12 from "./media/sammy_hayes/sammy-hayes-12-website-backend-dashboard.jpg";
import SammyHayes13 from "./media/sammy_hayes/sammy-hayes-13-website-backend-add-event-booking.jpg";
import SammyHayes14 from "./media/sammy_hayes/sammy-hayes-14-website-backend-add-event-booking-with-date.jpg";
import SammyHayes15
    from "./media/sammy_hayes/sammy-hayes-15-website-backend-add-event-booking-with-google-location-search.jpg";
import SammyHayes16
    from "./media/sammy_hayes/sammy-hayes-16-website-backend-event-booking-added-to-google-calendar.jpg";
import SammyHayes17 from "./media/sammy_hayes/sammy-hayes-17-website-backend-new-event-booking-added-to-dashboard.jpg";
import SammyHayes18
    from "./media/sammy_hayes/sammy-hayes-18-website-backend-additional-new-event-booking-added-to-dashboard.jpg";
import SammyHayes19
    from "./media/sammy_hayes/sammy-hayes-19-website-backend-existing-event-booking-confirm-deletion.jpg";
import SammyHayes20 from "./media/sammy_hayes/sammy-hayes-20-website-backend-dashboard-menu.jpg";
import SammyHayes21 from "./media/sammy_hayes/sammy-hayes-21-booking-calendar-downloaded.jpg";

import SpaceExplorer from "./media/space-explorer.jpg";

import SpellBound01 from "./media/spellbound/spellbound-01-home.jpg";
import SpellBound02 from "./media/spellbound/spellbound-02-select-difficulty-level.jpg";
import SpellBound03 from "./media/spellbound/spellbound-03-chosen-difficulty-level-message.jpg";
import SpellBound04 from "./media/spellbound/spellbound-04-sound-effects-off.jpg";
import SpellBound05 from "./media/spellbound/spellbound-05-play-game-instruction-message.jpg";
import SpellBound06 from "./media/spellbound/spellbound-06-no-text-entered-message.jpg";
import SpellBound07 from "./media/spellbound/spellbound-07-remaining-attempts-message.jpg";
import SpellBound08 from "./media/spellbound/spellbound-08-time-expired-message.jpg";
import SpellBound09 from "./media/spellbound/spellbound-09-media-volume-off-message.jpg";
import SpellBound10 from "./media/spellbound/spellbound-10-correct-answer-message.jpg";
import SpellBound11 from "./media/spellbound/spellbound-11-game-completed.jpg";
import SpellBoundAPK from "./media/spellbound/spellbound.apk";

import Area51APK from "./media/area-51.apk";

import JavaIcon from '@iconify/react/logos/java';
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
import WordPressIcon from '@iconify/react/dashicons/wordpress';
import UnrealEngineIcon from "@iconify/react/mdi/unreal";

const styles = () => ({
    border: {
        borderColor: "transparent",
        borderStyle: "solid",
        borderWidth: "1px"
    },
    gridList: {
        flexWrap: "nowrap",
        transform: "translateZ(0)"
    }
});

const mapStateToProps = state => {
    return {portfolioComponent: state.navigation.portfolioComponent};
};

const mapDispatchToProps = dispatch => {
    return {
        updateComponentDistancesToTop: update => dispatch(updateComponentDistancesToTop(update)),
        updatePortfolio: dimensions => dispatch(updatePortfolio(dimensions)),
    }
};

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolio: [
                {
                    key: 0,
                    media: {
                        cardTitle: "Android Development",
                        cycleOnlyMedia: true,
                        items: [
                            {
                                key: 0,
                                cardMedia: [
                                    {
                                        mediaType: mediaType.VIDEO,
                                        alt: "UK Motorway Traffic News",
                                        media: "https://www.youtube.com/embed/9UOjG-bqu-A"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News promotional poster",
                                        media: UKMTNPromotionalPoster
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events",
                                        media: UKMTN01Phone
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic event detail",
                                        media: UKMTN02Phone
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events map clusters",
                                        media: UKMTN03Phone
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic event map view",
                                        media: UKMTN04Phone
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events near me",
                                        media: UKMTN05Phone
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic event audio playback",
                                        media: UKMTN06Phone
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News search traffic events",
                                        media: UKMTN07Phone
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News voice search traffic events",
                                        media: UKMTN08Phone
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events",
                                        media: UKMTN01Tablet
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events map clusters",
                                        media: UKMTN02Tablet
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic event map view",
                                        media: UKMTN03Tablet
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events near me",
                                        media: UKMTN04Tablet
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic event audio playback",
                                        media: UKMTN05Tablet
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News search traffic events",
                                        media: UKMTN06Tablet
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News voice search traffic events",
                                        media: UKMTN07Tablet
                                    }
                                ],
                                cardContent: {
                                    title: "Traffic News Applications",
                                    description: "A range of Android applications developed from the ground-up providing traffic news to users across the UK, including the above example as one of the most popular apps created to date."
                                },
                                cardAction: {
                                    link: "https://play.google.com/store/apps/dev?id=5284578463219197910",
                                    linkButtonText: "Visit Android Apps",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using Java",
                                            icon: JavaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.java.com"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using XML",
                                            icon: XmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/REC-xml/",
                                            color: "#E07A2E"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using Android Studio",
                                            icon: AndroidStudioIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.android.com/studio"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    key: 1,
                    media: {
                        cardTitle: "Web Development",
                        cycleOnlyMedia: false,
                        items: [
                            {
                                key: 0,
                                cardMedia: {
                                    mediaType: mediaType.IMAGE,
                                    alt: "Momo Academy of Drama",
                                    media: MomoAcademyOfDrama,
                                    title: "Momo Academy of Drama"
                                },
                                cardContent: {
                                    title: "Momo Academy of Drama",
                                    description: "Momo Academy of Drama offers drama lessons for all ages and abilities after school in Staffordshire and surrounding areas.\n\nMomo Academy of Drama is run by Mrs Carol Molin and Mrs Nicola Morris, two fully qualified Drama teachers who are dedicated to providing the best possible Drama classes in the area. Branches of the Academy are currently in Burntwood (Nicola Morris) and Brewood (Carol Molin). Both teachers have a wealth of experience and knowledge of Drama teaching."
                                },
                                cardAction: {
                                    link: "https://momoacademy.co.uk/",
                                    linkButtonText: "Visit Website",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using JavaScript",
                                            icon: JavaScriptIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using React",
                                            icon: ReactIcon,
                                            isCustomIcon: false,
                                            link: "https://reactjs.org/"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using HTML",
                                            icon: HtmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/html/"
                                        },
                                        {
                                            key: 3,
                                            label: "Built using CSS",
                                            icon: CssIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/CSS/#css"
                                        },
                                        {
                                            key: 4,
                                            label: "Built using IntelliJ IDEA",
                                            icon: IntelliJIdeaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.jetbrains.com/idea/"
                                        },
                                        {
                                            key: 5,
                                            label: "Built using Firebase",
                                            icon: FirebaseIcon,
                                            isCustomIcon: false,
                                            link: "https://firebase.google.com/"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    key: 2,
                    media: {
                        cardTitle: "Web Development",
                        cycleOnlyMedia: false,
                        items: [
                            {
                                key: 0,
                                cardMedia: {
                                    mediaType: mediaType.IMAGE,
                                    alt: "Stogursey Vintage",
                                    media: StogurseyVintage
                                },
                                cardContent: {
                                    title: "Stogursey Vintage",
                                    description: "Stogursey Vintage sell a wide range of vintage items including furniture, ceramics, glass, textiles, lighting and specialist products upcycled from vintage items.\n\nProducts range from Antiques to Retro as well as repurposed items of all descriptions."
                                },
                                cardAction: {
                                    link: "https://stogurseyvintage.co.uk/",
                                    linkButtonText: "Visit Website",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using WordPress",
                                            icon: WordPressIcon,
                                            isCustomIcon: false,
                                            color: "#2F73A5",
                                            link: "https://en-gb.wordpress.org/"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using PHP",
                                            icon: PhpIcon,
                                            isCustomIcon: false,
                                            link: "http://php.net/"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using JavaScript",
                                            icon: JavaScriptIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                        },
                                        {
                                            key: 3,
                                            label: "Built using HTML",
                                            icon: HtmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/html/"
                                        },
                                        {
                                            key: 4,
                                            label: "Built using CSS",
                                            icon: CssIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/CSS/#css"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    key: 3,
                    media: {
                        cardTitle: "Android & Web Development",
                        cycleOnlyMedia: true,
                        items: [
                            {
                                key: 0,
                                cardMedia: [
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street",
                                        media: OOTHS01
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app upcoming events",
                                        media: OOTHS02
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app event details",
                                        media: OOTHS03
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app event location",
                                        media: OOTHS04
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app event retailer offers",
                                        media: OOTHS05
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app event treasure hunt",
                                        media: OOTHS06
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app menu",
                                        media: OOTHS07
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app feedback",
                                        media: OOTHS08
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend login",
                                        media: OOTHS09
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend dashboard",
                                        media: OOTHS10
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend add event booking",
                                        media: OOTHS11
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend add event booking with date",
                                        media: OOTHS12
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend add event booking with Google location search",
                                        media: OOTHS13
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend dashboard menu",
                                        media: OOTHS14
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend event offers",
                                        media: OOTHS15
                                    }
                                ],
                                cardContent: {
                                    title: "Only on the High Street",
                                    description: "To address the widening gap between the high street and online shopping, style consultants, Laraine Robathan-Field and Hannah Jean Lewis, have founded Only On The High Street. They use their experience and backgrounds to offer a range of interactive events to provide you with a platform that connects your customers and builds your brand experience.\n\nNote: A final year university project having created the Android application and website backend only."
                                },
                                cardAction: {
                                    link: "https://play.google.com/store/apps/details?id=com.onlyonthehighstreet.ooths&hl=en_GB",
                                    linkButtonText: "Visit Google Play Store",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using Java",
                                            icon: JavaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.java.com"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using XML",
                                            icon: XmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/REC-xml/",
                                            color: "#E07A2E"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using AngularJS",
                                            icon: AngularIcon,
                                            isCustomIcon: false,
                                            link: "https://angularjs.org/"
                                        },
                                        {
                                            key: 3,
                                            label: "Built using PHP",
                                            icon: PhpIcon,
                                            isCustomIcon: false,
                                            link: "http://php.net/"
                                        },
                                        {
                                            key: 4,
                                            label: "Built using HTML",
                                            icon: HtmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/html/"
                                        },
                                        {
                                            key: 5,
                                            label: "Built using CSS",
                                            icon: CssIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/CSS/#css"
                                        },
                                        {
                                            key: 6,
                                            label: "Built using Android Studio",
                                            icon: AndroidStudioIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.android.com/studio"
                                        },
                                        {
                                            key: 7,
                                            label: "Built using IntelliJ IDEA",
                                            icon: IntelliJIdeaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.jetbrains.com/idea/"
                                        },
                                        {
                                            key: 8,
                                            label: "Built using Firebase",
                                            icon: FirebaseIcon,
                                            isCustomIcon: false,
                                            link: "https://firebase.google.com/"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    key: 4,
                    media: {
                        cardTitle: "Web Development",
                        cycleOnlyMedia: true,
                        items: [
                            {
                                key: 0,
                                cardMedia: [
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes",
                                        media: SammyHayes01
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes about section",
                                        media: SammyHayes02,
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes contact section",
                                        media: SammyHayes03
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes booking requests section",
                                        media: SammyHayes04
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes follow and footer section",
                                        media: SammyHayes05
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website menu",
                                        media: SammyHayes06
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website frequently asked questions",
                                        media: SammyHayes07
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes newsletter sign-up page (external)",
                                        media: SammyHayes08
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website share option",
                                        media: SammyHayes09
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend login",
                                        media: SammyHayes10
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend login verification",
                                        media: SammyHayes11
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend dashboard",
                                        media: SammyHayes12
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend add event booking",
                                        media: SammyHayes13
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend add event booking with date",
                                        media: SammyHayes14
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend add event booking with Google location search",
                                        media: SammyHayes15
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend new event booking added to Google Calendar (external)",
                                        media: SammyHayes16
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend new event booking added to dashboard",
                                        media: SammyHayes17
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend additional new event booking added to dashboard",
                                        media: SammyHayes18
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend existing event booking confirm deletion",
                                        media: SammyHayes19
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend dashboard menu",
                                        media: SammyHayes20
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes booking calendar downloaded (external)",
                                        media: SammyHayes21
                                    }
                                ],
                                cardContent: {
                                    title: "Sammy Hayes Professional Vocalist",
                                    description: "With over a decade of experience performing live across the UK, Sammy Hayes is talented and versatile singer available to book for your event or musical related project.\n\nNote: A second year university project having created both the website frontend and backend."
                                },
                                cardAction: {
                                    link: "https://sammyhayes.co.uk/",
                                    linkButtonText: "Visit Website",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using AngularJS",
                                            icon: AngularIcon,
                                            isCustomIcon: false,
                                            link: "https://angularjs.org/"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using PHP",
                                            icon: PhpIcon,
                                            isCustomIcon: false,
                                            link: "http://php.net/"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using HTML",
                                            icon: HtmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/html/"
                                        },
                                        {
                                            key: 3,
                                            label: "Built using CSS",
                                            icon: CssIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/CSS/#css"
                                        },
                                        {
                                            key: 4,
                                            label: "Built using IntelliJ IDEA",
                                            icon: IntelliJIdeaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.jetbrains.com/idea/"
                                        },
                                        {
                                            key: 5,
                                            label: "Built using Firebase",
                                            icon: FirebaseIcon,
                                            isCustomIcon: false,
                                            link: "https://firebase.google.com/"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    key: 5,
                    media: {
                        cardTitle: "Web Development",
                        cycleOnlyMedia: false,
                        items: [
                            {
                                key: 0,
                                cardMedia: {
                                    mediaType: mediaType.IMAGE,
                                    alt: "Space Explorer",
                                    media: SpaceExplorer
                                },
                                cardContent: {
                                    title: "Space Explorer",
                                    description: "A second year university project (Multimedia) prototype website application created for a fictional client for teaching students between the ages of 11 to 18 years on the subject of space.\n\nThe website application contains several screens each containing an interactive quiz and a game to test students’ knowledge."
                                },
                                cardAction: {
                                    link: "https://spaceexplorer.firebaseapp.com/",
                                    linkButtonText: "Visit Website",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using AngularJS",
                                            icon: AngularIcon,
                                            isCustomIcon: false,
                                            link: "https://angularjs.org/"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using HTML",
                                            icon: HtmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/html/"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using CSS",
                                            icon: CssIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/CSS/#css"
                                        },
                                        {
                                            key: 3,
                                            label: "Built using IntelliJ IDEA",
                                            icon: IntelliJIdeaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.jetbrains.com/idea/"
                                        },
                                        {
                                            key: 4,
                                            label: "Built using Firebase",
                                            icon: FirebaseIcon,
                                            isCustomIcon: false,
                                            link: "https://firebase.google.com/"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    key: 6,
                    media: {
                        cardTitle: "Android Development",
                        cycleOnlyMedia: true,
                        items: [
                            {
                                key: 0,
                                cardMedia: [
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound home screen",
                                        media: SpellBound01
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound select difficulty level",
                                        media: SpellBound02
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound chosen difficulty level message",
                                        media: SpellBound03
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound sound effects off",
                                        media: SpellBound04
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound play game instruction message",
                                        media: SpellBound05
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound no text entered message",
                                        media: SpellBound06
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound remaining attempts message",
                                        media: SpellBound07
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound time expired message",
                                        media: SpellBound08
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound media volume off message",
                                        media: SpellBound09
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound correct answer message",
                                        media: SpellBound10
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound game completed screen",
                                        media: SpellBound11
                                    }
                                ],
                                cardContent: {
                                    title: "SpellBound",
                                    description: "A final year university project (Creative Computing) Android application created to test the spelling abilities of a wide range of users through a simple and intuitive interface, allowing a user to enter the spelling of a variety of words using their mobile device.\n\nFor each spoken word, the user is required to spell the word in English in a text input field within a specified period of time (20 seconds) before moving onto the next question.\n\nThe user will later be presented with a final score page following the completion of the quiz."
                                },
                                cardAction: {
                                    link: SpellBoundAPK,
                                    linkButtonText: "Download Android App",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using Java",
                                            icon: JavaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.java.com"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using XML",
                                            icon: XmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/REC-xml/",
                                            color: "#E07A2E"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using Android Studio",
                                            icon: AndroidStudioIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.android.com/studio"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    key: 7,
                    media: {
                        cardTitle: "Game Development",
                        cycleOnlyMedia: false,
                        items: [
                            {
                                key: 0,
                                cardMedia: {
                                    mediaType: mediaType.VIDEO,
                                    alt: "Area 51",
                                    media: "https://www.youtube.com/embed/f_vYqlDXKb0"
                                },
                                cardContent: {
                                    title: "Area 51",
                                    description: "A second year university project (Games Programming) mobile game (Android) built using Unreal Engine.\n\nStoryline: The game centres around a fictional alien character called ‘Flimbo’, who has crash landed in the notorious military compound called ‘Area 51’. The United States Air Force are hunting down the character and have dropped a number of bombs in the level, whereby the objective is to simply get Flimbo to safety by reaching another alien spacecraft that has landed to pick him up, all in less than sixty seconds!\n\nThe bombs will cause damage to the player on contact, which will result in the player’s health being effected and will also slow the character down. Furthermore, the character will be destroyed if they should come into contact with too many bombs or if the timer reaches the zero, whereby this will result in the game terminating. Finally, the level will be completed if the player reaches the friendly spacecraft."
                                },
                                cardAction: {
                                    link: Area51APK,
                                    linkButtonText: "Download Android App",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: 'Built using Unreal Engine',
                                            icon: UnrealEngineIcon,
                                            isCustomIcon: false,
                                            color: "#2A2A2A",
                                            link: "https://www.unrealengine.com/en-US/what-is-unreal-engine-4"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
            ]
        };
        this.portfolioRef = React.createRef();
    }

    componentDidMount() {
        this.setComponentMeasurements();
        window.addEventListener('resize', this.setComponentMeasurements);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.portfolioComponent.height !== this.portfolioRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setComponentMeasurements);
    }

    setComponentMeasurements = () => {
        const height = this.portfolioRef.current.scrollHeight;
        this.props.updatePortfolio({height: height});
        this.props.updateComponentDistancesToTop(true);
    };

    render() {
        const {classes} = this.props;
        const {portfolio} = this.state;
        const widthSmDown = isWidthDown("sm", this.props.width);
        const widthXsDown = isWidthDown("xs", this.props.width);
        return (
            <div className={classes.border} ref={this.portfolioRef}>
                <Grid alignItems="flex-start" container justify="center">
                    <Grid item md={12} xs={12}>
                        <Typography color="secondary" gutterBottom variant={widthSmDown ? "h5" : "h4"}>
                            Portfolio
                        </Typography>
                    </Grid>
                    <Grid alignItems="flex-start" container>
                        <Grid item xs>
                            <GridList cellHeight="auto" className={classes.gridList}
                                      cols={portfolio.length === 1 ? 1 : widthXsDown ? 1.25 : widthSmDown ? 1.5 : 2.5}
                                      spacing={0}>
                                {portfolio.map(item => (
                                    <GridListTile cols={1} key={item.key}
                                                  style={{marginRight: 10}}>
                                        <CardMediaSingle
                                            cycleOnlyMediaPosition={item.media.cycleOnlyMedia ? item.media.items[0].key : null}
                                            media={portfolio[item.key].media}
                                            isCycleOnlyMedia={item.media.cycleOnlyMedia}
                                            setComponentMeasurements={this.setComponentMeasurements}
                                            square={true}/>
                                    </GridListTile>
                                ))}
                            </GridList>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default withWidth()(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Portfolio)));