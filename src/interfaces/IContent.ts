
import { IHistory } from "./IHistory";
import { IProject } from "./IProject";
import { ISkill } from "./ISkills";

export interface IContent {
    name: string,
    title: string,
    aboutMe: string,
    avatar: string,
    contact: {
        phone: string,
        email: string,
        location: string,
        github: string,
        linkedIn: string
    }
    skills: ISkill[],
    workHistory: IHistory[],
    projects: IProject[],
    education: IHistory[]
}