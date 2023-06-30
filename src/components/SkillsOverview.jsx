import React from 'react'
import cssImage from "../images/skills/css.png";
import htmlImg from "../images/skills/html.png";
import gitImg from "../images/skills/git.png";
import mongodbImg from "../images/skills/mongodb.png";
import javascriptImg from "../images/skills/javascript.png";
import nodeImg from "../images/skills/nodejs.png";
import typescriptImg from "../images/skills/typescript.png";
import figmaImg from "../images/skills/figma.png";
import reactImg from "../images/skills/reactjs.png";
import mySQLImg from "../images/skills/mysql.png";
import javaImg from "../images/skills/java.png";
import pythonImg from "../images/skills/python.png";
import sassImg from "../images/skills/sass.png";


function SkillsOverview() {
    return (
        <div className='container skills' id='skills'>
            <h1 className='text-center text-light'>My Skills</h1>
            <div className='skills__container'>
                <img className='skills__img' src={cssImage} alt='css' />
                <img className='skills__img' src={htmlImg} alt='html' />
                <img className='skills__img' src={javascriptImg} alt='javascript' />
                <img className='skills__img' src={typescriptImg} alt='typescript' />
                <img className='skills__img' src={reactImg} alt='react' />
                <img className='skills__img' src={pythonImg} alt='pyton' />
                <img className='skills__img' src={javaImg} alt='figma' />
                <img className='skills__img' src={nodeImg} alt='node' />
                <img className='skills__img' src={mongodbImg} alt='mongodb' />
                <img className='skills__img' src={mySQLImg} alt='mySQL' />
                <img className='skills__img' src={gitImg} alt='git' />
                <img className='skills__img' src={figmaImg} alt='figma' /> 
                <img className='skills__img' src={sassImg} alt='sass' /> 
            </div>
        </div>
    )
}

export default SkillsOverview;