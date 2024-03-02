export interface Project{
    name: string;
    image: string;
    gitHubLink: string;
    buildLink?: string;
    description: string;
    technologies: Technology[];
    isDemo: boolean;
}

export interface Technology{
    name: string,
    imageUrl: string,
    technologyUrl: string,
    isAreaOfFocus: boolean
}