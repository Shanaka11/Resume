import styled from "styled-components"
import { IStyledNavigatorItem } from "../../interfaces/INavigatorItem"

export const StyledNavigator = styled.nav`
    width: 330px;
    max-width: 100%;
    color: white;
    margin-top: 32px;
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
`

export const StyledNavigatorItem = styled.button<IStyledNavigatorItem>`
    display: flex;
    padding-left: 64px;
    height: 40px;
    width: 100%;
    align-items: center;
    opacity: 0.6;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;

     
    transition: transform 0.2s ease-in, opacity 0.2s ease-in;

      

    ${({ active }) => active && `opacity: 1;`}
 
    &:hover {
        opacity: 1;
        outline: none;
        transform: scale(1.2);
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

export const StyledLink = styled.div`
      a {
        text-decoration: none;
      }
`