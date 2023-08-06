import "./skills.css";
import ManageIconSkills from "../other/manage-icon-skills";
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
            <div id="text-head">
                <p>
                    Web Programming
                </p>
            </div>
            <div id="icon-web">
                <div id="icon-sec1">
                    <div id="html">
                        <ManageIconSkills type = '1' icon = "/icon/html-5.png" text = "Intermediate"/>
                    </div>
                    <div id="css">
                        <ManageIconSkills type = '1' icon = "/icon/css-3.png" text = "Intermediate"/>
                    </div>
                    <div id="js">
                        <ManageIconSkills type = '1' icon = "/icon/js.png" text = "Basic"/>
                    </div>
                </div>
                <div id="icon-sec2">
                    <div id="react">
                        <ManageIconSkills type = '1' icon = "/icon/react.png" text = "Basic"/>
                    </div>
                </div>
            </div>
            <div id="line-bar">
                <div></div>
            </div>
            <div id="mobile-addi-part">
                <div id="mobile-part">
                    <div id="text-head">
                        <p>
                            Mobile Application
                        </p>
                    </div>
                    <div id="icon-mobile">
                        <div id="dart">
                            <ManageIconSkills type = '1' icon = '/icon/Dart.png' text = 'Basic'/>
                        </div>
                        <div id="flutter">
                            <ManageIconSkills type = '1' icon = '/icon/Flutter.png' text = 'Basic'/>
                        </div>
                    </div>
                </div>
                <div id="addi-part">
                    <div id="text-head">
                        <p>
                            Additional skills
                        </p>
                    </div>
                    <div id="icon-addi">
                        <div id="git">
                            <ManageIconSkills type = '1' icon = '/icon/code.png' text = 'Git,GitHub'/>
                        </div>
                        <div id="maintane">
                            <ManageIconSkills type = '1' icon = '/icon/service.png' text = 'Computer Maintenance'/>
                        </div>
                    </div>
                </div>
            </div>
            <div id="line-bar">
                <div></div>
            </div>
            <div id="Ai-part">
                <div id="text-head">
                    <p>
                        AI & Machines Learning
                    </p>
                </div>
                <div id="icon-Ai">
                    <div id="yolo">
                        <ManageIconSkills type = '2' icon = '/icon/Yolov5.png' text = 'Intermediate'/>
                    </div>
                    <div id="pyqt">
                        <ManageIconSkills type = '2' icon = '/icon/pyqt5.png' text = 'Intermediate'/>
                    </div>
                    <div id="python">
                        <ManageIconSkills type = '2' icon = '/icon/Python.png' text = 'Intermediate'/>
                    </div>
                </div>
            </div>
            <div id="line-bar-end">
                <div></div>
            </div>
        </div>
    );
};
export default Skills;