import {
    UPDATE_ABOUT,
    UPDATE_APP_BAR,
    UPDATE_COMPONENT_DISTANCES_TO_TOP,
    UPDATE_CONTACT,
    UPDATE_EDUCATION,
    UPDATE_EXPERIENCE,
    UPDATE_PORTFOLIO,
    UPDATE_SKILLS,
    UPDATE_TAB_INDEX
} from "../constants/action-types";

const navigationState = {
    componentDistancesToTop: false,
    tabIndex: 0,
    appBarComponent: {
        height: 0
    },
    aboutComponent: {
        height: 0
    },
    skillsComponent: {
        height: 0,
        distanceToTop: 0
    },
    portfolioComponent: {
        height: 0,
        distanceToTop: 0
    },
    educationComponent: {
        height: 0,
        distanceToTop: 0
    },
    experienceComponent: {
        height: 0,
        distanceToTop: 0
    },
    contactComponent: {
        height: 0,
        distanceToTop: 0
    }
};

function navigation(state = navigationState, action) {
    switch (action.type) {
        case UPDATE_COMPONENT_DISTANCES_TO_TOP:
            return Object.assign({}, state, {
                componentDistancesToTop: action.payload
            });
        case UPDATE_TAB_INDEX:
            return Object.assign({}, state, {
                tabIndex: action.payload
            });
        case UPDATE_APP_BAR:
            return Object.assign({}, state, {
                appBarComponent: action.payload
            });
        case UPDATE_ABOUT:
            return Object.assign({}, state, {
                aboutComponent: action.payload
            });
        case UPDATE_SKILLS:
            return Object.assign({}, state, {
                skillsComponent: action.payload
            });
        case UPDATE_PORTFOLIO:
            return Object.assign({}, state, {
                portfolioComponent: action.payload
            });
        case UPDATE_EDUCATION:
            return Object.assign({}, state, {
                educationComponent: action.payload
            });
        case UPDATE_EXPERIENCE:
            return Object.assign({}, state, {
                experienceComponent: action.payload
            });
        case UPDATE_CONTACT:
            return Object.assign({}, state, {
                contactComponent: action.payload
            });
        default:
            return state;
    }
}

export default navigation;