import { IProjectHistory } from "../../interfaces/IHistory";


const ProjectList:React.FC<IProjectHistory> = ({ description, details }) => {

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
