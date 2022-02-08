import { useEffect, useState } from "react";
import { ISkillItem } from "../../interfaces/ISkills";
import { Progressbar, ProgressbarContainer, StyledSkillItemLarge } from "../styled/Skills.styled";


const SkillItemLarge:React.FC<ISkillItem> = ( { skill } ) => {

    const [barValue, setBarValue] = useState(0)

    useEffect(() => {
        setBarValue(skill.score)
    })

  return    <StyledSkillItemLarge>
                <h4>{skill.label}</h4>
                <ProgressbarContainer>
                <Progressbar value={barValue}/>
                </ProgressbarContainer>
                <p>{skill.description}</p>
            </StyledSkillItemLarge>;
};

export default SkillItemLarge;
