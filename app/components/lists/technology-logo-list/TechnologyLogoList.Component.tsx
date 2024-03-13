import React from 'react'

import { Technology } from '@/app/types/AppTypes'
import Link from 'next/link'

interface Props{
    technologies: Technology[]
    columns: number
}

const TechnologyLogoList = (props : Props) => {
    const {technologies, columns} = props

    return (
        <div className={`w-full h-full z-20 grid grid-cols-8 gap-3`}>
                {
                technologies.map((technology, index) => (
                    <Link key={index} href={technology.technologyUrl} target="_blank">
                        <img className={"w-full h-auto"} src={technology.imageUrl} alt={technology.name}/>
                    </Link>
                ))
                }
        </div>
    )
}

export default TechnologyLogoList