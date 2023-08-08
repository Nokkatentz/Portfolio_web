import "./home.css";
import React from "react";
import Personal from "./personal";
import Skills from "./skills";
import Typewriters from "../other/typewriter";
import Acheivment from "./acheivment";
import Footer from "./footer";

function Home() {
    return(
        <div id="main-home">
            <div id="bg-main">
                <img src="/img/Ellipse 1.png" alt="gb-main"/>
            </div>
            <div id="main">
                <div id="profile">
                    <img src="/img/26 1.png" alt="profile"/>
                </div>
                <div id="all-text-main">
                    <div id="main-text-head">
                        <p>
                            <Typewriters/>
                        </p>
                    </div>
                    <div id="main-text">
                        <p>        
                            &emsp;&emsp;<span>Hello</span>, my name is <span>Pratchaya Posom</span>. Currently, I am seeking a job as a front-end developer. 
                            I graduated from Naresuan University with a degree in Computer Engineering. I have experience in web development using <span>HTML, CSS, JavaScript </span> 
                            and frameworks such as <span>React Js</span>.<br/>
                            <br/>
                            &emsp;&emsp;During my third year of studies, I had the opportunity to intern with a professor who specialized in IoT system development.
                             In this role, I was involved in developing applications using <span>Dart</span> and the <span>Flutter</span> framework to control IoT devices.<br/>
                             <br/>
                            &emsp;&emsp;For my senior project, I worked on developing an <span>AI model</span> for detecting Triple ridding by using <span>YOLOv5</span> and <span>DeepSort</span>. 
                            I successfully deployed the model in <span>PYQT5</span> to make it user-friendly.<br/>
                            <br/>
                            &emsp;&emsp;I am a self-driven individual who is always eager to learn and grow. I am open to embracing new ideas and perspectives from everyone around me.<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div id="vector-main">
                    <img src="/img/Group 12.png" alt="vector-bg"/>
                </div>
            </div>
            
            <div id="personal-part">
                <Personal/>
            </div>
            <div id="skills-part">
                <Skills/>
            </div>
            <div id="acheivment-part">
                <Acheivment/>
            </div>
            <div id="footer-part">
                <Footer/>
            </div>
        </div>
    );
};
export default Home;