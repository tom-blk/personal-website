'use client'
import React from 'react'

import { Technology } from '@/app/types/AppTypes'

interface Props{
    technologies: Technology[]
    columns: number
}

const TechnologyLogoList = (props : Props) => {
    const {technologies, columns} = props

    const navigateToTechnologyUrl = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div className={`w-full h-full z-20 grid grid-cols-${columns} gap-3`}>
                {
                technologies.map((technology, index) => (
                    <article className={"hover:cursor-pointer"} key={index} onClick={() => navigateToTechnologyUrl(technology.technologyUrl)}>
                        <img className={"w-full h-auto"} src={technology.imageUrl} alt={technology.name}/>
                    </article>
                ))
                }
        </div>
    )
}

export default TechnologyLogoList