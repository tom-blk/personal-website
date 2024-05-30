'use client'

import React, { useEffect, useState } from 'react'

import MiniCardWrapper from '../../generic/mini-card-wrapper/MiniCardWrapper.Component'
import TechnologyDetailsCard from '../technology-details-card/TechnologyDetailsCard.Component'
import { Technology } from '@/app/types/AppTypes'

const TechnologyCard = (props: {technology: Technology}) => {
    const {name, image, startedlearningdate, experience} = props.technology;
    const {professionalexperience, positions, projects, confidence} = experience;

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        console.log(isHovered)
    }, [isHovered])

    const getGeneralExperience = () => {
        return new Date().getFullYear() - startedlearningdate.getFullYear();
    }

    return (
        <div onMouseEnter={e => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <MiniCardWrapper className={"relative grid place-items-center gap-2 hover:bg-opacity-10 py-2 px-3 lg:py-4 lg:px-6 text-sm md:text-base"}>
                <img src={image} alt={name} className={"w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"}/>
                <div className={"grid place-items-center"}>{name}</div>
            </MiniCardWrapper>
            {
            isHovered
            ?
            <TechnologyDetailsCard professionalExperience={professionalexperience} positions={positions} projects={projects} confidence={confidence} generalExperience={getGeneralExperience()}/>
            :
            <></>
        }
        </div>
  )
}

export default TechnologyCard
