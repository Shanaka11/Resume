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
                            <Logo src={item.avatar} alt={item.avatarAlt} />
                        </LogoContainer>
                        <HistoryItem historyItem={item}/>
                        </Fragment>
                    ))
                }
                {/* <LogoContainer href='www.google.com' target="_blank" rel="noopener noreferrer">
                    <Logo src='https://www.ifs.com/content/images/logo.png' alt='IFS'/>
                </LogoContainer>
                <HistoryItem />
                <LogoContainer>
                    <Logo src='https://www.addovation.com/wp-content/themes/addovation/assets/images/logo-positiv.svg' alt='Addovation'/>
                </LogoContainer>
                <HistoryItem />
                <LogoContainer>
                    <Logo src='https://www.axcenze.com/images/logo2x.png' alt='Axcenze' />
                </LogoContainer>
                <HistoryItem /> */}
            </StyledHistory>;
};

export default History;
