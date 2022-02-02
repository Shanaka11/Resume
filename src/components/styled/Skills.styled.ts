import styled from 'styled-components'
import { IProgressbar } from '../../interfaces/ISkills'

export const StyledSkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledSkillItem = styled.div`
    flex-basis: 33.333333%;
    padding: 4px;

    p {
        margin: 4px 0;
    }

    @media(max-width: ${({theme}) => `${theme.breakpoints.sm}px`}) {
        flex-basis: 50%;
    }

    @media(max-width: ${({theme}) => `${theme.breakpoints.sm}px`}) {
        flex-basis: 50%;
    }
    
    @media(max-width: ${({theme}) => `${theme.breakpoints.xs}px`}) {
        flex-basis: 100%;
    }
`

export const ProgressbarContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.primaryLight};
    width: 100%;
    border-radius: 5px;
`

export const Progressbar = styled.div<IProgressbar>`
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 10px;
    width: ${({ value }) => value}%;
    transition: width 0.2s ease-in;
    transition-delay: 0.5s;
    border-radius: 5px;
`