import styled from "styled-components"
import { IStyledNavigatorItem } from "../../interfaces/INavigatorItem"

export const StyledNavigator = styled.nav`
    display: flex;
    flex-direction: column;
    width: 330px;
    color: white;
    margin-top: 32px;
`

export const StyledNavigatorItem = styled.button<IStyledNavigatorItem>`
    display: flex;
    padding-left: 64px;
    height: 40px;
    align-items: center;
    opacity: 0.6;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;

    ${({ active }) => active && `opacity: 1;`}

    &:hover, &:focus {
        opacity: 1;
        outline: none;
    }

    span {
        width: 20px;
        height: 20px;
        position: absolute;
        background: #9d9b9b;
        display: block;
        content: "";
        border-radius: 9999px;
        opacity: 1;
        animation: 0.5s linear 1 forwards ripple-effect;    
        top: ${({ top }) => top}px;
        left: ${({ left }) => left}px;
    }

    h4 {
        font-weight: 400;
        margin-top: 7px;
        margin-bottom: 7px;    
        margin-left: 24px;
    }

    @keyframes ripple-effect {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(10);
          opacity: 0.375;
        }
        100% {
          transform: scale(35);
          opacity: 0;
        }
      }
`