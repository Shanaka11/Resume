import styled from 'styled-components';

export const Page = styled.div`

    animation: slide-in 0.5s ease-in-out forwards;
    
    hr {
        margin-bottom: 32px;
    }

    @keyframes slide-in {
        0%{
            transform: translateY(100%)
        }
    }
`
