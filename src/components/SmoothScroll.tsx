import { Lenis, ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

interface Props {children: React.ReactNode}

const SmoothScroll:React.FC<Props> = ({ children }) => {
    
    return <ReactLenis root>
        { children }
    </ReactLenis>
}

export default SmoothScroll