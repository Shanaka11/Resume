import styled from 'styled-components'

export const StyledProjectList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 64px;

    @media(max-width: ${({theme}) => `${theme.breakpoints.smd}px`}) {
        grid-template-columns: 1fr;
    }
`

export const StyledProjectThumbnail = styled.div`
    padding: 4px;
    background-color: white;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;

    p {
        margin: 4px 0;
    }
`

export const HeaderContainer = styled.div`
    grid-column: 1/3;

    h4,p {
        margin: 0;
    }

    p {
        opacity: 0.6;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    div {
        flex-grow: 1;
    }

    a {
        text-align: right;
    }

    p {
        margin-top: 0;
        margin-bottom: 16px;
    }

    @media(max-width: ${({theme}) => `${theme.breakpoints.xs}px`}) {

        grid-column: 1/3;
    }
`

export const Box = styled.img`
    height: 100%;
    min-height: 213px;
    width: 100%;
    background-color: black;
    object-fit: cover;
    transition: transform 0.2s ease-in;

    &:hover {
        transform: scale(1.1);
    }

    @media(max-width: ${({theme}) => `${theme.breakpoints.xs}px`}) {
        display: none;
    }
`