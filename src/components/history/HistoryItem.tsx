import { IHistoryItem, IProject } from '../../interfaces/Ihistory';
import { StyledHistoryItem } from '../styled/History.styled';
import ProjectList from './ProjectList';

const HistoryItem:React.FC<IHistoryItem> = ({ historyItem }) => {
  return    <StyledHistoryItem>
                <p>{historyItem.time}</p>
                <h4>{historyItem.title}</h4>
                <p>{historyItem.description}</p>
                { historyItem.responsibilities &&
                    <section>
                        <h4>
                            Duties & Responsibilities
                        </h4>
                        <ul>
                            {
                                historyItem.responsibilities.map((item:string, index:number) => (
                                    <li key={index}> { item }</li>
                                ))
                            }
                        </ul>
                    </section>
                }
                { historyItem.projects && 
                    <section>
                        <h4>
                            Projects
                        </h4>
                        <ul>
                            {
                                historyItem.projects.map((item:IProject, index:number) => (
                                    <ProjectList key={index} description={item.description} details={item.details}/>
                                ))
                            }
                        </ul>
                    </section>
                }
                { historyItem.experiance && 
                    <section>
                        <h4>
                            Key Experiences
                        </h4>
                        <ul>
                            {
                                historyItem.experiance.map((item:string, index:number) => (
                                    <li key={index}> { item }</li>
                                ))
                            }
                        </ul>
                    </section>
                }
            </StyledHistoryItem>;
};

export default HistoryItem;
