'use client'
import React, { ReactNode, useState } from 'react'
import MiniCardWrapper from '../../generic/mini-card-wrapper/MiniCardWrapper.Component'
import TechnologyDetailsCard from '../technology-details-card/TechnologyDetailsCard.Component'

interface Props{
    children: ReactNode,
    className?: string
}

const TechnologyCard = (props: Props) => {
    const {children, className} = props

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <MiniCardWrapper className={"relative grid place-items-center gap-1 hover:bg-opacity-10 py-2 px-3"}>
                {children}
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