import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

import GitHubIconLink from '../../github-icon-link/GitHubIconLink.Component';
import OnHoverTrigger from '../../generic/on-hover-trigger/OnHoverTrigger.Component';

import { Project } from '../../../types/Projects';

interface Props {
    project: Project
    handleHover: () => void;
}

const ProjectCardFrontSide = (props: Props) => {

    const {name, image, gitHubLink, buildLink, description, isDemo} = props.project;
    const {handleHover} = props;


    return (
        <Link
            className={"p-6 flex flex-col gap-1"}
            target="_blank" 
            href={buildLink ? buildLink : gitHubLink}
        >
            <h3 className={"text-sm"}>{name}</h3>
            <OnHoverTrigger prompt='Stack' className={"text-xs absolute top-4 right-4"} onHoverFunction={handleHover}/>
            <div className={"grid grow items-center h-16 relative"}>
                <div className={`${isDemo ? "block" : "hidden"} text-red-900 font-bold text-xs absolute right-0 top-0`}>Demo</div>
                {
                    image
                    ? <Image width={0} height={0} sizes='100vw' className={"w-auto h-auto"} src={image} alt={name}/>
                    : <></>
                }   
            </div>
            <div className={"items-center flex gap-1 justify-between text-right text-sm"}>
                <GitHubIconLink gitHubLink={gitHubLink}/>
                <p className={"text-xs w-fit"}>{description}</p>
            </div>
        </Link>
    )
}

export default ProjectCardFrontSide