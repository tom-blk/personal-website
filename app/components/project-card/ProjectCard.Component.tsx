import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

import GitHubIconLink from '../github-icon-link/GitHubIconLink.Component';

import { Project } from '../../types/Projects';

const ProjectCard = (project: Project) => {

    const {name, image, gitHubLink, buildLink, description, isDemo} = project;

    return (
        <Link 
            className={"flex flex-col gap-1 text-gray-300 border border-slate-800 rounded-md p-5 w-60"}
            target="_blank" 
            href={buildLink ? buildLink : gitHubLink}
        >
            <h3 className={"text-sm"}>{name}</h3>
            <div className={"grid items-center h-16 relative"}>
                <div className={`${isDemo ? "block" : "hidden"} text-red-900 font-bold text-xs absolute right-0 top-0`}>Demo</div>
                {
                    image
                    ? <Image width={0} height={0} sizes='100vw' className={"w-auto h-auto"} src={image} alt={name}/>
                    : <></>
                }   
            </div>
            <div className={"items-center grow flex gap-1 justify-between text-right text-sm"}>
                <GitHubIconLink gitHubLink={gitHubLink}/>
                <p className={"text-xs w-fit"}>{description}</p>
            </div>
        </Link>
    )
}

export default ProjectCard