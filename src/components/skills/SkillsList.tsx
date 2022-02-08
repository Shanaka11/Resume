import { StyledSkillsList } from "../styled/Skills.styled";
import SkillItem from "./SkillItem";

import { content } from '../../content'
import { ISkill, ISkillList } from "../../interfaces/ISkills";
import SkillItemLarge from "./SkillItemLarge";


const SkillsList:React.FC<ISkillList> = ( { list } ) => {

  return  <StyledSkillsList>
            {
              list === 'summary' &&
              content.skills.map((item: ISkill, index: number) => (
                <SkillItem key={index} skill={item} />
              ))
            }
            {
              list === 'detailed' &&
              content.skills.map((item: ISkill, index: number) => (
                <SkillItemLarge key={index} skill={item} />
              ))
            }
          </StyledSkillsList>;
};

export default SkillsList;
