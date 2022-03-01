import Title from "../components/common/Title";
import EducationHistory from "../components/education/EducationHistory";
import ProjectList from "../components/project/ProjectList";
import SkillsList from "../components/skills/SkillsList";
import { Page } from "../components/styled/Page.styled";
import WorkHistory from "../components/work/WorkHistory";

const SummeryPage = () => {
  return    <Page>          
                <Title title="About Me"/>
                <p>An accomplished Software Engineer with more than <strong>five</strong> years of industry experience. During that period, I have gained extensive knowledge and experience in Software Development, Testing, Deploying, and Delivery. Furthermore, I'm well versed in Requirement gathering, Client handling, Problem-solving, and Solution Designing.</p>
                <p>I consider myself a professional who believes Quality of Delivery and Customer Satisfaction are the keys to the success of a business. Therefore always strive to achieve that goal.</p>
                <p>I find joy in learning new technology, problem solving and a bit of soccer as well.</p>
                <Title title="Skills & Experience" margin/>
                <SkillsList list="summary"/>
                <Title title="Work History" margin/>
                <WorkHistory />
                <Title title="Projects" margin/>
                <ProjectList />
                <Title title="Education" margin/>
                <EducationHistory />
            </Page>;
};

export default SummeryPage;
