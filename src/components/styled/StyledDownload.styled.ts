import styled from "styled-components";

export const StyledDownload = styled.button`
    z-index: 1;
    position: fixed;
    right: 5%;
    bottom: 5%;
    padding: 16px;
    color: white;
    border-radius: 5px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: background-color 0.2s ease-in;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryLight};
    }
`