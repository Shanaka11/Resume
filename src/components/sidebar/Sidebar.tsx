import { Appbar, AppbarMargin, Avatar, AvatarContainer, CloseButtonContainer, SidebarSpacing, StyledSidebar, TitleContainer } from "../styled/Sidebar.styled";
import Navigator from './Navigator';

import { MdDashboard } from 'react-icons/md';
import { AiFillStar, AiTwotoneCalendar, AiFillLike } from 'react-icons/ai';
import { GiGreekTemple, GiHamburgerMenu } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
;

import { INavigatorItem } from "../../interfaces/INavigatorItem";
import { ISidebar } from "../../interfaces/ISidebar"

import Overlay from '../common/Overlay';
import { useEffect, useState } from "react";
import { Flex } from "../styled/Flex.styled";
import { Container } from "../styled/Container.styled";
;



// TODO: Add Location / Contact Details at the bottom of the side bar

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

const Sidebar:React.FC<ISidebar> = ( { popover } ) => {
    
    // States
    const [open, setOpen] = useState(true)
    const [mount, setMount] = useState(true)

    // UseEffect
    useEffect(() => {
        // IF Popover is false then sidebar will be always shown
        // If Popover is true then we should be able to scroll only when mount is false
        if(popover && mount){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'scroll'
        }
    }, [popover, mount])

    // Methods
    const handleCloseOnClick = () => {
        setOpen(false)
        setTimeout( () => setMount(false), 499)
    }

    const handleBarOpen = () => {
        setTimeout( () => setOpen(true), 1)
        setMount(true)
    }

    // Add an appbar that show the button to open the menu when closed
    if(mount || (!popover)){
        return  <>
                    <StyledSidebar open={(!popover) || (popover && open)}>
                        <CloseButtonContainer>
                            {popover && <IoMdClose size={25} color="white" onClick={(event) => handleCloseOnClick()}/>}   
                        </CloseButtonContainer>
                        <AvatarContainer>
                            <Avatar src="src/images/avatar.jpeg" alt="Avatar" />
                        </AvatarContainer>
                        <TitleContainer>
                            <h1>Shanaka Abeysinghe</h1>
                            <h2>Full Stack Engineer</h2>
                        </TitleContainer>
                        <Navigator navLinks={navLinks}/>
                    </StyledSidebar>
                    {popover && <Overlay open={open} onClose={handleCloseOnClick}/>}
                    {!popover && <SidebarSpacing />}
                </>;
    }else{
        return  <Flex>
                    <Appbar>
                        <Container>
                            <GiHamburgerMenu size={25} onClick={(event) => handleBarOpen()}/>
                        </Container>
                    </Appbar>
                    <AppbarMargin />
                </Flex>
    }
};

export default Sidebar;
