
export interface IContent {
    name: string,
    title: string,
    aboutMe: string,
    skills: ISkill[]
}

export interface ISkill {
    label: string,
    score: number,
    link?: string,
    experiance? : number,
    projects?: number,
}