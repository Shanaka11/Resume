import Title from "../components/common/Title";
import ProjectList from "../components/project/ProjectList";
import { Page } from "../components/styled/Page.styled";

const ProjectPage = () => {
    return  <Page>
                <Title title='Projects'/>
                <ProjectList />
            </Page>;
};

export default ProjectPage;
