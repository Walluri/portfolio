import React from 'react'
import {getSkillSVG} from '../../../resources/svg/svgRCSkills';

const GetSVGHTML = (props)=>{

    const divClicked = (e)=>{   
        props.updateChildClickHandler(e.currentTarget.id);
    }

    return(
        props.svgArray.map((item,id)=>{
            return (                              
                    <div className="section__skills-other-skillbox" onClick={divClicked} key={id} id={id}>
                        <div className='svg' > {getSkillSVG({svg:item})} </div>
                    </div> 
                    )
        })                   
    )
}
export {GetSVGHTML}