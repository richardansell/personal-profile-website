import {
    UPDATE_ABOUT,
    UPDATE_SKILLS,
    UPDATE_PORTFOLIO,
    UPDATE_EDUCATION,
    UPDATE_EXPERIENCE,
    UPDATE_CONTACT
} from "../constants/action-types";

const navigationState = {
    aboutComponent: {
        height: 0,
        distanceToTop: 0
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