import React from "react";
import {SvgIcon} from "@material-ui/core";

export function GrommetIcon(props) {
    return (
        <SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48">
                <path style={{fill: "none", stroke: "#865CD6", strokeWidth: "5"}}
                      d="M24,42 C33.9411255,42 42,33.9411255 42,24 C42,14.0588745 33.9411255,6 24,6 C14.0588745,6 6,14.0588745 6,24 C6,33.9411255 14.0588745,42 24,42 Z"/>
            </svg>
        </SvgIcon>
    );
}