import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import useWindowSize from "@/hooks/useWindowSize"


type Props = {
    className: string,
    children: React.ReactNode,
    speed: number,
    id?: string
}

const ParallaxImage:React.FC<Props> = ({
    className,
    children,
    speed = 1,
    id
}) => {
    const trigger = useRef<HTMLDivElement | null>(null)
    const target = useRef<HTMLDivElement | null>(null)
    const timeline = useRef<gsap.core.Timeline | null>(null)

    const { width: windowWidth } = useWindowSize()
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const y = windowWidth * speed * 0.1
        const setY = gsap.quickSetter(target.current, "y", "px");

        timeline.current = gsap.timeline({
            scrollTrigger:{
                id: id,
                trigger: trigger.current, 
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                onUpdate: (e) => {
                    setY(e.progress * y);
                },
            }
        })
        return () => { 
            if (timeline.current) {
                timeline.current.kill()
            }
          };
    },[id])

    return <>
        <div ref={trigger} className={className}>
            <div ref={target}>
                { children }
            </div>
        </div>
    </>
}

export default ParallaxImage