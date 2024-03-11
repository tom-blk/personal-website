import React from 'react'

import { Technology } from '@/app/types/Projects'
import Link from 'next/link'

const TechnologyPreview = ({technologies} : {technologies: Technology[]}) => { 

  return (
    <div className={"w-full z-20 grid grid-cols-4 gap-3 p-6"}>
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

export default TechnologyPreview