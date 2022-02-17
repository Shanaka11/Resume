export interface IProject {
    id: number,
    title: string,
    subtitle: string,
    summary: string[],
    details?: string[],
    techStack: string
    link?: string,
    image?: string,
    otherLinks? : IOtherLink[]
}

export type LinkType =  'Source' | 'Design' | 'Demo' | 'Documentation'

export interface IOtherLink {
    type: LinkType
    link: string
}


export interface IProjectObject {
    project: IProject
}

export interface IProjectLinks {
    links?: IOtherLink[]
}

export interface IProjectLink {
    link: IOtherLink
}