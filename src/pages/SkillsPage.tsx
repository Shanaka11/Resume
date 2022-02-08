import Title from '../components/common/Title';
import SkillsList from '../components/skills/SkillsList';
import { Page } from '../components/styled/Page.styled';

const SkillsPage = () => {
  return    <Page>
                <Title title='Skills & Experiance'/>
                <SkillsList list='detailed'/>
            </Page>;
};

export default SkillsPage;
