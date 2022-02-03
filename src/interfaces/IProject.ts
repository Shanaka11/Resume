export interface IProject {
    id: number,
    title: string,
    subtitle: string,
    summary: string[],
    techStack: string
    link?: string,
    image?: string
}

export interface IProjectObject {
    project: IProject
}