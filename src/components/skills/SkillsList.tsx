import { StyledSkillsList } from "../styled/Skills.styled";
import SkillItem from "./SkillItem";

import { content } from '../../content'
import { ISkill } from "../../interfaces/ISkills";


const SkillsList = () => {

  return  <StyledSkillsList>
            {content.skills.map((item: ISkill, index: number) => (
              <SkillItem key={index} skill={item} />
            ))}
          </StyledSkillsList>;
};

export default SkillsList;
