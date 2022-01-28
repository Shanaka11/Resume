import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: 100%;
    display: flex;
    background-color: #605D5D;
`

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 300px;
    padding: 8px;
    @media(max-width: 480px) {
        display: none;
    }
`

export const Avatar = styled.img`
    border-radius: 50%;
    height: 200px;
`

export const Title = styled.div`
    margin-left: 8px;
    flex-grow: 1;
    align-self: center;
    color: white;

    h1,h2 {
        margin-top: 4px;
        margin-bottom: 4px;
    }

    @media(max-width: 480px) {
        text-align: center;
    }
`