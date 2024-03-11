'use client'
import React, {useState, useEffect} from 'react'

import ProjectCard from '../ProjectCard.Component'
import TechnologyPreview from '../technology-preview/TechnologyPreview.Component';

import { Project } from '@/app/types/Projects';

import './ProjectCardWrapper.Styles.css';

const ProjectCardWrapper = (project: Project) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleOnMouseOver = () => {
        setIsHovered(true);
    }

    const handleOnMouseOut = () => {
        setIsHovered(false);
    }

    return (
        <div
            onMouseLeave={handleOnMouseOut}
            className={"relative text-gray-300 border bg-black bg-opacity-60 border-slate-800 rounded-md w-60 h-44"}
        >
            <div className={`relative w-full ${isHovered && 'project-card-flipper'}`}>
                <div className={'project-card-back'}>
                    <TechnologyPreview technologies={project.technologies}/>
                </div> 
                <div className={'project-card-front'}>
                    <ProjectCard handleHover={handleOnMouseOver} project={project}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardWrapper