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
    projects?: IProjectHistory[],
    experiance?: string[]
}

export interface IProjectHistory {
    description: string
    details?: string[]
}