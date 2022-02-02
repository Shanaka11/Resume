
export interface IContent {
    name: string,
    title: string,
    aboutMe: string,
    contact: {
        phone: string,
        email: string,
        location: string,
        github: string,
        linkedIn: string
    }
    skills: ISkill[]
}

export interface ISkill {
    label: string,
    score: number,
    link?: string,
    experiance? : number,
    projects?: number,
}