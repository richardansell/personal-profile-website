import {SET_TOUCH_SCREEN_STATUS} from "../constants/action-types";

const touchScreenState = {
    isTouchScreen: false
};

function touchScreen(state = touchScreenState, action) {
    if (action.type === SET_TOUCH_SCREEN_STATUS) {
        return Object.assign({}, state, {
            isTouchScreen: action.payload
        });
    } else {
        return state;
    }
}

export default touchScreen;