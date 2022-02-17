import styled from 'styled-components'
import { IStyledSidebar } from '../../interfaces/ISidebar'

export const StyledSidebar = styled.div<IStyledSidebar>`
    display: flex;
    flex-direction: column;
    width: 330px;
    max-width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primary};
    position: fixed;
    z-index: 3;
    transition: left 0.5s;
    left: ${({ open }) => open ? '0px' : '-330px'};
`
export const SidebarSpacing = styled.div`
    width: 330px;
    height: 100vh;
`

export const AvatarContainer = styled.div`
    padding-top: 16px;
    display: flex;
    height: 220px;
    width: 330px;
    max-width: 100%;
    justify-content: center;
    align-items: center;
`

export const Avatar = styled.img`
    border-radius: 50%;
    max-height: 200px;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;

    h1, h2, h4 {
        margin-top: 4px;
        margin-bottom: 4px;
    }

    h2, h4 {
        font-weight: 400
    }
`

export const CloseButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 30px;
    padding: 8px;
`

export const Appbar = styled.div`
    z-index: 2;
    height: 40px;
    width: 100%;
    position: fixed;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: white;
    box-shadow: 0px 5px 9px -3px rgba(0,0,0,0.35);
`

export const AppbarMargin = styled.div`
    height: 40px;
`

export const ContactContainer = styled.div`
    margin: 32px 0;
    display: flex;
    justify-content: space-around;

    a {
        transition: transform 0.2s ease-in;

        &:hover {
            transform: scale(1.5);
        }
    }
`