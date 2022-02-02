import { IProject } from "../../interfaces/Ihistory";


const ProjectList:React.FC<IProject> = ({ description, details }) => {

    console.log(description)
    if (details && details.length > 0){
        return  <li>
                    { description }
                    <ul>
                    {details.map((item: string, index:number) => (
                        <li key={index}> { item } </li>
                    ))}
                    </ul>
                </li>
    }
    return <li>{description}</li>;
};

export default ProjectList;
