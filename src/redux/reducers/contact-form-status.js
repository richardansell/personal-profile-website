import {SET_CONTACT_FORM_STATUS} from "../constants/action-types";

const contactFormStatusState = {
    contactFormStatusContent: {
        error: false,
        open: false
    }
};

function contactFormStatus(state = contactFormStatusState, action) {
    if (action.type === SET_CONTACT_FORM_STATUS) {
        return Object.assign({}, state, {
            contactFormStatusContent: action.payload
        });
    } else {
        return state;
    }
}

export default contactFormStatus;