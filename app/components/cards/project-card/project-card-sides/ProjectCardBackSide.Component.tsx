import React from 'react'
import Link from 'next/link'

import { Technology } from '@/app/types/AppTypes'

const ProjectCardBackSide = ({technologies} : {technologies: Technology[]}) => { 

  return (
    <div className={"relative"}>
      <div className={"w-full h-full z-20 grid grid-cols-4 gap-3 p-6"}>
        {
        technologies.map((technology, index) => (
          <Link key={index} href={technology.technologyUrl} target="_blank">
            <img className={"w-full h-auto"} src={technology.imageUrl} alt={technology.name}/>
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default ProjectCardBackSide