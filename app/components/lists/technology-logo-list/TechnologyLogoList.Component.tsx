'use client'
import React from 'react'

import { Technology } from '@/app/types/AppTypes'
import Image from 'next/image'

interface Props{
    technologies: Technology[]
    tailwindColumns: 'grid-cols-1' | 'grid-cols-2' | 'grid-cols-3' | 'grid-cols-4' | 'grid-cols-5' | 'grid-cols-6' | 'grid-cols-7' | 'grid-cols-8' | 'grid-cols-9' | 'grid-cols-10'
    tailwindColumnsLarge: 'lg:grid-cols-1' | 'lg:grid-cols-2' | 'lg:grid-cols-3' | 'lg:grid-cols-4' | 'lg:grid-cols-5' | 'lg:grid-cols-6' | 'lg:grid-cols-7' | 'lg:grid-cols-8' | 'lg:grid-cols-9' | 'lg:grid-cols-10'
}

const TechnologyLogoList = (props : Props) => {
    const {technologies, tailwindColumns, tailwindColumnsLarge} = props

    const navigateToTechnologyUrl = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div className={`w-full h-full z-20 grid ${tailwindColumns} ${tailwindColumnsLarge} gap-3`}>
                {
                technologies.map((technology, index) => (
                    <article className={"hover:cursor-pointer"} key={index} onClick={() => navigateToTechnologyUrl(technology.technologyUrl)}>
                        <Image width={0} height={0} sizes='100vw' className={"w-full h-auto"} src={technology.imageUrl} alt={technology.name}/>
                    </article>
                ))
                }
        </div>
    )
}

export default TechnologyLogoList