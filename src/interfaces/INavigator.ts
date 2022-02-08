import { INavigatorItem } from "./INavigatorItem";

export interface INavigator {
    navLinks: INavigatorItem[],
    selectedIndex: number | undefined,
    handleOnClick: () => void
}