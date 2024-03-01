'use client'
import React, {useState, useEffect} from 'react'

import ProjectCard from '../ProjectCard.Component'
import TechnologyPreview from '../technology-preview/TechnologyPreview.Component';

import { Project } from '@/app/types/Projects';

const ProjectCardWrapper = (project: Project) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            className={"relative flex"}
        >
            <ProjectCard {...project}/>
            {isHovered ? <TechnologyPreview technologies={project.technologies}/> : <></>}
        </div>
    )
}

export default ProjectCardWrapper