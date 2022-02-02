import { IHistory } from "./Ihistory";
import { ISkill } from "./ISkills";

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
    skills: ISkill[],
    workHistory: IHistory[]
}