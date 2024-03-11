import React from 'react'

import { Technology } from '@/app/types/Projects'
import Link from 'next/link'
import GradientBackground from '../../building-blocks/gradient-background/GradientBackground.Component'

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
      <div className={"w-full left-0 top-0 h-full z-21 absolute"}>
        <GradientBackground/>
      </div>
    </div>
  )
}

export default ProjectCardBackSide