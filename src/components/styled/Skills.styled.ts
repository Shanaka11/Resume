import styled from 'styled-components'

export const StyledSkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledSkillItem = styled.div`
    flex-basis: 33.333333%;

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