import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding-top: 12px;
    display: flex;
    height: 100vh;
    background-color: #605D5D;
    overflow: hidden;
    animation: intro 1.5s ease-in-out forwards;

    @keyframes intro {
        75%{
            background-color: #605D5D;
        }

        100%{
            background-color: white;
        }
    }
`

export const Avatar = styled.img`
    border-radius: 50%;
    max-height: 400px;
    max-width: 100%
`

export const AvatarDiv = styled.div`
    background-color: #605D5D;
    z-index: 2;
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    animation: slide-left 1.5s ease-in-out forwards;


    @keyframes slide-left {
            0% {
                width: 100vw;
            }
            
            50%{
                width: 500px;
                height: 100vh;
            }

            75%{
                width: 500px;
                height: 100vh;
                background-color: #605D5D;
            }

            100% {
                width: 200px;
                height: 200px;
                background-color: white;
            }
        }
`

export const TitleDiv = styled.div`
        background-color: #605D5D;
        position: absolute;
        display: flex;
        height: 100vh;
        width: 1000px;
        animation: slide-right 1.5s ease-in-out forwards;
        flex-direction: column;
        justify-content: center;
        color: white;

        @keyframes slide-right {
            0% {
                width: 500px;
                height: 100vh;
                background-color: #605D5D;
                color: white;
            }

            50%{
                width: 500px;
                transform: translateX(90%);
                height: 100vh;
                background-color: #605D5D;
                color: white;
            }

            75%{
                width: 500px;
                transform: translateX(90%);
                height: 100vh;
                background-color: #605D5D;
                color: white;
            }

            100%{
                width: 500px;
                transform: translateX(45%);
                height: 200px;
                color: black;
                background-color: white;
            }
        }

        h1, h2 {
            margin-left: 52px;
            margin-top: 4px;
            margin-bottom: 4px;
            animation: margin 1.5s ease-in-out forwards;
        }

        @keyframes margin {
            75%{
                margin-left: 52px;
            }

            100%{
                margin-left: 0;
            }
        }
`

export const LeftPanel = styled.div`
    z-index: 1;
    background-color: #605D5D;
    position: absolute;
    height: 100vh;
    width: 1000px;
    animation: slide-right 1.5s ease-in-out forwards;

    @keyframes slide-right {


        75%{
            width: 1000px;
        }

        100%{
            width: 200px;
        }
    }
`