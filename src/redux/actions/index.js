import {
    SET_ACTION_MESSAGE,
    SET_CONTACT_FORM_STATUS,
    SET_TOUCH_SCREEN_STATUS,
    UPDATE_ABOUT,
    UPDATE_APP_BAR,
    UPDATE_CONTACT,
    UPDATE_EDUCATION,
    UPDATE_EXPERIENCE,
    UPDATE_PORTFOLIO,
    UPDATE_SKILLS,
    UPDATE_WEBP_SUPPORT_LOSSLESS,
    UPDATE_WEBP_SUPPORT_LOSSY
} from "../constants/action-types";

export const updateWebPsupportLossy = payload => {
    return {type: UPDATE_WEBP_SUPPORT_LOSSY, payload}
};

export const updateWebPsupportLossless = payload => {
    return {type: UPDATE_WEBP_SUPPORT_LOSSLESS, payload}
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

export const setActionMessage = payload => {
    return {type: SET_ACTION_MESSAGE, payload}
};

export const setTouchScreenStatus = payload => {
    return {type: SET_TOUCH_SCREEN_STATUS, payload}
};

export const setContactFormStatus = payload => {
    return {type: SET_CONTACT_FORM_STATUS, payload}
};