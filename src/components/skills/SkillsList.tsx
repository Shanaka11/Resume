import { StyledSkillsList } from "../styled/Skills.styled";
import SkillItem from "./SkillItem";

const SkillsList = () => {
  return  <StyledSkillsList>
            <SkillItem value={10}/>
            <SkillItem value={30}/>
            <SkillItem value={54}/>
            <SkillItem value={90}/>
            <SkillItem value={87}/>
            <SkillItem value={60}/>
          </StyledSkillsList>;
};

export default SkillsList;
