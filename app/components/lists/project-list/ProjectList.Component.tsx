import React from 'react'
import ProjectCardFlipper from '../../cards/project-card/project-card-flipper/ProjectCardFlipper.Component'
import { allProjects } from '@/app/data/projects'

const ProjectList= () => {

    const projects = allProjects

  return (
    <div className={"grid gap-4"}>
        <div className={"font-bold"}>Project List</div>
        <div className={"flex flex-wrap gap-3 w-full"}>
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCardFlipper key={index} {...project}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProjectList