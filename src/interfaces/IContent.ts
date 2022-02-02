
export interface IContent {
    name: string,
    title: string,
    aboutMe: string,
    skills: skill[]
}

export interface skill {
    label: string,
    score: number,
    link?: string,
    experiance? : number,
    projects?: number,
}