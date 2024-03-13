import { Position } from "../types/AppTypes"
import { react, typescript, html, css, rest, git, docker } from "./technologies"

export const allPositions: Position[] = [
    {
        name: 'Front End Developer',
        company: "PowMio GmbH",
        companyLogo: '/images/positions/powmio.jpeg',
        linkedInUrl: 'https://www.linkedin.com/company/powmio/',
        location: "Karlsruhe",
        locationUrl: "https://www.google.com/maps/place/Karlsruhe,+Tyskland",
        joinedDate: "April 2021",
        leftDate: "April 2022",
        technologies: [react, typescript, html, css, rest, git, docker],
    }
]