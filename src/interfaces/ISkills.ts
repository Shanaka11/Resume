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
    description: string
}

export interface ISkillList {
    list: 'summary' | 'detailed'
}