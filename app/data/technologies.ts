import { Technology } from "../types/Projects"

export const react: Technology = {name: "React", imageUrl:"/svg/react.svg", technologyUrl: "https://reactjs.org/", isAreaOfFocus: true}
export const next: Technology = {name: "Next.js", imageUrl:"/svg/next.svg", technologyUrl: "https://nextjs.org/", isAreaOfFocus: true}
export const typescript: Technology = {name: "TypeScript", imageUrl:"/svg/ts.svg", technologyUrl: "https://www.typescriptlang.org/", isAreaOfFocus: true} 
export const html: Technology = {name: "HTML", imageUrl:"/svg/html.svg", technologyUrl: "https://html.com/html5/", isAreaOfFocus: true}
export const css: Technology = {name: "CSS", imageUrl:"/svg/css.svg", technologyUrl: "https://www.w3.org/TR/CSS/", isAreaOfFocus: true}
export const tailwind: Technology = {name: "Tailwind CSS", imageUrl:"/svg/tailwind.svg", technologyUrl: "https://tailwindcss.com/", isAreaOfFocus: true}
export const node: Technology = {name: "Node.js", imageUrl:"/svg/nodejs.svg", technologyUrl: "https://nodejs.org/", isAreaOfFocus: true}
export const express: Technology = {name: "Express.js", imageUrl:"/svg/express.svg", technologyUrl: "https://expressjs.com/", isAreaOfFocus: false}
export const mysql: Technology = {name: "MySQL", imageUrl:"/svg/sql.svg", technologyUrl: "https://www.mysql.com/", isAreaOfFocus: false}
export const rest: Technology = {name: "REST", imageUrl:"/svg/rest.svg", technologyUrl: "https://restfulapi.net/", isAreaOfFocus: false}
export const rust: Technology = {name: "Rust", imageUrl:"/svg/rust.svg", technologyUrl: "https://www.rust-lang.org/", isAreaOfFocus: false}
export const git: Technology = {name: "Git", imageUrl:"/svg/git.svg", technologyUrl: "https://git-scm.com/", isAreaOfFocus: true}
export const linux: Technology = {name: "Linux", imageUrl:"/svg/linux.svg", technologyUrl: "https://www.linux.org/", isAreaOfFocus: false}

export const technologiesList = {
    Frontend: [react, next, typescript, html, css, tailwind],
    Backend: [node, express, mysql, rest, rust],
    Other: [git, linux]
  }