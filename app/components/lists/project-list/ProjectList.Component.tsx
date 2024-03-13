import React from 'react'
import ProjectCardFlipper from '../../cards/project-card/project-card-flipper/ProjectCardFlipper.Component'
import { allProjects } from '@/app/data/projects'
import ListWrapper from '../../generic/list-wrapper/ListWrapper.Component'

const ProjectList= () => {

    const projects = allProjects

  return (
    <ListWrapper listName='Projects'>
        {
            projects.map((project, index) => {
                return (
                    <ProjectCardFlipper key={index} {...project}/>
                )
            })
        }
    </ListWrapper>
  )
}

export default ProjectList