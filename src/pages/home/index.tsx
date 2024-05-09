import Container from "@/components/Container"




import about from "@/assets/images/about.png";
import cd from "@/assets/images/cd.png";


import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterWork from "@/pages/home/components/FooterWork";
import { motion, useMotionValue, useTransform, useScroll, useSpring, useVelocity, useAnimationFrame, transform } from "framer-motion";
import { wrap } from "@motionone/utils";
import ReactPlayer from "react-player";
import ParallaxText from "./components/ParallaxTest";
import bg from '@/assets/images/bg.jpg'

import WorkList from "./components/WorkList";
import TransitionText, { ParallaxTransition } from "./components/TransitionText";
import FixedScroll from "./components/FixedScroll";

import GardientSection from "./components/GardientSection";








const WorkShop:React.FC = () => {
  const [ currentId, setCurrentId ] = useState<null|string>(null)
  const [open, setOpen] = useState(false);
  const go = useNavigate()

  // listen for window resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  const wordSplitDistance = () => {
    if(windowWidth > 1024){
      return 120
    } else if(windowWidth > 768){
      return 90
    } else {
      return 50
    }
  }
  const seventyPercentOfViewportHeight = `${window.innerHeight * 0.7}px`
  const fourtyPercentOfViewportHeight = `${window.innerHeight * 0.3}px`

  //Word Animation
  const word = "VER.3"
  
  //CD Animation
  const { scrollYProgress } = useScroll();
  const rotateDeg = 180 + scrollYProgress.get() * 400

  const baseY1 = useMotionValue(0)
  const baseY2 = useMotionValue(0)

  const baseVelocity1 = -10
  const baseVelocity2 = 10
  
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })
  const distanceY1 = useTransform(baseY1, (v) => `${wrap(-20, 40, v)}%`);
  const distanceY2 = useTransform(baseY2, (v) => `${wrap(-20, 40, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy1 = directionFactor.current * baseVelocity1 * (delta / 1000);
    let moveBy2 = directionFactor.current * baseVelocity2 * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy1 += directionFactor.current * moveBy1 * velocityFactor.get();
    moveBy2 += directionFactor.current * moveBy2 * velocityFactor.get();

    baseY1.set(baseY1.get() + moveBy1);
    baseY2.set(baseY2.get() + moveBy2);
    
    // console.log('moveBy1:',moveBy1)
    // console.log('moveBy2:',moveBy2)

    // console.log('baseY1',baseY1)
    // console.log('baseY2',baseY2)


  })

  const handleClickScroll = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(!open)
  }

  function entryWork(id:string){
    setCurrentId(id)
    localStorage.setItem("currentId", id)
    if(currentId !== null ){
      go('/singleWork')
    }
  }
  
  useEffect(()=>{
    setCurrentId(localStorage.getItem('currentId') as string)
  },[])
 
 


  return <>
    <div className="fixed top-0 h-screen w-screen left-0 z-0 opacity-50 flex flex-row">
      <img src={bg} />
      <img src={bg} />
      <img src={bg} />

    </div>
    <div className="absolute top-[50vh] w-full overflow-hidden lg:top-[40vh]">
      <Container>
        {/* intro */}
        <h1 
          className="text-[100px] leading-[80px] font-firaSans font-bold md:text-[160px] md:leading-[130px] lg:text-[200px] lg:leading-[160px] "
        >
          GEORGE{"\n"}FOUNDATION
          <p 
            className="text-white relative"
          >
              { 
                word.split("").map((letter, i)=>{
                  const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * 1100) - 725])
                  return <motion.span className="absolute" style={{top: y, left: i * wordSplitDistance() }}>{letter}</motion.span>
                })
              }
          </p>
        </h1>

        {/* work */}
        <div id="workSection" className="mt-[20vh] scale-90 lg:scale-100" >
          <WorkList entryWork={entryWork}/>
        </div>
      </Container>
          
      {/* transition */}
      <div className="mt-[110vh] w-screen h-screen lg:mt-[160vh]">
        <TransitionText />
      </div>

      <Container>
        {/* //about */}
        <div 
          className="w-full scale-[95%] mt-[40vh] lg:mt-[50vh] lg:scale-100" 
          id="aboutSection"
        >
          <div className="w-full py-[20vh] relative">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 opacity-95">
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: rotateDeg}}
                transition={{ 
                  ease: "linear",
                  // type: "spring",
                  bounce: 0.4,
                  duration: 2,
                  // repeat: Infinity
                }}
                className="select-none"
              >
                <img src={cd} />
              </motion.div>
            </div>
            <div className={`${ windowWidth > 1024 ? 'w-[30vh] h-[110vh]' : 'w-[20vh] h-[100vh]'} absolute top-1/2 right-[5%] translate-y-[-50%] overflow-hidden z-10`}>
              <motion.div
                initial={{ y:distanceY1.get()}}
                whileInView={{ y:seventyPercentOfViewportHeight}}
                transition={{ 
                  ease: "linear",
                  // type: "spring",
                  bounce: 0.4,
                  duration: 1.2,
                }}
              >
                <ReactPlayer 
                  url='videos/IGRedux.mp4'
                  playing= {true}
                  loop={true}
                  muted={true}
                  volume={0.8}
                  controls={false}
                  style={{
                    marginLeft: "-12vh",
                    transform: "scaleX(.8) scaleY(1.2)"
                  }}
                />
              </motion.div>
            </div>
            <div className={`${ windowWidth > 1024 ? 'w-[30vh] h-[110vh]' : 'w-[20vh] h-[70vh] translate-y-[-70%]'} absolute top-1/2 left-[15%] translate-y-[-40%] translate-x-[-50%]  overflow-hidden z-10`}>
              <motion.div
                initial={{ y:fourtyPercentOfViewportHeight}}
                whileInView={{ y:distanceY2.get()}}
                className="scale-50"
                transition={{ 
                  ease: "linear",
                  // type: "spring",
                  bounce: 0.4,
                  duration: 1.2,
                }}
              >
                <ReactPlayer 
                  url='videos/BarNFT.mp4'
                  playing= {true}
                  loop={true}
                  muted={true}
                  volume={0.8}
                  controls={false}
                  style={{
                    marginLeft: "-13vh",
                    transform: "scaleX(.9) scaleY(1.2)"
                  }}
                  
                />
              </motion.div>
            </div>
            <section className="overflow-hidden px-[-50px]">
              <ParallaxText baseVelocity={-4}>
                <div className="flex felx-row">
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                </div>
              </ParallaxText>
              <ParallaxText baseVelocity={4}>
                <div className="flex felx-row">
                  <img src={about} className="h-[200px]"/>
                  <img src={about} className="h-[200px]"/>
                  <img src={about} className="h-[200px]"/>
                  <img src={about} className="h-[200px]"/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                </div>
              </ParallaxText>
              <ParallaxText baseVelocity={-4}>
                <div className="flex felx-row">
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                  <img src={about} className="h-[200px] "/>
                </div>
              </ParallaxText>
            </section>
          </div>
        </div>
        
        {/* fixed */}
        <div className="w-screen h-screen overflow-hidden mt-[20vh] lg:mt-[40vh]">
          <FixedScroll windowWidth={windowWidth}/>
        </div>
      </Container>

      {/* gardientSection */}
      <div className="">
        <GardientSection windowWidth={windowWidth}/>
      </div>

      <div className="bg-[#b9b7b0]  overflow-hidden">
        <Container>
          <FooterWork handleClickScroll={handleClickScroll}/>              
        </Container>
      </div>
    </div>    
  </>
}

export default WorkShop