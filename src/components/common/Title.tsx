import { ITitle } from "../../interfaces/ITitle";
import { StyledTitle } from "../styled/Title.styled";


const Title:React.FC<ITitle> = ({title , margin}) => {

    if (margin) {
        return  <StyledTitle>
                    <h1> { title } </h1>
                    <hr />
                </StyledTitle>
    }

    return   <>
                <h1> { title } </h1>
                <hr />
            </>;
};

export default Title;
