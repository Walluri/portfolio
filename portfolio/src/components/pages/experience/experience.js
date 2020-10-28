import React, { useEffect }from 'react'
import {ExperienceComponent} from './experienceComponent'
import GetExperienceContent from './ExperienceContent'

const divStyle = {
    color: 'white',
    width : '100%',
    padding : '3rem',
    textAlign:'center',
    marginTop : '10vh',
    backgroundColor: '#383838',
    textTransform:'uppercase'
  };

const Experience = ()=>{
    return (
    <div>
        <div style={divStyle}>Work Experience  [ 2008 - Present ]</div>
        <ExperienceComponent matter={GetExperienceContent('ABB2')} />
        <ExperienceComponent matter={GetExperienceContent('ABB')} />
        <ExperienceComponent matter={GetExperienceContent('Integra')} />
        <ExperienceComponent matter={GetExperienceContent('Northgate')} />
    </div>
    )
}

export default Experience;