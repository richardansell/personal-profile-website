import React from "react";
import {SvgIcon} from "@material-ui/core";

export function ProjectIcon(props) {
    return (
        <SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="24" height="24"
                 viewBox="0 0 48 48"
                 style={{fill: "#000000"}}>
                <g id="surface1">
                    <path style={{fill: "#81C784"}}
                          d="M 41 10 L 25 10 L 25 38 L 41 38 C 41.601563 38 42 37.601563 42 37 L 42 11 C 42 10.398438 41.601563 10 41 10 Z "/>
                    <path style={{fill: "#FFFFFF"}}
                          d="M 39 23 L 35 27 L 31 23 L 34 23 L 34 17 L 27 17 L 27 15 L 36 15 L 36 23 Z M 29 26 L 25 30 L 29 34 L 33 30 Z "/>
                    <path style={{fill: "#43A047"}} d="M 27 42 L 6 38 L 6 10 L 27 6 Z "/>
                    <path style={{fill: "#FFFFFF"}}
                          d="M 16.800781 17 L 12 17 L 12 31 L 15 31 L 15 26.199219 L 16.601563 26.199219 C 18.300781 26.199219 19.601563 25.800781 20.601563 24.898438 C 21.601563 24 22.101563 22.898438 22.101563 21.5 C 22 18.5 20.300781 17 16.800781 17 Z M 16.300781 23.800781 L 15 23.800781 L 15 19.398438 L 16.300781 19.398438 C 17.898438 19.398438 18.800781 20.101563 18.800781 21.601563 C 18.800781 23.101563 17.898438 23.800781 16.300781 23.800781 Z "/>
                </g>
            </svg>
        </SvgIcon>
    );
}