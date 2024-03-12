import { Project } from "../types/Projects"
import { css, express, html, mysql, next, node, react, tailwind, typescript } from "./technologies"

export const allProjects: Project[]  = [
    {
        name: "Prometheus", 
        image: "/images/projects/prometheus.png", 
        gitHubLink: "https://github.com/tom-blk/reciprocal-services-webapp", 
        buildLink: "https://frontend.prometheus-backend.top/", 
        description: "Trading platform for local communities", 
        technologies: [
            react, typescript, html, css, mysql, node, express,
            {name: "JWT", imageUrl:"/svg/jwt.svg", technologyUrl: "https://jwt.io/", isAreaOfFocus: false, startedLearningDate: new Date(2021, 9, 1)},
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