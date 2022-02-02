import { StyledSkillsList } from "../styled/Skills.styled";
import SkillItem from "./SkillItem";

import { content } from '../../content'
import { ISkill } from "../../interfaces/IContent";


const SkillsList = () => {

  console.log(content.skills)
  return  <StyledSkillsList>
            {content.skills.map((item: ISkill, index: number) => (
              <SkillItem key={index} skill={item} />
            ))}
          </StyledSkillsList>;
};

export default SkillsList;
