import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { INavigatorItem } from "../../interfaces/INavigatorItem";
import { StyledLink, StyledNavigatorItem } from "../styled/Navigator.styled";

const NavigatorItem:React.FC<INavigatorItem> = ({ active, icon, text, handleOnClick, id, link}) => {

    // States
    const [coords, setCoords] = useState({ x: -1, y: -1})
    const [isRippling, setIsRippling] = useState(false)

    // UseEffect
    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true)
            setTimeout(() => setIsRippling(false), 300)
        } else {
            setIsRippling(false)
        }
    }, [coords])

    useEffect(() => {
        if (!isRippling){
            setCoords({ x: -1, y: -1 });
        } 
    }, [isRippling])

    // Methods
    const handleButtonOnClick = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top})
        handleOnClick && handleOnClick(id)
    }

    return  <StyledLink>
                <Link to={link}>
                    <StyledNavigatorItem active={active} left={coords.x} top={coords.y} onClick={handleButtonOnClick}>
                        {icon}
                        <h4>{text}</h4>
                        {isRippling ? (
                            <span />
                        )
                        :
                        (
                            ''
                        )}
                    </StyledNavigatorItem>
                </Link>
            </StyledLink>;
};

export default NavigatorItem;
