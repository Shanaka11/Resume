import { ThemeProvider } from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import { Container, MainContainer } from './components/styled/Container.styled';
import { useMediaQuery } from './hooks/useMediaQuery';
import SummeryPage from './pages/SummeryPage';
import { theme } from './Theme';


function App() {

  const width = useMediaQuery()
  
  return (
    <ThemeProvider theme={theme}>
      <MainContainer small={width !== 'mdUp'}>
        <Sidebar popover={width !== 'mdUp'}/>
        <Container>
          <SummeryPage />
        </Container>
      </MainContainer>
    </ThemeProvider>
  )
}

export default App
