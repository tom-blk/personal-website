import React from 'react'
import { Project } from '@/app/types/Projects'
import { html, css, mysql, react, typescript, node, express, next, tailwind } from '@/app/data/technologies'
import ProjectCardFlipper from '../../cards/project-card/project-card-flipper/ProjectCardFlipper.Component'

const ProjectList= () => {

    const projects: Project[]  = [
        {
            name: "Prometheus", 
            image: "/images/projects/prometheus.png", 
            gitHubLink: "https://github.com/tom-blk/reciprocal-services-webapp", 
            buildLink: "https://frontend.prometheus-backend.top/", 
            description: "Trading platform for local communities", 
            technologies: [
                react, typescript, html, css, mysql, node, express,
                {name: "JWT", imageUrl:"/svg/jwt.svg", technologyUrl: "https://jwt.io/", isAreaOfFocus: false},
            ],
            isDemo: true
        },
        {
            name: "This Website", 
            image: "", 
            gitHubLink: "https://github.com/tom-blk/personal-website", 
            buildLink: undefined, 
            description: "Personal Website", 
            technologies: [next, react, typescript, tailwind, html, css],
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
                        <ProjectCardFlipper key={index} {...project}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProjectList