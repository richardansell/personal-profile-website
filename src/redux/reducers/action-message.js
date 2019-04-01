import {SET_ACTION_MESSAGE} from "../constants/action-types";

const actionMessageState = {
    actionMessageContent: {
        actionMessageType: "",
        copyText: "",
        link: "",
        message: "",
        open: false
    }
};

function actionMessage(state = actionMessageState, action) {
    if (action.type === SET_ACTION_MESSAGE) {
        return Object.assign({}, state, {
            actionMessageContent: action.payload
        });
    } else {
        return state;
    }
}

export default actionMessage;