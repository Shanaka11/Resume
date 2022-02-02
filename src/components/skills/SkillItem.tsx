import { useEffect, useState } from "react";
import { ISkillItem } from "../../interfaces/ISkills";
import { Progressbar, ProgressbarContainer, StyledSkillItem } from "../styled/Skills.styled";

const SkillItem:React.FC<ISkillItem> = ({ skill }) => {

  const [barValue, setBarValue] = useState(0)

  useEffect(() => {
    setBarValue(skill.score)
  })

  return  <StyledSkillItem>
            <p>{skill.label}</p>
            <ProgressbarContainer>
              <Progressbar value={barValue}/>
            </ProgressbarContainer>
          </StyledSkillItem>;
};

export default SkillItem;
