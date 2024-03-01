import React from 'react'

import { Technology } from '@/app/types/Projects'
import Link from 'next/link'

const TechnologyPreview = ({technologies} : {technologies: Technology[]}) => { 

  return (
    <div className={"absolute w-max left-full z-20 grid grid-cols-3 gap-3 border border-gray-800 rounded-md p-4 bg-black bg-opacity-90"}>
        {
            technologies.map((technology, index) => (
              <Link key={index} href={technology.technologyUrl} target="_blank">
                <img className={"w-7 h-auto"} src={technology.imageUrl} alt={technology.name}/>
              </Link>
            ))
        }
    </div>
  )
}

export default TechnologyPreview