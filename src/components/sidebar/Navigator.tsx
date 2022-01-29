import { StyledNavigator } from "../styled/Navigator.styled";
import NavigatorItem from './NavigatorItem';
import { useState } from 'react';
import { INavigator } from '../../interfaces/INavigator';

const Navigator:React.FC<INavigator> = ({ navLinks }) => {

    // States 
    const [selectedIndex, setSelectedIndex] = useState(0) 

    // Methods
    const handleOnClick = (id: number) => {
        setSelectedIndex(id)
    }

    return   <StyledNavigator>
                {
                    navLinks.map((item) => (
                        <>
                        <NavigatorItem key={item.id} icon={item.icon} text={item.text} active={selectedIndex===item.id} id={item.id} handleOnClick={handleOnClick}/>
                        </>
                    ))
                }
            </StyledNavigator>;
};

export default Navigator;
