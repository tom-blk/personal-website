import { Project } from "../types/AppTypes"
import { css, express, html, mysql, next, node, react, tailwind, typescript } from "./technologies"

export const allProjects: Project[]  = [
    {
        id: 1,
        name: "Prometheus", 
        image: "/images/projects/prometheus.png", 
        githublink: "https://github.com/tom-blk/reciprocal-services-webapp", 
        buildlink: "https://frontend.prometheus-backend.top/", 
        description: "Trading platform for local communities", 
        technologies: [
            react, typescript, html, css, mysql, node, express,
            {id: 1, name: "JWT", image:"/svg/jwt.svg", technologyurl: "https://jwt.io/", isareaoffocus: false, startedlearningdate: new Date(2021, 9, 1), 
                experience: {professionalexperience: 0, positions: [], projects: ["Prometheus"], confidence: "I can get by"}
            },
        ],
        isdemo: true
    },
    {
        id: 2,
        name: "This Website", 
        image: "", 
        githublink: "https://github.com/tom-blk/personal-website", 
        buildlink: undefined, 
        description: "Personal Website", 
        technologies: [next, react, typescript, tailwind, html, css],
        isdemo: false
    }
]
