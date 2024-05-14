import React from 'react'
import ProjectCardFlipper from '../../cards/project-card/project-card-flipper/ProjectCardFlipper.Component'
import ListWrapper from '../../wrappers/list-wrapper/ListWrapper.Component'
import LargeCardGridResponsivenessHandler from '../../wrappers/large-card-grid-responsiveness-handler/LargeCardGridResponsivenessHandler.Component'
import { getAllProjectsWithTechnologies } from '@/app/api/fetch'
import { allProjects } from '@/app/data/projects'

const ProjectList = async () => {

    //const projects = await getAllProjectsWithTechnologies();

    const projects = allProjects; 

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
