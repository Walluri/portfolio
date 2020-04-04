import React, {useState} from 'react';
import {getSkillSVG} from '../../../resources/svg/svgRCSkills';
import {Overlaypopup} from './Overlaypopup';
import {GetSVGHTML} from './GetSVGHTML';

const Skills = () => {

    const [showPopUp,setShowPopUp] = useState(false);

    const boxclick = (e)=> {
        setShowPopUp( (preVal)=>{ return !preVal}); 
    }

    const childClicked = ()=>{
        setShowPopUp( (preVal)=>{ return !preVal}); 
    }

    return (
        <div className="section__skills">
            <div className="section__skills-web">
                <div className="section__skills-web-title">
                    <h2>Dev - Skills</h2>
                </div>
                <div className="section__skills-web-skillsImage">
                    <div className='svg'> {getSkillSVG({svg:'html5'})} </div>
                    <div className='svg'> {getSkillSVG({svg:'css3'})} </div>                    
                    <div className='svg'> {getSkillSVG({svg:'javascript'})} </div>
                    <div className='svg'> {getSkillSVG({svg:'reactjs'})} </div>                                                            
                </div>
                <div className="section__skills-web-skillsText">
                    <ul>
                        <li key='1'> React way of developing components</li>
                        <li key='2'> Advanced CSS with Animations</li>
                        <li key='3'> Javascript using ES6</li>
                        <li key='4'> And the below Tech Stack </li>
                    </ul>
                </div>                                
            </div>
            <div className="section__skills-other">
                <GetSVGHTML svgArray={['sass','typescript','bash','cloud',
                                        'docker', 'github', 'webpack','responsivedesign',
                                        'cssgrid','nginx','es6','nodejs','mongodb']} 
                            updateChildClickHandler={childClicked}/>
            </div>
            <div>
                <Overlaypopup show={showPopUp} updateChildClickHandler={childClicked}/>
            </div>
        </div>

    )
}

export default Skills;
