import React from 'react';
import {getSkillSVG} from '../../resources/svg/svgRCSkills'

const Skills = () => {
    return (
        <div className="section__skills">
            <div className="section__skills-web">
                <div className="section__skills-web-title">
                    <h2>Web developer Skills</h2>
                </div>
                <div className="section__skills-web-skills">

                    <div className="section__skills-web-skillbox">
                        <div className='svg'> {getSkillSVG({svg:'html5'})} </div>
                        <div className='text'>HTML5</div>
                    </div>
                    <div className="section__skills-web-skillbox">
                        <div className='svg'> {getSkillSVG({svg:'css3'})} </div>
                        <div className='text'>CSS3</div>
                    </div>  
                    <div className="section__skills-web-skillbox">
                        <div className='svg'> {getSkillSVG({svg:'javascript'})} </div>
                        <div className='text'> Javascript </div>
                    </div>
                    <div className="section__skills-web-skillbox">
                        <div className='svg'> {getSkillSVG({svg:'reactjs'})} </div>
                        <div className='text'>ReactJS</div>
                    </div> 
                                        
                </div>
            </div>
        </div>
    )
}

export default Skills;