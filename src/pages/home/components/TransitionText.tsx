import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import useWindowSize from "@/hooks/useWindowSize"


type Props = {
    className: string,
    children: React.ReactNode,
    speedX: number,
    speedY: number,
    id?: string
}
export const ParallaxTransition: React.FC<Props> = ({
    className,
    children,
    speedX = 1,
    speedY = 1,
    id
}) => {
    const trigger = useRef<HTMLDivElement | null>(null);
    const target = useRef<HTMLDivElement | null>(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);

    const { width: windowWidth } = useWindowSize()
    const { width: windowHeight} = useWindowSize()

    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const x = speedX * 0.1 * windowWidth
        const y =  speedY * 0.1 * windowHeight
        const setY = gsap.quickSetter(target.current, "y", "px");
        const setX = gsap.quickSetter(target.current, "x", "px");

        timeline.current = gsap.timeline({
            scrollTrigger: {
                id: id,
                trigger: trigger.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                onUpdate: (e) => {
                    setY(e.progress * y );
                    setX(e.progress * x );

                },
            }
        });
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

const TransitionText: React.FC = () => {
   
    return <>
        <div className="w-screen min-h-[100vh] relative lg:min-h-[140vh]">
            <ParallaxTransition speedX={7} speedY={-3} className="absolute top-[40vh]">
                <div className="-skew-y-[20deg] bg-white ">
                    <p className="inline-block whitespace-nowrap text-black  font-black tracking-tighter text-[52px] lg:text-[78px] 2xl:text-[108px]">CHECK IT OUT TO EXPLORE MORE SCROLLING</p>
                </div>
            </ParallaxTransition>
            <ParallaxTransition speedX={3} speedY={0} className="absolute top-[40vh] -left-[20vh] lg:top-[30vh]">
                <div className="skew-y-[2deg] bg-white ">
                    <p className="inline-block whitespace-nowrap text-black  font-black tracking-tighter text-[52px] lg:text-[78px] 2xl:text-[108px]">ROLLING DOWN</p>
                </div>
            </ParallaxTransition>
            <ParallaxTransition speedX={-5} speedY={2} className="absolute top-[55vh] lg:top-[70vh]">
                <div className="skew-y-[15deg] bg-white">
                <p className="inline-block whitespace-nowrap text-black  font-black tracking-tighter text-[52px] lg:text-[78px] 2xl:text-[108px]">FINDING MORE INTERESTING!</p>
                </div>
            </ParallaxTransition>

            <ParallaxTransition speedX={-3} speedY={2} className="absolute top-[70vh] left-[50vh] lg:top-[90vh] lg:left-[100vh]">
                <div className="-skew-y-2 bg-white">
                <p className="inline-block whitespace-nowrap text-black  font-black tracking-tighter text-[52px] lg:text-[78px] 2xl:text-[108px]">SCROLL IT NOW</p>
                </div>
            </ParallaxTransition>

            
            <ParallaxTransition speedX={5} speedY={2} className="absolute top-[50vh]">
                <div className="skew-y-8 bg-white">
                <p className="inline-block whitespace-nowrap text-black  font-black tracking-tighter text-[52px] lg:text-[78px] 2xl:text-[108px]">TAKE A BREAK, RELAX & CHILL </p>
                </div>
            </ParallaxTransition>
        </div>
        
    </>
    
  

}

export default TransitionText