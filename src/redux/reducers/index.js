import {combineReducers} from 'redux'
import actionMessage from "./action-message";
import contactFormStatus from "./contact-form-status";
import navigation from "./navigation";
import touchScreen from "./touch-screen";
import webpSupport from "./webp-support";

export default combineReducers({actionMessage, contactFormStatus, navigation, touchScreen, webpSupport});