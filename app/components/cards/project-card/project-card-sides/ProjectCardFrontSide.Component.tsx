import Link from 'next/link'
import Image from 'next/image';
import React from 'react'

import GitHubIconLink from '@/app/components/generic/github-icon-link/GitHubIconLink.Component';
import OnHoverTrigger from '@/app/components/generic/on-hover-trigger/OnHoverTrigger.Component';

import { Project } from '@/app/types/AppTypes';

interface Props {
    project: Project
    handleHover: () => void;
}

const ProjectCardFrontSide = (props: Props) => {

    const { name, image, gitHubLink, buildLink, description, isDemo } = props.project;
    const { handleHover } = props;


    return (
        <Link
            className={"h-full p-6 flex flex-col justify-between lg:p-8"}
            target="_blank" 
            href={buildLink ? buildLink : gitHubLink}
        >
            <h3 className={"text-sm lg:text-lg"}>{name}</h3>
            <OnHoverTrigger prompt='Stack' className={"text-xs absolute top-4 right-4 lg:top-6 lg:right-6 lg:text-sm"} onHoverFunction={handleHover}/>
            <div className={"grid grow items-center h-16 relative"}>
                <div className={`${isDemo ? "block" : "hidden"} text-red-900 font-bold text-xs absolute right-0 top-0 lg:text-sm`}>Demo</div>
                {
                    image
                    ? <Image width={0} height={0} sizes='100vw' className={"w-full h-auto"} src={image} alt={name}/>
                    : <></>
                }   
            </div>
            <div className={"items-center flex gap-1 justify-between text-right text-sm"}>
                <GitHubIconLink gitHubLink={gitHubLink}/>
                <p className={"text-xs w-fit lg:text-base"}>{description}</p>
            </div>
        </Link>
    )
}

export default ProjectCardFrontSide