import Title from '../components/common/Title';
import { Page } from '../components/styled/Page.styled';
import WorkHistory from '../components/work/WorkHistory';

const WorkHistoryPage = () => {
    return  <Page>
                <Title title='Work History'/>
                <WorkHistory />
            </Page>;
};

export default WorkHistoryPage;
