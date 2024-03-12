'use client'
import React, { ReactNode, useState } from 'react'
import MiniCard from '../../generic/mini-card/MiniCard.Component'
import OnHoverView from '../../on-hover-view/OnHoverView.Component'

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
                <OnHoverView />
                :
                <></>
                }
            </MiniCard>
        </div>
  )
}

export default TechnologyCard