export interface IHistoryArray {
    history: IHistory[]
}

export interface IHistoryItem {
    historyItem : IHistory
}

export interface IHistory {
    time: string,
    title: string,
    description?: string,
    avatar: string,
    avatarAlt: string,
    link: string,
    responsibilities?: string[],
    projects?: IProject[],
    experiance?: string[]
}

export interface IProject {
    description: string
    details?: string[]
}