import "./skills.css"
import Manage_icon_skills from "./manage-icon-skills";
import React from 'react';

function Skills(){
    return(
        <div id="skills-part">
            <div id="skills-text-head">
                <p>
                    Skills
                </p>
            </div>
            <div id="line-bar">
                <div></div>
            </div>
            <div id="web-programming-text-head">
                <p>
                    Web Programming
                </p>
            </div>
            <div id="icon-web">
                <div id="icon-sec1">
                    <div id="html">
                        <Manage_icon_skills icon = "/icon/html-5.png" text = "Intermediate"/>
                    </div>
                    <div id="css">
                        <Manage_icon_skills icon = "/icon/css-3.png" text = "Intermediate"/>
                    </div>
                    <div id="js">
                        <Manage_icon_skills icon = "/icon/js.png" text = "Basic"/>
                    </div>
                </div>
                <div id="icon-sec2">
                    <div id="react">
                        <Manage_icon_skills icon = "/icon/react.png" text = "Basic"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Skills;