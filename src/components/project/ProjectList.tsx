import { StyledProjectList } from "../styled/Project.styled";
import ProjectThumbnail from "./ProjectThumbnail";
import { content } from '../../content';
import { IProject } from "../../interfaces/IProject";


const ProjectList = () => {

    return  <StyledProjectList>
                {
                    content.projects.map((item: IProject, index:number) =>(
                        <ProjectThumbnail key={index} project={item}/>
                    ))
                }
            </StyledProjectList>;
};

export default ProjectList;
