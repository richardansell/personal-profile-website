import {
    UPDATE_TAB_INDEX,
    UPDATE_APP_BAR,
    UPDATE_ABOUT,
    UPDATE_SKILLS,
    UPDATE_PORTFOLIO,
    UPDATE_EDUCATION,
    UPDATE_EXPERIENCE,
    UPDATE_CONTACT
} from "../constants/action-types";

export const updateTabIndex = payload => {
  return {type: UPDATE_TAB_INDEX, payload}
};

export const updateAppBar = payload => {
  return {type: UPDATE_APP_BAR, payload}
};

export const updateAbout = payload => {
    return {type: UPDATE_ABOUT, payload}
};

export const updateSkills = payload => {
    return {type: UPDATE_SKILLS, payload}
};

export const updatePortfolio = payload => {
    return {type: UPDATE_PORTFOLIO, payload}
};

export const updateEducation = payload => {
    return {type: UPDATE_EDUCATION, payload}
};

export const updateExperience = payload => {
    return {type: UPDATE_EXPERIENCE, payload}
};

export const updateContact = payload => {
    return {type: UPDATE_CONTACT, payload}
};