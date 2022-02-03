import styled from 'styled-components'

export const StyledHistory = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 16px;
    position: relative;

    &::before{
        z-index: -1;
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.colors.line};
        grid-column: 1/2;
        width: 2px;
        height: 100%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
`

export const StyledHistoryItem = styled.div`
    display: flex;
    flex-direction: column;

    p,h4 {
        margin: 0px;
    }

    section {
        margin-top: 16px;
    }

    ul {
        padding-left: 16px;
    }

    li {
        margin: 4px 0;
    }

    li > ul {
        margin: 16px 0;
    }
`

export const LogoContainer = styled.a`
    width: 50px;
    height: 50px;
    background-color: white;
    display: grid;
    place-items: center;
    box-shadow:2px 2px 4px #DBDBDB;
    border-radius: 50%;
    transition: transform 0.2s ease-in;

    &:hover {
        transform: scale(1.1);
    }
`

export const Logo = styled.img`
    display:block;
    width: 100%;
`