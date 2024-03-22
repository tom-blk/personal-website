'use client'
import React, { ReactNode, useState } from 'react'
import MiniCardWrapper from '../../generic/mini-card-wrapper/MiniCardWrapper.Component'
import TechnologyDetailsCard from '../technology-details-card/TechnologyDetailsCard.Component'

interface Props{
    name: string,
    imageUrl: string,
    className?: string
}

const TechnologyCard = (props: Props) => {
    const {name, imageUrl, className} = props

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <MiniCardWrapper className={"relative grid place-items-center gap-2 hover:bg-opacity-10 py-2 px-3 lg:py-4 lg:px-6 text-sm md:text-base"}>
                <img src={imageUrl} alt={name} className={"w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"}/>
                <div className={"grid place-items-center"}>{name}</div>
                {
                isHovered
                ?
                <TechnologyDetailsCard professionalExperience={1} positions='Front End Developer @PowMio' projects='Prometheus' generalExperience={3}/>
                :
                <></>
                }
            </MiniCardWrapper>
        </div>
  )
}

export default TechnologyCard