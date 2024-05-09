import { ParallaxTransition } from "./TransitionText"
import rocket from '@/assets/images/rocket.svg'
import { useEffect, useRef } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

const useScrollTriggerEffect = (ref: React.RefObject<HTMLDivElement>, defaultColor: string, targetColor: string) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = document.querySelectorAll('.section');

        sections.forEach((elem) => {
            ScrollTrigger.create({
                trigger: elem,
                start: 'top 5%',
                end: 'bottom 5%',
                markers: false,
                onEnter: () => gsap.to(ref.current, {
                    backgroundColor: targetColor,
                    duration: 1.4
                }),
                onLeave: () => gsap.to(ref.current, {
                    backgroundColor: defaultColor,
                    duration: 1.4
                }),
                onLeaveBack: () => gsap.to(ref.current, {
                    backgroundColor: defaultColor,
                    duration: 1.4
                }),
                onEnterBack: () => gsap.to(ref.current, {
                    backgroundColor: targetColor,
                    duration: 1.4
                }),
            });
        });
    }, []);
};

type Props = {
    windowWidth:number
}

const GardientSection:React.FC<Props> = ({
    windowWidth
}) => {
    const mainRef = useRef<HTMLDivElement | null>(null);
    const mainRef2 = useRef<HTMLDivElement | null>(null);

    useScrollTriggerEffect(mainRef, '#e7e0d9', '#c6bfb9');
    useScrollTriggerEffect(mainRef2, '#fef9ef', '#b9b7b0');

    
  
    
    return <>
        <section ref={mainRef} data-color='#c6bfb9' className="w-screen h-screen relative section select-none">
            {
                windowWidth > 1280 && <ParallaxTransition speedX={18} speedY={10} className="absolute top-[-5%] left-0">
                    <img className="scale-75 rotate-[95deg]" src={rocket} />    
                </ParallaxTransition>
            }
            {
                windowWidth < 1280 && <ParallaxTransition speedX={8} speedY={5} className="absolute top-[10%] left-0">
                    <img className="scale-[50%] rotate-[115deg]" src={rocket} />    
                </ParallaxTransition>
            }
        </section>
        <section  ref={mainRef2} data-color='#b9b7b0' className="w-screen h-screen relative section select-none">

            {
                windowWidth > 1280 &&   <ParallaxTransition speedX={-33} speedY={-17} className="absolute bottom-0 right-0">
                    <img className="scale-75 rotate-[275deg]" src={rocket} />    
                </ParallaxTransition>
            }
            {
                windowWidth < 1280 && <ParallaxTransition speedX={-13} speedY={-5} className="absolute bottom-[10%] right-0">
                    <img className="scale-[50%] rotate-[295deg]" src={rocket} />    
                </ParallaxTransition>
            }
           
            <div className="w-full 2xl:mx-auto 2xl:max-w-[1760px] ">
                <h1 className="absolute bottom-[3vh] text-[84px] px-[1rem] font-bold md:px-[2rem] lg:px-[3rem] xl:px-[3rem] 2xl:px-0 lg:text-[108px]">CONNECT<br></br>US</h1>
            </div>

        </section>
       
     
        
    </>
}

export default GardientSection