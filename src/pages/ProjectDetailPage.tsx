import { useParams } from 'react-router-dom'
import Title from '../components/common/Title'
import { Page } from '../components/styled/Page.styled'
import content from '../content'
import ProjectLinks from '../components/project/ProjectLinks'
import { StyledImg } from '../components/styled/Project.styled'

const ProjectDetailPage = () => {

    const params = useParams()
    const projectData = content.projects.find((project) => project.id === parseInt(params.id || '0'))

    console.log(projectData?.image ?? 'https://five12daysgeneral.s3.ap-southeast-1.amazonaws.com/resume/GenericProject.jpeg')
    return (
        <Page>
            {projectData ?
                <>
                    <Title title={projectData.title} />
                    <ProjectLinks links={projectData.otherLinks}/>
                    <p><strong>{projectData.techStack}</strong></p>
                    <p>{projectData.summary}</p>
                    <StyledImg 
                        src={projectData.image ?? 'https://five12daysgeneral.s3.ap-southeast-1.amazonaws.com/resume/GenericProject.jpeg'} 
                        alt={projectData.title}
                        loading='lazy'
                    />
                    {
                        projectData.details?.map((item:string, index:number) =>{
                            return <p key={index}>{item}</p>
                        })
                    }
                </>
            :
                <Title title="No Valid Project Data Found" />
            }
        </Page>
    )
}

export default ProjectDetailPage