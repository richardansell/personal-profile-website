import React from "react";
import {SvgIcon} from "@material-ui/core";

export function VisioIcon(props) {
    return (
        <SvgIcon {...props}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 width="24" height="24"
                 viewBox="0 0 48 48"
                 style={{enableBackground: "new 0 0 12 12", fill: "#000000"}}>
                <g id="surface1">
                    <path style={{fill: "#7986CB"}} d="M42,10H26v28h16c0.6,0,1-0.4,1-1V11C43,10.4,42.6,10,42,10z"/>
                    <rect x="27" y="17" style={{fill: "#E8EAF6"}} width="6" height="2"/>
                    <path style={{fill: "#E8EAF6"}} d="M32,34h-8v-8h8V34z M26,32h4v-4h-4V32z"/>
                    <path style={{fill: "#3949AB"}} d="M28,42L7,38V10l21-4V42z"/>
                    <path style={{fill: "#FFFFFF"}}
                          d="M15,31.7L11,17l2.8-0.2l2.8,11.4h0.2l3-12L23,16l-4.7,16L15,31.7z"/>
                    <path style={{fill: "#E8EAF6"}}
                          d="M36,22.4L31.6,18l4.4-4.4l4.4,4.4L36,22.4z M34.4,18l1.6,1.6l1.6-1.6L36,16.4L34.4,18z"/>
                    <polygon style={{fill: "#E8EAF6"}} points="37,31 32,31 32,29 35,29 35,21 37,21  "/>
                </g>
            </svg>
        </SvgIcon>
    );
}