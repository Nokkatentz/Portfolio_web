import "./navbar.css";
import React from "react";

function Navbar(){
    let url = 'df';
    return(
        <div id="nav">
            <div id="space">
            </div>
            <div id="list-menu">
                <a href={url}>Personal Information</a>
                <a href={url}>Skills</a>
                <a href={url}>Achievment</a>
                <a href={url}>Contract</a>
            </div>
        </div>
    );
}
export default Navbar;