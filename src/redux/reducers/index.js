import {combineReducers} from 'redux'
import actionMessage from "./action-message";
import navigation from "./navigation";
import touchScreen from "./touch-screen";
import webpSupport from "./webp-support";

export default combineReducers({actionMessage, navigation, touchScreen, webpSupport});