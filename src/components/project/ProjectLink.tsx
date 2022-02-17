import { IProjectLink, LinkType } from "../../interfaces/IProject"
import { FaGithub, FaFigma, FaPlay } from 'react-icons/fa'
import { CgNotes } from 'react-icons/cg'
import { StyledLink } from "../styled/Project.styled"


const ProjectLink:React.FC<IProjectLink> = ({ link }) => {

    const getIcon = ( type: LinkType ) => {
        switch(type){
            case 'Demo':
                return <FaPlay size={25} color='black' />
            case 'Design':
                return <FaFigma size={25} color='black' />
            case 'Documentation':
                return <CgNotes size={25} color='black' />
            case 'Source':
                return <FaGithub size={25} color='black' />
        }
    }

    return (
        <StyledLink
            title={link.type}
            href={link.link}
            target="_blank" 
            rel="noopener noreferrer"
        >
            {
                getIcon(link.type)
            }
        </StyledLink>
    )
}

export default ProjectLink