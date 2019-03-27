import {UPDATE_WEBP_SUPPORT_LOSSLESS, UPDATE_WEBP_SUPPORT_LOSSY} from "../constants/action-types";

const webPstate = {
    lossy: false,
    lossless: false
};

function webpsupport(state = webPstate, action) {
    switch (action.type) {
        case UPDATE_WEBP_SUPPORT_LOSSY:
            return Object.assign({}, state, {
                lossy: action.payload
            });
        case UPDATE_WEBP_SUPPORT_LOSSLESS:
            return Object.assign({}, state, {
                lossless: action.payload
            });
        default:
            return state;
    }
}

export default webpsupport;