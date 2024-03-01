import React from 'react'
import ProjectCard from '../project-card/ProjectCard.Component'
import { Project } from '@/app/types/Projects'

const ProjectList= () => {

    const projects: Project[]  = [
        {
            name: "Prometheus", 
            image: "/images/projects/prometheus.png", 
            gitHubLink: "https://github.com/tom-blk/reciprocal-services-webapp", 
            buildLink: "https://frontend.prometheus-backend.top/", 
            description: "Trading platform for local communities", 
            isDemo: true
        },
        {
            name: "This Website", 
            image: "", 
            gitHubLink: "https://github.com/tom-blk/personal-website", 
            buildLink: undefined, 
            description: "Personal Website", 
            isDemo: false
        }
    ]

  return (
    <div className={"grid gap-4"}>
        <div className={"font-bold"}>Project List</div>
        <div className={"flex flex-wrap gap-3 w-full"}>
            {
                projects.map((project, index) => {
                    return (
                        <ProjectCard key={index} {...project}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProjectList