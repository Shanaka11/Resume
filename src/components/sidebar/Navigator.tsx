import { StyledNavigator } from "../styled/Navigator.styled";
import NavigatorItem from './NavigatorItem';
import { INavigator } from '../../interfaces/INavigator';

const Navigator:React.FC<INavigator> = ({ navLinks, selectedIndex, handleOnClick }) => {

    return   <StyledNavigator>
                {
                    navLinks.map((item) => (
                        <NavigatorItem key={item.id} icon={item.icon} text={item.text} active={selectedIndex===item.id} id={item.id} handleOnClick={handleOnClick} link={item.link}/>
                    ))
                }
            </StyledNavigator>;
};

export default Navigator;
