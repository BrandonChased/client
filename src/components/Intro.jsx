import React from "react";
import ComputerImage from "../images/computer.jpg";

function Intro() {
    return (
        <div className="container" id="intro">
            <p className="intro__header" style={{ fontWeight: "bold" }}>
                Brandon DeBenedictis
            </p>
            <div className="intro__container">
                <div className="intro__container--top">
                    <p className="intro__container--header">I'm a Full Stack Developer and Critical Thinker</p>
                    <p className="text-secondary h5 pb-3">
                        Hello, my name is Brandon and I have a unique background that has led
                        me to where I am today. I initially trained as an airplane mechanic
                        and worked in the field for a year. However, I eventually discovered a
                        passion for coding and decided to pursue it.
                    </p>
                    <p className="text-secondary h5">
                        After self-teaching for a while, I decided to enroll in a 14-week
                        intensive coding bootcamp called Coding Dojo. During the bootcamp, I
                        completed over 1000 hours of training in various programming
                        languages, including HTML, CSS, JavaScript, Python/Flask/MySQL, JAVA,
                        and MERN (MongoDB, Express, React, Node.js) stacks.
                    </p>
                </div>
                <img className="intro__container--img img-fluid mb-5" src={ComputerImage} />
            </div>
        </div>
    );
}

export default Intro;
