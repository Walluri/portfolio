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
            <div className="section__skills-other">
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'sass'})} </div>
                </div>
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'typescript'})} </div>
                </div> 
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'bash'})} </div>
                </div>  
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'cloud'})} </div>
                </div>                
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'docker'})} </div>
                </div> 
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'github'})} </div>
                </div> 
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'webpack'})} </div>
                </div> 
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'responsivedesign'})} </div>
                </div> 
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'cssgrid'})} </div>
                </div> 
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'nginx'})} </div>
                </div>
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'es6'})} </div>
                </div> 
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'nodejs'})} </div>
                </div>  
                <div className="section__skills-other-skillbox">
                    <div className='svg'> {getSkillSVG({svg:'mongodb'})} </div>
                </div>                                                 
            </div>
        </div>
    )
}

export default Skills;