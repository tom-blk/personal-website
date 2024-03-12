'use client'
import React, { useState } from 'react'

import Card from '@/app/components/generic/card/Card.Component';
import ProjectCardFrontSide from '../project-card-sides/ProjectCardFrontSide.Component'
import ProjectCardBackSide from '../project-card-sides/ProjectCardBackSide.Component';

import { Project } from '@/app/types/Projects';

import './ProjectCardFlipper.Styles.css';

const ProjectCardFlipper = (project: Project) => {

    const [animtaionSide, setAnimationSide] = useState<"front" | "back" | "">("");

    const handleOnMouseOver = () => {
        setAnimationSide("front");
    }

    const handleOnMouseOut = () => {
        setAnimationSide("back");
    }

    return (
        <Card>
            <div onMouseLeave={handleOnMouseOut} className={"relative w-60 h-44"}>
                <div className={`relative w-full project-card-flipper-${animtaionSide}`}>
                    <div className={'project-card-front'}>
                        <ProjectCardFrontSide handleHover={handleOnMouseOver} project={project}/>
                    </div>
                    <div className={'project-card-back'}>
                        <ProjectCardBackSide technologies={project.technologies}/>
                    </div> 
                </div>
            </div>
        </Card>
    )
}

export default ProjectCardFlipper