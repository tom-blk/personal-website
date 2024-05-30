'use client'

import React from 'react'

interface Props{
    professionalExperience: number,
    generalExperience: number,
    positions: string[],
    projects: string[],
    confidence: "I know what I am doing" | "I can get by"
}

const generalClasses = "p-4 z-30 bg-black bg-opacity-90 border border-slate-800 rounded-md text-sm "
const mobileClasses = "animate-fade-in-out fixed inset-x-0 mx-auto bottom-5 text-xs text-left w-max "
const desktopClasses = "lg:text-sm"


const TechnologyDetailsCard = (props: Props) => {
    const {professionalExperience, generalExperience, positions, projects, confidence} = props;

    const returnClassName = confidence === "I know what I am doing" ? "text-green-400" : "text-yellow-400";

    return (
        <article className={generalClasses + mobileClasses + desktopClasses}>
            {
                professionalExperience > 0
                ?
                <div className={'font-bold'}>Years of Professional Experience: <span className={'font-normal'}>{professionalExperience}</span></div>
                :
                <></>
            }
            <div className={'font-bold'}>Years of General Experience: <span className={'font-normal'}>{generalExperience > 0 ? generalExperience : '< 1'}</span></div>
            {
                positions.length > 0 
                    ?
                    <div>
                        <div className='font-bold'>Positions:</div>
                        {
                            positions.map((position, index) => {
                                return <div key={index}>{position}</div>
                            })
                        }
                    </div> 
                    : 
                    <></>
            }
            {
                projects.length > 0 
                    ? 
                    <div>
                        <div className='font-bold'>Projects:</div> 
                        {
                            projects.map((project, index) => {
                                return <div key={index}>{project}</div>
                            })
                        }
                    </div> 
                    : 
                    <></>
            }
            <div className={'font-bold'}>Confidence: <span className={`${returnClassName} font-normal`}>{props.confidence}</span></div>
        </article>
    )
}

export default TechnologyDetailsCard
