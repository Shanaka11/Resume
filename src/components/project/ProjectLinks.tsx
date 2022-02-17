import React from "react"
import { IOtherLink, IProjectLinks } from "../../interfaces/IProject"
import { StyledProjectLinks } from "../styled/Project.styled"
import ProjectLink from "./ProjectLink"
import { Link } from 'react-router-dom'
import { StyledLink } from "../styled/Navigator.styled"

export const ProjectLinks:React.FC<IProjectLinks> = ({ links }) => {
  return (
    <StyledProjectLinks>
        {
            links?.map((item:IOtherLink, index:number) => (
                <ProjectLink key={index} link={item}/>
            ))
        }
        <Link
            to='/projects'
        >
            Back to Projects
        </Link>
    </StyledProjectLinks>
  )
}


export default ProjectLinks