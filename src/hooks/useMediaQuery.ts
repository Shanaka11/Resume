import { useEffect, useState } from "react"
import { theme } from "../Theme";

export const useMediaQuery = () => {
    const [ width, setWidth ] = useState<undefined| 'xsDown' | 'xsUp' | 'smDown' | 'smUp' | 'mdDown' | 'mdUp'>(undefined)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= theme.breakpoints.xs){
                setWidth("xsDown")
            }else if(window.innerWidth <= theme.breakpoints.sm){
                setWidth("smDown")
            }else if(window.innerWidth <= theme.breakpoints.md){
                setWidth("mdDown")
            }else{
                setWidth("mdUp")
            }
        }
        // Add event listener
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
      }, []);
      return width
}