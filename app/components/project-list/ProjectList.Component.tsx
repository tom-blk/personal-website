import React from 'react'
import ProjectCard from '../project-card/ProjectCard.Component'
import { Project } from '@/app/types/Projects'

const ProjectList= () => {

    const projects: Project[]  = [
        {
            name: "Prometheus", 
            image: "images/projects/prometheus.png", 
            gitHubLink: "", 
            buildLink: "https://frontend.prometheus-backend.top/", 
            description: "Trading platform for local communities", 
            isDemo: true
        },
        {
            name: "This Website", 
            image: "images/projects/elysium.png", 
            gitHubLink: "", 
            buildLink: undefined, 
            description: "Personal Website", 
            isDemo: false
        }
    ]

  return (
    <div className={"grid gap-4"}>
        <div className={"font-bold"}>Project List</div>
        <div className={"grid grid-cols-2 gap-3"}>
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