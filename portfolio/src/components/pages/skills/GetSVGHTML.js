import React from 'react'
import {getSkillSVG} from '../../../resources/svg/svgRCSkills';

const GetSVGHTML = (props)=>{

    return(
        props.svgArray.map((item,id)=>{
            return <div className="section__skills-other-skillbox" onClick={props.updateChildClickHandler}>
                <div className='svg'> {getSkillSVG({svg:item})} </div>
            </div> 
        })                   
    )
}
export {GetSVGHTML}