import styled from 'styled-components'

export const StyledSidebar = styled.div`
    width: 330px;
    height: 100vh;
    background-color: ${({theme}) => theme.colors.primary};
    position: fixed;
`
export const SidebarSpacing = styled.div`
    width: 330px;
    height: 100vh;
`

export const AvatarContainer = styled.div`
    padding-top: 16px;
    display: flex;
    height: 220px;
    width: 320px;
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

    h1, h2 {
        margin-top: 4px;
        margin-bottom: 4px;
    }

    h2 {
        font-weight: 400
    }
`