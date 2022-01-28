import { Avatar, AvatarContainer, SidebarSpacing, StyledSidebar, TitleContainer } from "../styled/Sidebar.styled";
import Navigator from './Navigator';

// TODO: Add Location / Contact Details at the bottom of the side bar
// TODO: Create the model sidebar for smaller screens

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
                    <Navigator />
                </StyledSidebar>
                <SidebarSpacing />
            </>;
};

export default Sidebar;
