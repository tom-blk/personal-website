import React from 'react'
import ProjectCardFlipper from '../../cards/project-card/project-card-flipper/ProjectCardFlipper.Component'
import { allProjects } from '@/app/data/projects'
import ListWrapper from '../../wrappers/list-wrapper/ListWrapper.Component'
import LargeCardGridResponsivenessHandler from '../../wrappers/large-card-grid-responsiveness-handler/LargeCardGridResponsivenessHandler.Component'
import { getAllProjects } from '@/app/api/fetch'

const ProjectList = async () => {

    //const projects = allProjects
    const projects = await getAllProjects()

    console.log(projects);

    return (
        <ListWrapper listName='Projects'>
            {
                projects && projects.length 
                ?
                <LargeCardGridResponsivenessHandler amountOfCards={projects.length}>
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCardFlipper key={index} {...project}/>
                            )
                        })
                    }
                </LargeCardGridResponsivenessHandler>
                :
                <div>Nothing here...</div>
            } 
        </ListWrapper>
    )
}

export default ProjectList