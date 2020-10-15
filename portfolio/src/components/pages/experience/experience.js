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
    const sendRequest = ()=>{
        fetch('https://703ridac1g.execute-api.ap-south-1.amazonaws.com/TestStage', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
          })
          .then((response) => response.json())
          .then((res) => {   console.log('Success:', res);   })
          .catch((error) => {   console.error('Error:', error); });
    }
    useEffect(sendRequest,[]);

    return (
    <div>
        <div style={divStyle}>Experience and Education</div>
        <ExperienceComponent matter={GetExperienceContent('ABB2')} />
        <ExperienceComponent matter={GetExperienceContent('ABB')} />
        <ExperienceComponent matter={GetExperienceContent('Integra')} />
        <ExperienceComponent matter={GetExperienceContent('Northgate')} />
    </div>
    )
}

export default Experience;