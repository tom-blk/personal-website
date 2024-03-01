import React from 'react'
import ProjectCard from '../project-card/ProjectCard.Component'
import { Project } from '@/app/types/Projects'
import ProjectCardWrapper from '../project-card/project-card-wrapper/ProjectCardWrapper.Component'

const ProjectList= () => {

    const projects: Project[]  = [
        {
            name: "Prometheus", 
            image: "/images/projects/prometheus.png", 
            gitHubLink: "https://github.com/tom-blk/reciprocal-services-webapp", 
            buildLink: "https://frontend.prometheus-backend.top/", 
            description: "Trading platform for local communities", 
            technologies: [
                {name: "React", imageUrl:"/svg/react.svg", technologyUrl: "https://reactjs.org/"},
                {name: "TypeScript", imageUrl:"/svg/ts.svg", technologyUrl: "https://www.typescriptlang.org/"}, 
                {name: "HTML", imageUrl:"/svg/html.svg", technologyUrl: "https://html.com/html5/"}, 
                {name: "CSS", imageUrl:"/svg/css.svg", technologyUrl: "https://www.w3.org/TR/CSS/"}, 
                {name: "MySQL", imageUrl:"/svg/sql.svg", technologyUrl: "https://www.mysql.com/"}, 
                {name: "Node.js", imageUrl:"/svg/nodejs.svg", technologyUrl: "https://nodejs.org/"},
                {name: "Express.js", imageUrl:"/svg/express.svg", technologyUrl: "https://expressjs.com/"},
                {name: "JWT", imageUrl:"/svg/jwt.svg", technologyUrl: "https://jwt.io/"},
            ],
            isDemo: true
        },
        {
            name: "This Website", 
            image: "", 
            gitHubLink: "https://github.com/tom-blk/personal-website", 
            buildLink: undefined, 
            description: "Personal Website", 
            technologies: [
                {name: "Next.js", imageUrl:"/svg/next.svg", technologyUrl: "https://nextjs.org/"}, 
                {name: "React", imageUrl:"/svg/react.svg", technologyUrl: "https://reactjs.org/"},
                {name: "TypeScript", imageUrl:"/svg/ts.svg", technologyUrl: "https://www.typescriptlang.org/"}, 
                {name: "Tailwind CSS", imageUrl:"/svg/tailwind.svg", technologyUrl: "https://tailwindcss.com/"},
                {name: "HTML", imageUrl:"/svg/html.svg", technologyUrl: "https://html.com/html5/"}, 
                {name: "CSS", imageUrl:"/svg/css.svg", technologyUrl: "https://www.w3.org/TR/CSS/"},  
            ],
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
                        <ProjectCardWrapper key={index} {...project}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProjectList