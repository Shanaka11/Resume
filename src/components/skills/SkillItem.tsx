import { useEffect, useState } from "react";
import { ISkillItem } from "../../interfaces/ISkills";
import { Progressbar, ProgressbarContainer, StyledSkillItem } from "../styled/Skills.styled";

const SkillItem:React.FC<ISkillItem> = ({ value }) => {

  const [barValue, setBarValue] = useState(0)

  useEffect(() => {
    setBarValue(value)
  })

  return  <StyledSkillItem>
            <p>React</p>
            <ProgressbarContainer>
              <Progressbar value={barValue}/>
            </ProgressbarContainer>
          </StyledSkillItem>;
};

export default SkillItem;
