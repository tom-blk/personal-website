import React from 'react'
import ProjectCardFlipper from '../../cards/project-card/project-card-flipper/ProjectCardFlipper.Component'
import { allProjects } from '@/app/data/projects'
import ListWrapper from '../../wrappers/list-wrapper/ListWrapper.Component'
import LargeCardGridResponsivenessHandler from '../../wrappers/large-card-grid-responsiveness-handler/LargeCardGridResponsivenessHandler.Component'

const ProjectList= () => {

    const projects = allProjects

  return (
    <ListWrapper listName='Projects'>
        <LargeCardGridResponsivenessHandler amountOfCards={allProjects.length}>
        {
            projects.map((project, index) => {
                return (
                    <ProjectCardFlipper key={index} {...project}/>
                )
            })
        }
        </LargeCardGridResponsivenessHandler>
    </ListWrapper>
  )
}

export default ProjectList