import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import DownloadBtn from './components/common/DownloadBtn';
import ScrollToTop from './components/common/ScrollToTop';
import Sidebar from './components/sidebar/Sidebar';
import { Container, MainContainer } from './components/styled/Container.styled';
import { useMediaQuery } from './hooks/useMediaQuery';
import EducationPage from './pages/EducationPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectPage from './pages/ProjectPage';
import ReferencePage from './pages/ReferencePage';
import SkillsPage from './pages/SkillsPage';
import SummeryPage from './pages/SummeryPage';
import WorkHistoryPage from './pages/WorkHistoryPage';
import { theme } from './Theme';

// TODO: Implement Lazy Loading

function App() {

  const width = useMediaQuery()
  
  return (
    <ThemeProvider theme={theme}>
      <MainContainer small={width !== 'mdUp'}>
        <Sidebar popover={width !== 'mdUp'}/>
        <Container>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<SummeryPage />} />
            <Route path='/skills' element={< SkillsPage />} />
            <Route path='/work' element={<WorkHistoryPage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/projects/:id' element={<ProjectDetailPage/> } />
            <Route path='/education' element={<EducationPage />} />
            <Route path='/reference' element={<ReferencePage />} />
          </Routes>
          <DownloadBtn />
        </Container>
      </MainContainer>
    </ThemeProvider>
  )
}

export default App
