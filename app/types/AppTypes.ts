export interface Project{
    id: number;
    name: string;
    image: string;
    githublink: string;
    buildlink?: string;
    description: string;
    technologies?: Technology[];
    isdemo: boolean;
}

export interface Technology{
    id: number;
    name: string;
    image: string;
    technologyurl: string;
    isareaoffocus: boolean;
    startedlearningdate: Date;
    experience: Experience;
}

export interface Experience{
    professionalexperience: number;
    positions: string[];
    projects: string[];
    confidence: "I know what I am doing" | "I can get by";
}

export interface Position{
    id: number;
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
    id: number;
    title: string;
    description: string;
    articleUrl: string;
    imageUrl: string;
    publishedDate: string;
    platform: string;
}
