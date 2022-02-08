import { ReactElement } from 'react';

export interface INavigatorItem {
    id: number,
    icon: ReactElement,
    text: string,
    active?: boolean,
    handleOnClick?: (id: number) => void,
    link: string
}

export interface IStyledNavigatorItem {
    active?: boolean,
    left?: number;
    top: number;
}