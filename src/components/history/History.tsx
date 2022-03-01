import { Fragment } from 'react';
import { IHistory, IHistoryArray } from '../../interfaces/IHistory';
import { Logo, LogoContainer, StyledHistory } from '../styled/History.styled';
import HistoryItem from './HistoryItem';

const History:React.FC<IHistoryArray> = ( { history } ) => {
  return    <StyledHistory>
                {
                    history.map(( item: IHistory, index:number) => (
                        <Fragment key={index}>
                        <LogoContainer href={item.link} target="_blank" rel="noopener noreferrer">
                            <Logo src={item.avatar} alt={item.avatarAlt} loading='lazy'/>
                        </LogoContainer>
                        <HistoryItem historyItem={item}/>
                        </Fragment>
                    ))
                }
            </StyledHistory>;
};

export default History;
