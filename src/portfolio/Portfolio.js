import React, {Component} from "react";
import {connect} from "react-redux";
import {Fade, Grid, GridList, GridListTile, Typography, withStyles, withWidth} from "@material-ui/core";
import {updatePortfolio} from "../redux/actions";
import {isWidthDown} from "@material-ui/core/withWidth";
import CardMediaSingle, {mediaType} from "../utils/CardMediaSingle";

import UKMTNPromotionalPoster from "./media/traffic_news/uk-motorway-traffic-news-promotional-poster.png";
import UKMTN01Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-01-events-phone.png";
import UKMTN02Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-02-near-me-phone.png";
import UKMTN03Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-03-search-phone.png";
import UKMTN04Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-04-voice-search-phone.png";
import UKMTN05Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-05-audio-playback-phone.png";
import UKMTN06Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-06-detail-phone.png";
import UKMTN07Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-07-map-view-phone.png";
import UKMTN08Phone from "./media/traffic_news/phone/uk-motorway-traffic-news-08-map-clusters-phone.png";
import UKMTN01Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-01-events-and-detail-tablet.png";
import UKMTN02Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-02-near-me-tablet.png";
import UKMTN03Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-03-search-tablet.png";
import UKMTN04Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-04-voice-search-tablet.png";
import UKMTN05Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-05-audio-playback-tablet.png";
import UKMTN06Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-06-map-view-tablet.png";
import UKMTN07Tablet from "./media/traffic_news/tablet/uk-motorway-traffic-news-07-map-clusters-tablet.png";

import MomoAcademyOfDrama from "./media/momo-academy-of-drama.jpg";
import StogurseyVintage from "./media/stogursey-vintage.jpg";
import OOTHS01 from "./media/only_on_the_high_street/only-on-the-high-street-01-app-icon.png";
import OOTHS02 from "./media/only_on_the_high_street/only-on-the-high-street-02-app-upcoming-events.png";
import OOTHS03 from "./media/only_on_the_high_street/only-on-the-high-street-03-app-event-details.png";
import OOTHS04 from "./media/only_on_the_high_street/only-on-the-high-street-04-app-event-location.png";
import OOTHS05 from "./media/only_on_the_high_street/only-on-the-high-street-05-app-event-retailer-offers.png";
import OOTHS06 from "./media/only_on_the_high_street/only-on-the-high-street-06-app-event-treasure-hunt.png";
import OOTHS07 from "./media/only_on_the_high_street/only-on-the-high-street-07-app-menu.png";
import OOTHS08 from "./media/only_on_the_high_street/only-on-the-high-street-08-app-feedback.png";
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

import SpellBound01 from "./media/spellbound/spellbound-01-home.png";
import SpellBound02 from "./media/spellbound/spellbound-02-select-difficulty-level.png";
import SpellBound03 from "./media/spellbound/spellbound-03-chosen-difficulty-level-message.png";
import SpellBound04 from "./media/spellbound/spellbound-04-sound-effects-off.png";
import SpellBound05 from "./media/spellbound/spellbound-05-play-game-instruction-message.png";
import SpellBound06 from "./media/spellbound/spellbound-06-no-text-entered-message.png";
import SpellBound07 from "./media/spellbound/spellbound-07-remaining-attempts-message.png";
import SpellBound08 from "./media/spellbound/spellbound-08-time-expired-message.png";
import SpellBound09 from "./media/spellbound/spellbound-09-media-volume-off-message.png";
import SpellBound10 from "./media/spellbound/spellbound-10-correct-answer-message.png";
import SpellBound11 from "./media/spellbound/spellbound-11-game-completed.png";

import UKMTNPromotionalPosterWp from "./media/traffic_news/uk-motorway-traffic-news-promotional-poster.webp";
import UKMTN01PhoneWp from "./media/traffic_news/phone/uk-motorway-traffic-news-01-events-phone.webp";
import UKMTN02PhoneWp from "./media/traffic_news/phone/uk-motorway-traffic-news-02-near-me-phone.webp";
import UKMTN03PhoneWp from "./media/traffic_news/phone/uk-motorway-traffic-news-03-search-phone.webp";
import UKMTN04PhoneWp from "./media/traffic_news/phone/uk-motorway-traffic-news-04-voice-search-phone.webp";
import UKMTN05PhoneWp from "./media/traffic_news/phone/uk-motorway-traffic-news-05-audio-playback-phone.webp";
import UKMTN06PhoneWp from "./media/traffic_news/phone/uk-motorway-traffic-news-06-detail-phone.webp";
import UKMTN07PhoneWp from "./media/traffic_news/phone/uk-motorway-traffic-news-07-map-view-phone.webp";
import UKMTN08PhoneWp from "./media/traffic_news/phone/uk-motorway-traffic-news-08-map-clusters-phone.webp";
import UKMTN01TabletWp from "./media/traffic_news/tablet/uk-motorway-traffic-news-01-events-and-detail-tablet.webp";
import UKMTN02TabletWp from "./media/traffic_news/tablet/uk-motorway-traffic-news-02-near-me-tablet.webp";
import UKMTN03TabletWp from "./media/traffic_news/tablet/uk-motorway-traffic-news-03-search-tablet.webp";
import UKMTN04TabletWp from "./media/traffic_news/tablet/uk-motorway-traffic-news-04-voice-search-tablet.webp";
import UKMTN05TabletWp from "./media/traffic_news/tablet/uk-motorway-traffic-news-05-audio-playback-tablet.webp";
import UKMTN06TabletWp from "./media/traffic_news/tablet/uk-motorway-traffic-news-06-map-view-tablet.webp";
import UKMTN07TabletWp from "./media/traffic_news/tablet/uk-motorway-traffic-news-07-map-clusters-tablet.webp";

import MomoAcademyOfDramaWp from "./media/momo-academy-of-drama.webp";
import StogurseyVintageWp from "./media/stogursey-vintage.webp";
import OOTHS01Wp from "./media/only_on_the_high_street/only-on-the-high-street-01-app-icon.webp";
import OOTHS02Wp from "./media/only_on_the_high_street/only-on-the-high-street-02-app-upcoming-events.webp";
import OOTHS03Wp from "./media/only_on_the_high_street/only-on-the-high-street-03-app-event-details.webp";
import OOTHS04Wp from "./media/only_on_the_high_street/only-on-the-high-street-04-app-event-location.webp";
import OOTHS05Wp from "./media/only_on_the_high_street/only-on-the-high-street-05-app-event-retailer-offers.webp";
import OOTHS06Wp from "./media/only_on_the_high_street/only-on-the-high-street-06-app-event-treasure-hunt.webp";
import OOTHS07Wp from "./media/only_on_the_high_street/only-on-the-high-street-07-app-menu.webp";
import OOTHS08Wp from "./media/only_on_the_high_street/only-on-the-high-street-08-app-feedback.webp";
import OOTHS09Wp from "./media/only_on_the_high_street/only-on-the-high-street-09-website-backend-login.webp";
import OOTHS10Wp from "./media/only_on_the_high_street/only-on-the-high-street-10-website-backend-dashboard.webp";
import OOTHS11Wp
    from "./media/only_on_the_high_street/only-on-the-high-street-11-website-backend-add-event-booking.webp";
import OOTHS12Wp
    from "./media/only_on_the_high_street/only-on-the-high-street-12-website-backend-add-event-booking-with-date.webp";
import OOTHS13Wp
    from "./media/only_on_the_high_street/only-on-the-high-street-13-website-backend-add-event-booking-with-google-location-search.webp";
import OOTHS14Wp from "./media/only_on_the_high_street/only-on-the-high-street-14-website-backend-dashboard-menu.webp";
import OOTHS15Wp from "./media/only_on_the_high_street/only-on-the-high-street-15-website-backend-event-offers.webp";

import SammyHayes01Wp from "./media/sammy_hayes/sammy-hayes-01-home.webp";
import SammyHayes02Wp from "./media/sammy_hayes/sammy-hayes-02-about.webp";
import SammyHayes03Wp from "./media/sammy_hayes/sammy-hayes-03-contact.webp";
import SammyHayes04Wp from "./media/sammy_hayes/sammy-hayes-04-booking-requests.webp";
import SammyHayes05Wp from "./media/sammy_hayes/sammy-hayes-05-follow-and-footer.webp";
import SammyHayes06Wp from "./media/sammy_hayes/sammy-hayes-06-menu.webp";
import SammyHayes07Wp from "./media/sammy_hayes/sammy-hayes-07-frequently-asked-questions.webp";
import SammyHayes08Wp from "./media/sammy_hayes/sammy-hayes-08-newsletter-sign-up.webp";
import SammyHayes09Wp from "./media/sammy_hayes/sammy-hayes-09-share.webp";
import SammyHayes10Wp from "./media/sammy_hayes/sammy-hayes-10-website-backend-login.webp";
import SammyHayes11Wp from "./media/sammy_hayes/sammy-hayes-11-website-backend-login-verification.webp";
import SammyHayes12Wp from "./media/sammy_hayes/sammy-hayes-12-website-backend-dashboard.webp";
import SammyHayes13Wp from "./media/sammy_hayes/sammy-hayes-13-website-backend-add-event-booking.webp";
import SammyHayes14Wp from "./media/sammy_hayes/sammy-hayes-14-website-backend-add-event-booking-with-date.webp";
import SammyHayes15Wp
    from "./media/sammy_hayes/sammy-hayes-15-website-backend-add-event-booking-with-google-location-search.webp";
import SammyHayes16Wp
    from "./media/sammy_hayes/sammy-hayes-16-website-backend-event-booking-added-to-google-calendar.webp";
import SammyHayes17Wp
    from "./media/sammy_hayes/sammy-hayes-17-website-backend-new-event-booking-added-to-dashboard.webp";
import SammyHayes18Wp
    from "./media/sammy_hayes/sammy-hayes-18-website-backend-additional-new-event-booking-added-to-dashboard.webp";
import SammyHayes19Wp
    from "./media/sammy_hayes/sammy-hayes-19-website-backend-existing-event-booking-confirm-deletion.webp";
import SammyHayes20Wp from "./media/sammy_hayes/sammy-hayes-20-website-backend-dashboard-menu.webp";
import SammyHayes21Wp from "./media/sammy_hayes/sammy-hayes-21-booking-calendar-downloaded.webp";

import SpaceExplorerWp from "./media/space-explorer.webp";

import SpellBound01Wp from "./media/spellbound/spellbound-01-home.webp";
import SpellBound02Wp from "./media/spellbound/spellbound-02-select-difficulty-level.webp";
import SpellBound03Wp from "./media/spellbound/spellbound-03-chosen-difficulty-level-message.webp";
import SpellBound04Wp from "./media/spellbound/spellbound-04-sound-effects-off.webp";
import SpellBound05Wp from "./media/spellbound/spellbound-05-play-game-instruction-message.webp";
import SpellBound06Wp from "./media/spellbound/spellbound-06-no-text-entered-message.webp";
import SpellBound07Wp from "./media/spellbound/spellbound-07-remaining-attempts-message.webp";
import SpellBound08Wp from "./media/spellbound/spellbound-08-time-expired-message.webp";
import SpellBound09Wp from "./media/spellbound/spellbound-09-media-volume-off-message.webp";
import SpellBound10Wp from "./media/spellbound/spellbound-10-correct-answer-message.webp";
import SpellBound11Wp from "./media/spellbound/spellbound-11-game-completed.webp";

import SpellBoundApk from "./media/spellbound/spellbound.apk";
import Area51Apk from "./media/area-51.apk";

import AndroidStudioIcon from '@iconify/react/flat-color-icons/android-os';
import AngularIcon from '@iconify/react/logos/angular-icon';
import AngularMaterialIcon from '@iconify/react/simple-icons/angular';
import BitbucketIcon from "@iconify/react/logos/bitbucket";
import BootstrapIcon from "@iconify/react/logos/bootstrap";
import CssIcon from '@iconify/react/logos/css-3';
import FabricIcon from '@iconify/react/logos/fabric-io';
import FirebaseIcon from '@iconify/react/logos/firebase';
import GitIcon from '@iconify/react/logos/git-icon';
import HtmlIcon from '@iconify/react/logos/html-5';
import IntelliJIdeaIcon from '@iconify/react/logos/intellij-idea';
import JavaIcon from '@iconify/react/logos/java';
import JavaScriptIcon from '@iconify/react/logos/javascript';
import PhpIcon from '@iconify/react/logos/php';
import ReactIcon from '@iconify/react/logos/react';
import XmlIcon from '@iconify/react/mdi/file-xml';
import UnrealEngineIcon from "@iconify/react/mdi/unreal";
import WordPressIcon from '@iconify/react/dashicons/wordpress';
import {ReactMaterialIcon} from "../skills/media/ReactMaterialIcon";

const styles = () => ({
    gridList: {
        flexWrap: "nowrap",
        transform: "translateZ(0)"
    }
});

const mapStateToProps = state => {
    return {navigation: state.navigation};
};

const mapDispatchToProps = dispatch => {
    return {updatePortfolio: dimensions => dispatch(updatePortfolio(dimensions))}
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
                                        media: "https://www.youtube.com/embed/9UOjG-bqu-A",
                                        youtubeVideoId: "9UOjG-bqu-A"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News promotional poster",
                                        media: UKMTNPromotionalPoster,
                                        mediaWp: UKMTNPromotionalPosterWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events",
                                        media: UKMTN01Phone,
                                        mediaWp: UKMTN01PhoneWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events near me",
                                        media: UKMTN02Phone,
                                        mediaWp: UKMTN02PhoneWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News search traffic events",
                                        media: UKMTN03Phone,
                                        mediaWp: UKMTN03PhoneWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News voice search traffic events",
                                        media: UKMTN04Phone,
                                        mediaWp: UKMTN04PhoneWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News audio playback of traffic events",
                                        media: UKMTN05Phone,
                                        mediaWp: UKMTN05PhoneWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic event details",
                                        media: UKMTN06Phone,
                                        mediaWp: UKMTN06PhoneWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic event map view",
                                        media: UKMTN07Phone,
                                        mediaWp: UKMTN07PhoneWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic event map clusters",
                                        media: UKMTN08Phone,
                                        mediaWp: UKMTN08PhoneWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events and detail screen",
                                        media: UKMTN01Tablet,
                                        mediaWp: UKMTN01TabletWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic events near me",
                                        media: UKMTN02Tablet,
                                        mediaWp: UKMTN02TabletWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic search traffic events",
                                        media: UKMTN03Tablet,
                                        mediaWp: UKMTN03TabletWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic voice search traffic events",
                                        media: UKMTN04Tablet,
                                        mediaWp: UKMTN04TabletWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic audio playback of traffic events",
                                        media: UKMTN05Tablet,
                                        mediaWp: UKMTN05TabletWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News search traffic event map view",
                                        media: UKMTN06Tablet,
                                        mediaWp: UKMTN06TabletWp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "UK Motorway Traffic News traffic event map clusters",
                                        media: UKMTN07Tablet,
                                        mediaWp: UKMTN07TabletWp,
                                        originalMediaType: "image/png"
                                    }
                                ],
                                cardContent: {
                                    title: "Traffic News Applications",
                                    description: "A range of Android applications developed from the ground-up providing traffic news to users across the UK, including the above example as one of the most popular apps created to date."
                                },
                                cardAction: {
                                    isDownloadLink: false,
                                    link: "https://play.google.com/store/apps/dev?id=5284578463219197910",
                                    linkButtonText: "View Android Apps",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using Android Studio",
                                            icon: AndroidStudioIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.android.com/studio"
                                        },
                                        {
                                            key: 1,
                                            label: 'Built using Bitbucket',
                                            icon: BitbucketIcon,
                                            isCustomIcon: false,
                                            link: "https://bitbucket.org"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using Fabric",
                                            icon: FabricIcon,
                                            isCustomIcon: false,
                                            link: "https://get.fabric.io"
                                        },
                                        {
                                            key: 3,
                                            label: "Built using Firebase",
                                            icon: FirebaseIcon,
                                            isCustomIcon: false,
                                            link: "https://firebase.google.com/"
                                        },
                                        {
                                            key: 4,
                                            label: "Built using Git",
                                            icon: GitIcon,
                                            isCustomIcon: false,
                                            link: "https://git-scm.com/"
                                        },
                                        {
                                            key: 5,
                                            label: "Built using Java",
                                            icon: JavaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.java.com"
                                        },
                                        {
                                            key: 6,
                                            label: "Built using XML",
                                            icon: XmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/REC-xml/",
                                            color: "#E07A2E"
                                        },
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
                                    mediaWp: MomoAcademyOfDramaWp,
                                    originalMediaType: "image/jpeg"
                                },
                                cardContent: {
                                    title: "Momo Academy of Drama",
                                    description: "Momo Academy of Drama offers drama lessons for all ages and abilities after school in Staffordshire and surrounding areas.\n\nMomo Academy of Drama is run by Mrs Carol Molin and Mrs Nicola Morris, two fully qualified Drama teachers who are dedicated to providing the best possible Drama classes in the area. Branches of the Academy are currently in Burntwood (Nicola Morris) and Brewood (Carol Molin). Both teachers have a wealth of experience and knowledge of Drama teaching."
                                },
                                cardAction: {
                                    isDownloadLink: false,
                                    link: "https://momoacademy.co.uk/",
                                    linkButtonText: "Visit Website",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: 'Built using Bitbucket',
                                            icon: BitbucketIcon,
                                            isCustomIcon: false,
                                            link: "https://bitbucket.org"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using CSS",
                                            icon: CssIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/CSS/#css"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using Firebase",
                                            icon: FirebaseIcon,
                                            isCustomIcon: false,
                                            link: "https://firebase.google.com/"
                                        },
                                        {
                                            key: 3,
                                            label: "Built using Git",
                                            icon: GitIcon,
                                            isCustomIcon: false,
                                            link: "https://git-scm.com/"
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
                                            label: "Built using IntelliJ IDEA",
                                            icon: IntelliJIdeaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.jetbrains.com/idea/"
                                        },
                                        {
                                            key: 6,
                                            label: "Built using JavaScript",
                                            icon: JavaScriptIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                                        },
                                        {
                                            key: 7,
                                            label: "Built using React",
                                            icon: ReactIcon,
                                            isCustomIcon: false,
                                            link: "https://reactjs.org/"
                                        },
                                        {
                                            key: 8,
                                            label: 'Built using React Material',
                                            icon: <ReactMaterialIcon/>,
                                            isCustomIcon: true,
                                            link: "https://material-ui.com/"
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
                                    media: StogurseyVintage,
                                    mediaWp: StogurseyVintageWp,
                                    originalMediaType: "image/jpeg"
                                },
                                cardContent: {
                                    title: "Stogursey Vintage",
                                    description: "Stogursey Vintage sell a wide range of vintage items including furniture, ceramics, glass, textiles, lighting and specialist products upcycled from vintage items.\n\nProducts range from Antiques to Retro as well as repurposed items of all descriptions."
                                },
                                cardAction: {
                                    isDownloadLink: false,
                                    link: "https://stogurseyvintage.co.uk/",
                                    linkButtonText: "Visit Website",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using CSS",
                                            icon: CssIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/CSS/#css"
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
                                            label: "Built using JavaScript",
                                            icon: JavaScriptIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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
                                            label: "Built using WordPress",
                                            icon: WordPressIcon,
                                            isCustomIcon: false,
                                            color: "#2F73A5",
                                            link: "https://en-gb.wordpress.org/"
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
                                        media: OOTHS01,
                                        mediaWp: OOTHS01Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app upcoming events",
                                        media: OOTHS02,
                                        mediaWp: OOTHS02Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app event details",
                                        media: OOTHS03,
                                        mediaWp: OOTHS03Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app event location",
                                        media: OOTHS04,
                                        mediaWp: OOTHS04Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app event retailer offers",
                                        media: OOTHS05,
                                        mediaWp: OOTHS05Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app event treasure hunt",
                                        media: OOTHS06,
                                        mediaWp: OOTHS06Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app menu",
                                        media: OOTHS07,
                                        mediaWp: OOTHS07Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street Android app feedback",
                                        media: OOTHS08,
                                        mediaWp: OOTHS08Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend login",
                                        media: OOTHS09,
                                        mediaWp: OOTHS09Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend dashboard",
                                        media: OOTHS10,
                                        mediaWp: OOTHS10Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend add event booking",
                                        media: OOTHS11,
                                        mediaWp: OOTHS11Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend add event booking with date",
                                        media: OOTHS12,
                                        mediaWp: OOTHS12Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend add event booking with Google location search",
                                        media: OOTHS13,
                                        mediaWp: OOTHS13Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend dashboard menu",
                                        media: OOTHS14,
                                        mediaWp: OOTHS14Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Only on the High Street website backend event offers",
                                        media: OOTHS15,
                                        mediaWp: OOTHS15Wp,
                                        originalMediaType: "image/jpeg"
                                    }
                                ],
                                cardContent: {
                                    title: "Only on the High Street",
                                    description: "To address the widening gap between the high street and online shopping, style consultants, Laraine Robathan-Field and Hannah Jean Lewis, have founded Only On The High Street. They use their experience and backgrounds to offer a range of interactive events to provide you with a platform that connects your customers and builds your brand experience.\n\nNote: A final year university project having created the Android application and website backend only."
                                },
                                cardAction: {
                                    isDownloadLink: false,
                                    link: "https://play.google.com/store/apps/details?id=com.onlyonthehighstreet.ooths&hl=en_GB",
                                    linkButtonText: "Visit Google Play Store",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using Android Studio",
                                            icon: AndroidStudioIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.android.com/studio"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using AngularJS",
                                            icon: AngularIcon,
                                            isCustomIcon: false,
                                            link: "https://angularjs.org/"
                                        },
                                        {
                                            key: 2,
                                            label: 'Built using Angular Material',
                                            icon: AngularMaterialIcon,
                                            isCustomIcon: false,
                                            link: "https://material.angular.io/",
                                            color: "#3F51B5"
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
                                            label: "Built using Firebase",
                                            icon: FirebaseIcon,
                                            isCustomIcon: false,
                                            link: "https://firebase.google.com/"
                                        },
                                        {
                                            key: 5,
                                            label: "Built using IntelliJ IDEA",
                                            icon: IntelliJIdeaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.jetbrains.com/idea/"
                                        },
                                        {
                                            key: 6,
                                            label: "Built using HTML",
                                            icon: HtmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/html/"
                                        },
                                        {
                                            key: 7,
                                            label: "Built using Java",
                                            icon: JavaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.java.com"
                                        },
                                        {
                                            key: 8,
                                            label: "Built using PHP",
                                            icon: PhpIcon,
                                            isCustomIcon: false,
                                            link: "http://php.net/"
                                        },
                                        {
                                            key: 9,
                                            label: "Built using XML",
                                            icon: XmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/REC-xml/",
                                            color: "#E07A2E"
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
                                        media: SammyHayes01,
                                        mediaWp: SammyHayes01Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes about section",
                                        media: SammyHayes02,
                                        mediaWp: SammyHayes02Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes contact section",
                                        media: SammyHayes03,
                                        mediaWp: SammyHayes03Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes booking requests section",
                                        media: SammyHayes04,
                                        mediaWp: SammyHayes04Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes follow and footer section",
                                        media: SammyHayes05,
                                        mediaWp: SammyHayes05Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website menu",
                                        media: SammyHayes06,
                                        mediaWp: SammyHayes06Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website frequently asked questions",
                                        media: SammyHayes07,
                                        mediaWp: SammyHayes07Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes newsletter sign-up page (external)",
                                        media: SammyHayes08,
                                        mediaWp: SammyHayes08Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website share option",
                                        media: SammyHayes09,
                                        mediaWp: SammyHayes09Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend login",
                                        media: SammyHayes10,
                                        mediaWp: SammyHayes10Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend login verification",
                                        media: SammyHayes11,
                                        mediaWp: SammyHayes11Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend dashboard",
                                        media: SammyHayes12,
                                        mediaWp: SammyHayes12Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend add event booking",
                                        media: SammyHayes13,
                                        mediaWp: SammyHayes13Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend add event booking with date",
                                        media: SammyHayes14,
                                        mediaWp: SammyHayes14Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend add event booking with Google location search",
                                        media: SammyHayes15,
                                        mediaWp: SammyHayes15Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend new event booking added to Google Calendar (external)",
                                        media: SammyHayes16,
                                        mediaWp: SammyHayes16Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend new event booking added to dashboard",
                                        media: SammyHayes17,
                                        mediaWp: SammyHayes17Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend additional new event booking added to dashboard",
                                        media: SammyHayes18,
                                        mediaWp: SammyHayes18Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend existing event booking confirm deletion",
                                        media: SammyHayes19,
                                        mediaWp: SammyHayes19Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes website backend dashboard menu",
                                        media: SammyHayes20,
                                        mediaWp: SammyHayes20Wp,
                                        originalMediaType: "image/jpeg"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "Sammy Hayes booking calendar downloaded (external)",
                                        media: SammyHayes21,
                                        mediaWp: SammyHayes21Wp,
                                        originalMediaType: "image/jpeg"
                                    }
                                ],
                                cardContent: {
                                    title: "Sammy Hayes Professional Vocalist",
                                    description: "With over a decade of experience performing live across the UK, Sammy Hayes is talented and versatile singer available to book for your event or musical related project.\n\nNote: A second year university project having created both the website frontend and backend."
                                },
                                cardAction: {
                                    isDownloadLink: false,
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
                                            label: 'Built using Angular Material',
                                            icon: AngularMaterialIcon,
                                            isCustomIcon: false,
                                            link: "https://material.angular.io/",
                                            color: "#3F51B5"
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
                                            label: "Built using Firebase",
                                            icon: FirebaseIcon,
                                            isCustomIcon: false,
                                            link: "https://firebase.google.com/"
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
                                            label: "Built using IntelliJ IDEA",
                                            icon: IntelliJIdeaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.jetbrains.com/idea/"
                                        },
                                        {
                                            key: 6,
                                            label: "Built using PHP",
                                            icon: PhpIcon,
                                            isCustomIcon: false,
                                            link: "http://php.net/"
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
                                    media: SpaceExplorer,
                                    mediaWp: SpaceExplorerWp,
                                    originalMediaType: "image/jpeg"
                                },
                                cardContent: {
                                    title: "Space Explorer",
                                    description: "A second year university project (Multimedia) prototype website application created for a fictional client for teaching students between the ages of 11 to 18 years on the subject of space.\n\nThe website application contains several screens each containing an interactive quiz and a game to test students’ knowledge."
                                },
                                cardAction: {
                                    isDownloadLink: false,
                                    link: "https://spaceexplorer.firebaseapp.com/",
                                    linkButtonText: "Visit Website",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: 'Built using Bootstrap',
                                            icon: BootstrapIcon,
                                            isCustomIcon: false,
                                            link: "https://getbootstrap.com/"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using CSS",
                                            icon: CssIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/CSS/#css"
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
                                        media: SpellBound01,
                                        mediaWp: SpellBound01Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound select difficulty level",
                                        media: SpellBound02,
                                        mediaWp: SpellBound02Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound chosen difficulty level message",
                                        media: SpellBound03,
                                        mediaWp: SpellBound03Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound sound effects off",
                                        media: SpellBound04,
                                        mediaWp: SpellBound04Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound play game instruction message",
                                        media: SpellBound05,
                                        mediaWp: SpellBound05Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound no text entered message",
                                        media: SpellBound06,
                                        mediaWp: SpellBound06Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound remaining attempts message",
                                        media: SpellBound07,
                                        mediaWp: SpellBound07Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound time expired message",
                                        media: SpellBound08,
                                        mediaWp: SpellBound08Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound media volume off message",
                                        media: SpellBound09,
                                        mediaWp: SpellBound09Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound correct answer message",
                                        media: SpellBound10,
                                        mediaWp: SpellBound10Wp,
                                        originalMediaType: "image/png"
                                    },
                                    {
                                        mediaType: mediaType.IMAGE,
                                        alt: "SpellBound game completed screen",
                                        media: SpellBound11,
                                        mediaWp: SpellBound11Wp,
                                        originalMediaType: "image/png"
                                    }
                                ],
                                cardContent: {
                                    title: "SpellBound",
                                    description: "A final year university project (Creative Computing) Android application created to test the spelling abilities of a wide range of users through a simple and intuitive interface, allowing a user to enter the spelling of a variety of words using their mobile device.\n\nFor each spoken word, the user is required to spell the word in English in a text input field within a specified period of time (20 seconds) before moving onto the next question.\n\nThe user will later be presented with a final score page following the completion of the quiz."
                                },
                                cardAction: {
                                    isDownloadLink: true,
                                    link: "spellbound.apk",
                                    backupDownloadLink: SpellBoundApk,
                                    linkButtonText: "Download Android App",
                                    iconButtonsAvailable: true,
                                    iconButtons: [
                                        {
                                            key: 0,
                                            label: "Built using Android Studio",
                                            icon: AndroidStudioIcon,
                                            isCustomIcon: false,
                                            link: "https://developer.android.com/studio"
                                        },
                                        {
                                            key: 1,
                                            label: "Built using Java",
                                            icon: JavaIcon,
                                            isCustomIcon: false,
                                            link: "https://www.java.com"
                                        },
                                        {
                                            key: 2,
                                            label: "Built using XML",
                                            icon: XmlIcon,
                                            isCustomIcon: false,
                                            link: "https://www.w3.org/TR/REC-xml/",
                                            color: "#E07A2E"
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
                                    media: "https://www.youtube.com/embed/f_vYqlDXKb0",
                                    youtubeVideoId: "f_vYqlDXKb0"
                                },
                                cardContent: {
                                    title: "Area 51",
                                    description: "A second year university project (Games Programming) mobile game (Android) built using Unreal Engine.\n\nStoryline: The game centres around a fictional alien character called ‘Flimbo’, who has crash landed in the notorious military compound called ‘Area 51’. The United States Air Force are hunting down the character and have dropped a number of bombs in the level, whereby the objective is to simply get Flimbo to safety by reaching another alien spacecraft that has landed to pick him up, all in less than sixty seconds!\n\nThe bombs will cause damage to the player on contact, which will result in the player’s health being effected and will also slow the character down. Furthermore, the character will be destroyed if they should come into contact with too many bombs or if the timer reaches the zero, whereby this will result in the game terminating. Finally, the level will be completed if the player reaches the friendly spacecraft."
                                },
                                cardAction: {
                                    isDownloadLink: true,
                                    link: "area-51.apk",
                                    backupDownloadLink: Area51Apk,
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
                }
            ]
        };
        this.portfolioRef = React.createRef();
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
        if (prevProps.navigation.portfolioComponent.height !== this.portfolioRef.current.scrollHeight) this.setComponentMeasurements();
    }

    componentWillUnmount() {
        clearTimeout(this.resizeEventTimer);
        window.removeEventListener("resize", this.resizeEvent);
    }

    setComponentMeasurements = () => {
        const contentStartPoint = isWidthDown("xs", this.props.width) ? 100 : 200;
        const {appBarComponent} = this.props.navigation;
        const height = this.portfolioRef.current.scrollHeight;
        const distanceToTop = this.portfolioRef.current.offsetTop + (contentStartPoint - appBarComponent.height);
        this.props.updatePortfolio({height: height, distanceToTop: distanceToTop});
    };

    render() {
        const {classes} = this.props;
        const {portfolio} = this.state;
        const widthSmDown = isWidthDown("sm", this.props.width);
        const widthXsDown = isWidthDown("xs", this.props.width);
        return (
            <div ref={this.portfolioRef}>
                <Grid alignItems="flex-start" container justify="center">
                    <Grid item md={12} xs={12}>
                        <Fade in={true} timeout={{enter: 3000}}>
                            <Typography color="secondary" gutterBottom variant={widthSmDown ? "h5" : "h4"}>
                                Portfolio
                            </Typography>
                        </Fade>
                    </Grid>
                    <Grid alignItems="flex-start" container>
                        <Grid item xs>
                            <GridList cellHeight="auto" className={classes.gridList}
                                      cols={portfolio.length === 1 ? 1 : widthXsDown ? 1.2 : widthSmDown ? 1.5 : 2.5}
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