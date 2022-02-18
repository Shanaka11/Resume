import { Link } from 'react-router-dom'
import { IProjectObject } from "../../interfaces/IProject";
import { Box, HeaderContainer, StyledProjectThumbnail, TextContainer } from "../styled/Project.styled";


const ProjectThumbnail:React.FC<IProjectObject> = ({ project }) => {
  return    <StyledProjectThumbnail>
                <HeaderContainer>
                    <h4>{project.title}</h4>
                    <p><em>{project.subtitle}</em></p>
                </HeaderContainer>
                <TextContainer>
                    <div>
                        {
                            project.summary.map((item:string, index:number) => (
                                <p key={index}>{item}</p>
                            ))
                        }
                        <p><strong>Tech Stack</strong></p>
                        <p>{project.techStack}</p>
                    </div>
                    <Link to={`/projects/${project.id}`}><em>Read More</em></Link>
                </TextContainer>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Box src={project.image ? project.image : 'https://five12daysgeneral.s3.ap-southeast-1.amazonaws.com/resume/GenericProject.jpeg'} alt="project-image"/>
                </a>
            </StyledProjectThumbnail>;
};

export default ProjectThumbnail;
