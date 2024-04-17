'use client'
import React, { useEffect, useState } from 'react'

import CardWrapper from '@/app/components/wrappers/card-wrapper/CardWrapper.Component';
import ProjectCardFrontSide from '../project-card-sides/ProjectCardFrontSide.Component'
import ProjectCardBackSide from '../project-card-sides/ProjectCardBackSide.Component';

import { Project } from '@/app/types/AppTypes';

import './ProjectCardFlipper.Styles.css';
import { getProjectTechnologies } from '@/app/api/fetch';

const ProjectCardFlipper = (project: Project) => {

    const [animtaionSide, setAnimationSide] = useState<"front" | "back" | "">("");
    const [projectTechnologies, setProjectTechnologies] = useState([]);

    useEffect(() => {
        //Loading of technologies won't be visible to user since the icons are being displayed on the backside of the card unless the user flips it manually
        getProjectTechnologies(project.id)
            .then((data) => {
                setProjectTechnologies(data);
            })
    }, [])

    const handleOnMouseOver = () => {
        setAnimationSide("front");
    }

    const handleOnMouseOut = () => {
        setTimeout(() => {
            setAnimationSide("back");
        }, 100)
    }

    return (
        <CardWrapper>
            <div onMouseLeave={handleOnMouseOut} className={"relative w-60 h-44 lg:w-80 lg:h-60"}>
                <div className={`relative w-full h-full project-card-flipper-${animtaionSide}`}>
                    <div className={'project-card-front'}>
                        <ProjectCardFrontSide handleHover={handleOnMouseOver} project={project}/>
                    </div>
                    <div className={'project-card-back'}>
                        <ProjectCardBackSide technologies={projectTechnologies}/>
                    </div> 
                </div>
            </div>
        </CardWrapper>
    )
}

export default ProjectCardFlipper