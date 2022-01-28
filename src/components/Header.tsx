import { StyledHeader, AvatarDiv, Avatar, TitleDiv } from './styled/Header.styled';
;


const Header = () => {
  // Should have avatar Image and Title
  return    <StyledHeader>
                <AvatarDiv>
                    <Avatar src='src/images/avatar.jpeg' alt='' />
                </AvatarDiv>
                {/* <LeftPanel /> */}
                <TitleDiv>
                    <h1>Shanaka Abeysinghe</h1>
                    <h2>Full Stack Engineer</h2>
                </TitleDiv>
            </StyledHeader>;
};

export default Header;
