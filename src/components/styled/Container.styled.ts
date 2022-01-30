import styled from 'styled-components';
import { IMainContainer } from '../../interfaces/IMainContainer';


export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    overflow: hidden;
`
export const MainContainer = styled.div<IMainContainer>`
    display: flex;
    flex-direction: ${({ small }) => small ? 'column' : 'row'}
`