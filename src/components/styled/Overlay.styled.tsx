import styled from 'styled-components'
import { IStyledOverlay } from '../../interfaces/IOverlay'

export const StyledOverlay = styled.div<IStyledOverlay>`
    z-index: 1;
    height: 100vh;
    width: 100vw;
    background-color: black;
    position: absolute;
    cursor: pointer;
    transition: opacity 0.5s;
    opacity: ${({open}) => open ? '0.8' : '0'};
`