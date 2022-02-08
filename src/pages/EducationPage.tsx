import Title from '../components/common/Title';
import EducationHistory from '../components/education/EducationHistory';
import { Page } from '../components/styled/Page.styled';

const EducationPage = () => {
    return  <Page>
                <Title title='Education'/>
                <EducationHistory />
            </Page>;
};

export default EducationPage;
