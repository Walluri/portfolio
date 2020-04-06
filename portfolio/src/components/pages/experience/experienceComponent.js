import React from 'react'


const ExperienceComponent = (props)=>{
    return (

    <div className='experience'>       
        <div className='experience__content'>
            <div className='experience__content-header'>
                <div className='company'>{props.matter.name}</div>
                <div className='role'>{props.matter.role}</div>
            </div>
            <div className='experience__content-body'>
                <div className='duties'>Roles and Responsibilities</div>
                <div className='dutiesList'>
                    <ul>
                        {props.matter.rnrDesktop.map( 
                            (item,id)=>{
                            return <li key={id}>{item}</li>  }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export {ExperienceComponent}
