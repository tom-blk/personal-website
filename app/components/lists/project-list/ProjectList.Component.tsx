import React from 'react'
import ProjectCardFlipper from '../../cards/project-card/project-card-flipper/ProjectCardFlipper.Component'
import ListWrapper from '../../wrappers/list-wrapper/ListWrapper.Component'
import LargeCardGridResponsivenessHandler from '../../wrappers/large-card-grid-responsiveness-handler/LargeCardGridResponsivenessHandler.Component'
import { getAllProjectsWithTechnologies } from '@/app/api/fetch'

const ProjectList = async () => {

    const projects = await getAllProjectsWithTechnologies();

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