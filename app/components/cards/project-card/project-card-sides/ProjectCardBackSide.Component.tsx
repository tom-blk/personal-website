import React from 'react'
import Link from 'next/link'

import { Technology } from '@/app/types/AppTypes'
import TechnologyLogoList from '@/app/components/lists/technology-logo-list/TechnologyLogoList.Component'

const ProjectCardBackSide = ({technologies} : {technologies: Technology[]}) => { 

  return (
    <div className={"relative p-6"}>
      <TechnologyLogoList technologies={technologies} columns={4}/>
    </div>
  )
}

export default ProjectCardBackSide