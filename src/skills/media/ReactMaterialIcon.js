import React from "react";
import {SvgIcon} from "@material-ui/core";

export function ReactMaterialIcon(props) {
    return (
        <SvgIcon {...props}>
            <svg viewBox="0 0 600 476.6" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 259.8v-259.8l225 129.9v86.6l-150-86.6v173.2z" style={{fill: "#00b0ff"}}/>
                <path d="m225 129.9 225-129.9v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                      style={{fill: "#0081cb"}}/>
                <path d="m225 303.1v86.6l150 86.6v-86.6z" style={{fill: "#00b0ff"}}/>
                <path d="m375 476.3 225-129.9v-173.2l-75 43.3v86.6l-150 86.6zm150-346.4v-86.6l75-43.3v86.6z"
                      style={{fill: "#0081cb"}}/>
            </svg>
        </SvgIcon>
    );
}