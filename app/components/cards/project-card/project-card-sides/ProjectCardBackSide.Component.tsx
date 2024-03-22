import React from 'react'

import { Technology } from '@/app/types/AppTypes'
import TechnologyLogoList from '@/app/components/lists/technology-logo-list/TechnologyLogoList.Component'

const ProjectCardBackSide = ({technologies} : {technologies: Technology[]}) => { 

  return (
    <div className={"relative p-6 lg:p-8"}>
      <TechnologyLogoList technologies={technologies} tailwindColumns={"grid-cols-4"} tailwindColumnsLarge={"lg:grid-cols-5"}/>
    </div>
  )
}

export default ProjectCardBackSide