import { Appbar, AppbarMargin, Avatar, AvatarContainer, CloseButtonContainer, ContactContainer, SidebarSpacing, StyledSidebar, TitleContainer } from "../styled/Sidebar.styled";
import Navigator from './Navigator';

import { MdDashboard } from 'react-icons/md';
import { AiFillStar, AiTwotoneCalendar, AiFillLike, AiFillMail } from 'react-icons/ai';
import { GiGreekTemple, GiHamburgerMenu } from 'react-icons/gi';
import { FaTools, FaGithub, FaMobileAlt, FaLinkedin } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { ImLocation } from 'react-icons/im';


import { INavigatorItem } from "../../interfaces/INavigatorItem";
import { ISidebar } from "../../interfaces/ISidebar"

import Overlay from '../common/Overlay';
import { useEffect, useState } from "react";
import { Flex } from "../styled/Flex.styled";
import { Container } from "../styled/Container.styled";

import { content } from '../../content';
import { useLocation } from "react-router-dom";


const navLinks:INavigatorItem[] = [
    {
        id: 0,
        icon: <MdDashboard size={25}/>,
        text: 'Summery',
        link: '/'
    },
    {
        id: 1,
        icon: <AiFillStar size={25}/>,
        text: 'Skills & Experience',
        link: '/skills'
    },
    {
        id: 2,
        icon: <AiTwotoneCalendar size={25}/>,
        text: 'Work History',
        link: '/work'
    },
    {
        id: 3,
        icon: <FaTools size={25}/>,
        text: 'Projects',
        link: '/projects'
    },
    {
        id: 4,
        icon: <GiGreekTemple size={25}/>,
        text: 'Education',
        link: '/education'
    },
    // {
    //     id: 5,
    //     icon: <AiFillLike size={25}/>,
    //     text: 'References',
    //     link: '/reference'
    // },
  ]

const Sidebar:React.FC<ISidebar> = ( { popover } ) => {
    
    // States
    const [open, setOpen] = useState(true)
    const [mount, setMount] = useState(true)
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(0)

    // React Router
    const location = useLocation()

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

    useEffect(() => {
        setSelectedIndex(navLinks.find( (item:INavigatorItem) => item.link.includes(location.pathname))?.id)
    }, [location])

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
                            <Avatar src={content.avatar} alt="Avatar" />
                        </AvatarContainer>
                        <TitleContainer>
                            <h1>{content.name}</h1>
                            <h2>{content.title}</h2>
                            <h4>{content.contact.email}</h4>
                        </TitleContainer>
                        <Navigator navLinks={navLinks} selectedIndex={selectedIndex} handleOnClick={handleCloseOnClick}/>
                        <ContactContainer>
                            <a href="https://goo.gl/maps/dDQGJuoP1mQLMZRZA" target="_blank" rel="noopener noreferrer">
                                <ImLocation title={content.contact.location} size={25} color="white" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FaMobileAlt title={content.contact.phone} size={25} color="white"/>
                            </a>
                            <a href={`mailto:${content.contact.email}`} target="_blank" rel="noopener noreferrer">
                                <AiFillMail title={content.contact.email} size={25} color="white" />
                            </a>
                            <a href={content.contact.linkedIn} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin title='LinkedIn Profile' size={25} color="white" />
                            </a>
                            <a href={content.contact.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub title="Github Profile" size={25} color="white"/>
                            </a>
                        </ContactContainer>
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
