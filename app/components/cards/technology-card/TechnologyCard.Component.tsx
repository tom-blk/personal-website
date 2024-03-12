'use client'
import React, { ReactNode, useState } from 'react'
import MiniCard from '../../generic/mini-card/MiniCard.Component'
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
            <MiniCard className={"relative flex gap-1 justify-around hover:bg-opacity-10 py-2 px-6"}>
                {children}
                {
                isHovered
                ?
                <TechnologyDetailsCard professionalExperience={1} positions='Front End Developer @PowMio' projects='Prometheus' generalExperience={3}/>
                :
                <></>
                }
            </MiniCard>
        </div>
  )
}

export default TechnologyCard