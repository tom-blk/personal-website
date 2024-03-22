import React from 'react'
import ProjectCardFlipper from '../../cards/project-card/project-card-flipper/ProjectCardFlipper.Component'
import { allProjects } from '@/app/data/projects'
import ListWrapper from '../../wrappers/list-wrapper/ListWrapper.Component'

const ProjectList= () => {

    const projects = allProjects

  return (
    <ListWrapper listName='Projects'>
        <div className={"grid gap-3 md:grid-cols-2 lg:grid-cols-3"}>
        {
            projects.map((project, index) => {
                return (
                    <ProjectCardFlipper key={index} {...project}/>
                )
            })
        }
        </div>
    </ListWrapper>
  )
}

export default ProjectList