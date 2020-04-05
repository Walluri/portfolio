import React, {useState} from 'react';
import {getSkillSVG} from '../../../resources/svg/svgRCSkills';
import {Overlaypopup} from './Overlaypopup';
import {GetSVGHTML} from './GetSVGHTML';
import {GetSkillContent} from './SkillContent';

const  svgArray = ['sass','typescript','bash','cloud',
                    'docker', 'github', 'webpack','responsivedesign',
                    'cssgrid','nginx','es6','nodejs','mongodb'];

const Skills = () => {

    const [showPopUp,setShowPopUp] = useState(false);

    const [currentClicked,SetCurrentClicked] = useState(-1);

    const overlayORpopupClicked = ()=>{
        setShowPopUp( (preVal)=>{ return !preVal}); 
    }
    
    const childSVGClicked = (id)=>{
        SetCurrentClicked(id);
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
                <GetSVGHTML svgArray={svgArray} 
                            updateChildClickHandler={childSVGClicked}/>
            </div>
            <div>
                <Overlaypopup show={showPopUp} updateChildClickHandler={overlayORpopupClicked}
                    title={svgArray[currentClicked]} content={GetSkillContent(svgArray[currentClicked])}/>
            </div>
        </div>

    )
}

export default Skills;
