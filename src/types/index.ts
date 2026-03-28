export type Member = {
    name: string;
    role: string;
    icon: string;
    color: string;
    about: string;
    cv: string;
    imageSrc: string;
    id: string;
    _id: string;
    mail: string;
    linkedin: string;
};

export type Project = {
    name: string;
    icon: string;
    id: string;
    color: string;
    description: string;
    techStack?: string[];
    category?: string;
    githubUrl?: string;
    liveUrl?: string;
    screenshots?: string[];
    longDescription?: string;
    ownerName?: string;
    ownerId?: string;
};

export const CATEGORIES: Record<string, string> = {
    webapp: 'Web App',
    tool: 'Tool',
    game: 'Game',
    data: 'Data',
    other: 'Other',
};
