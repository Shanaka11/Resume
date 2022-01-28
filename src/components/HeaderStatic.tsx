import { Avatar, AvatarContainer, StyledHeader, Title } from './styled/HeaderStatic.styled';
;


const HeaderStatic = () => {
  return    <StyledHeader>
                <AvatarContainer>
                    <Avatar src='src/images/avatar.jpeg' alt=''/>
                </AvatarContainer>
                <Title>
                    <h1>Shanaka Abeysinghe</h1>
                    <h2>Full Stack Engineer</h2>
                </Title>
            </StyledHeader>;
};

export default HeaderStatic;
