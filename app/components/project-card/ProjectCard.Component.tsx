import Link from 'next/link'
import React from 'react'

import { Project } from '../../types/Projects';

const ProjectCard = (project: Project) => {

    const {name, image, gitHubLink, buildLink, description, isDemo} = project;

    const gitHubIcon = "icons/github.png";

    return (
        <Link href={buildLink ? buildLink : gitHubLink}>
            <article className={"grid gap-1 text-gray-300 border border-slate-800 rounded-md p-5 w-60"}>
                <h3 className={"text-sm"}>{name}</h3>
                <div className={"grid items-center h-16 relative"}>
                    <div className={`${isDemo ? "block" : "hidden"} text-red-900 font-bold text-xs absolute right-0 top-0`}>Demo</div>
                    <img src={image} alt={name}/>
                </div>
                <div className={"flex gap-1 justify-between text-right text-sm items-center"}>
                    <Link href={gitHubLink} className={"w-6 h-6 flex-shrink-0"}><img className={"w-full"} src={gitHubIcon} alt="GitHub"/></Link>
                    <p className={"text-xs w-fit"}>{description}</p>
                </div>
            </article>
        </Link>
    )
}

export default ProjectCard