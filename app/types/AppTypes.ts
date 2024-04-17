export interface Project{
    id: number;
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
    isAreaOfFocus: boolean,
    startedLearningDate: Date
}

export interface Position{
    name: string;
    company: string;
    companyLogo: string;
    linkedInUrl: string;
    location: string;
    locationUrl: string;
    joinedDate: string;
    leftDate: string;
    technologies: Technology[];
}

export interface Article{
    title: string;
    description: string;
    articleUrl: string;
    imageUrl: string;
    publishedDate: string;
    platform: string;
}