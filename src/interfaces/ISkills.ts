export interface ISkillItem {
    skill: ISkill
}

export interface IProgressbar {
    value: number
}

export interface ISkill {
    label: string,
    score: number,
    link?: string,
    experiance? : number,
    projects?: number,
}