import { MdDashboard } from 'react-icons/md';
import { AiFillStar, AiTwotoneCalendar, AiFillLike } from 'react-icons/ai';
import { GiGreekTemple } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';
import { INavigatorItem } from '../../interfaces/INavigatorItem';
import { StyledNavigator } from "../styled/Navigator.styled";
import NavigatorItem from './NavigatorItem';
import { useState } from 'react';


const navLinks:INavigatorItem[] = [
    {
        id: 0,
        icon: <MdDashboard size={25}/>,
        text: 'Summery'
    },
    {
        id: 1,
        icon: <AiFillStar size={25}/>,
        text: 'Skills & Experiances'
    },
    {
        id: 2,
        icon: <AiTwotoneCalendar size={25}/>,
        text: 'Work History'
    },
    {
        id: 3,
        icon: <GiGreekTemple size={25}/>,
        text: 'Education'
    },
    {
        id: 4,
        icon: <FaTools size={25}/>,
        text: 'Projects'
    },
    {
        id: 5,
        icon: <AiFillLike size={25}/>,
        text: 'References'
    },
]

const Navigator = () => {

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
