import { Avatar, AvatarContainer, SidebarSpacing, StyledSidebar, TitleContainer } from "../styled/Sidebar.styled";
import Navigator from './Navigator';

import { MdDashboard } from 'react-icons/md';
import { AiFillStar, AiTwotoneCalendar, AiFillLike } from 'react-icons/ai';
import { GiGreekTemple } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';
import { INavigatorItem } from "../../interfaces/INavigatorItem";


// TODO: Add Location / Contact Details at the bottom of the side bar
// TODO: Create the model sidebar for smaller screens

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

const Sidebar = () => {
    
    return  <>
                <StyledSidebar>
                    <AvatarContainer>
                        <Avatar src="src/images/avatar.jpeg" alt="Avatar" />
                    </AvatarContainer>
                    <TitleContainer>
                        <h1>Shanaka Abeysinghe</h1>
                        <h2>Full Stack Engineer</h2>
                    </TitleContainer>
                    <Navigator navLinks={navLinks}/>
                </StyledSidebar>
                <SidebarSpacing />
            </>;
};

export default Sidebar;
