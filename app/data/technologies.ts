import { Technology } from "../types/AppTypes"

export const react: Technology = { id: 0, name: "React", image:"/svg/react.svg", technologyurl: "https://reactjs.org/", isareaoffocus: true, startedlearningdate: new Date(2021, 4, 1)}
export const next: Technology = { id: 0, name: "Next.js", image:"/svg/next.svg", technologyurl: "https://nextjs.org/", isareaoffocus: true, startedlearningdate: new Date(2023, 11, 1)}
export const typescript: Technology = { id: 0, name: "TypeScript", image:"/svg/ts.svg", technologyurl: "https://www.typescriptlang.org/", isareaoffocus: true, startedlearningdate: new Date(2021, 4, 1)} 
export const html: Technology = { id: 0, name: "HTML", image:"/svg/html.svg", technologyurl: "https://html.com/html5/", isareaoffocus: true, startedlearningdate: new Date(2020, 2, 1)}
export const css: Technology = { id: 0, name: "CSS", image:"/svg/css.svg", technologyurl: "https://www.w3.org/TR/CSS/", isareaoffocus: true, startedlearningdate: new Date(2020, 2, 1)}
export const tailwind: Technology = { id: 0, name: "Tailwind CSS", image:"/svg/tailwind.svg", technologyurl: "https://tailwindcss.com/", isareaoffocus: true, startedlearningdate: new Date(2023, 11, 1)}
export const node: Technology = { id: 0, name: "Node.js", image:"/svg/nodejs.svg", technologyurl: "https://nodejs.org/", isareaoffocus: true, startedlearningdate: new Date(2021, 7, 1)}
export const express: Technology = { id: 0, name: "Express.js", image:"/svg/express.svg", technologyurl: "https://expressjs.com/", isareaoffocus: false, startedlearningdate: new Date(2021, 7, 1)}
export const mysql: Technology = { id: 0, name: "MySQL", image:"/svg/sql.svg", technologyurl: "https://www.mysql.com/", isareaoffocus: false, startedlearningdate: new Date(2021, 7, 1)}
export const rest: Technology = { id: 0, name: "REST", image:"/svg/rest.svg", technologyurl: "https://restfulapi.net/", isareaoffocus: false, startedlearningdate: new Date(2021, 4, 1)}
export const rust: Technology = { id: 0, name: "Rust", image:"/svg/rust.svg", technologyurl: "https://www.rust-lang.org/", isareaoffocus: false, startedlearningdate: new Date(2024, 1, 1)}
export const git: Technology = { id: 0, name: "Git", image:"/svg/git.svg", technologyurl: "https://git-scm.com/", isareaoffocus: true, startedlearningdate: new Date(2021, 4, 1)}
export const linux: Technology = { id: 0, name: "Linux", image:"/svg/linux.svg", technologyurl: "https://www.linux.org/", isareaoffocus: false, startedlearningdate: new Date(2023, 1, 1)}
export const docker: Technology = { id: 0, name: "Docker", image:"/svg/docker.svg", technologyurl: "https://www.docker.com/", isareaoffocus: false, startedlearningdate: new Date(2021, 4, 1)}

export const technologiesList = { 
    Frontend: [react, next, typescript, html, css, tailwind],
    Backend: [node, express, mysql, rest, rust],
    Other: [git, linux]
  }
