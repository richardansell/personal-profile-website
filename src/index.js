import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import {detect} from "detect-browser";
import UnsupportedBrowser from "./unsupported_browser/UnsupportedBrowser";

ReactDOM.render(
    <Provider store={store}>
        {detect().name !== "ie" ? <App/> : <UnsupportedBrowser/>}
    </Provider>, document.getElementById("root")
);

serviceWorker.unregister();