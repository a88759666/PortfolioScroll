import ocean from "@/assets/images/bg12.jpg"
import line from "@/assets/images/line.png"
import statue from "@/assets/images/statue.png"
import workblack from "@/assets/images/workblack.png"
import worklogo from "@/assets/images/worklogo.png"
import paper from "@/assets/images/paper.png"
import paint from "@/assets/images/paint.png"

import work1 from "@/assets/images/bg1.jpg";
import work2 from "@/assets/images/bg2.jpg";
import work6 from "@/assets/images/bg6.jpg";
import work10 from "@/assets/images/bg10.png";
import work11 from "@/assets/images/bg11.jpg";
import work13 from "@/assets/images/bg13.jpg";
import work14 from "@/assets/images/bg14.jpg";

import HeaderBar from "@/components/HeaderBar"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import LoadingCanvas from "@/pages/singleWork/components/LoadingCanvas"
import Footer from "./components/Footer"
import Modal from "./components/Modal"


type StepState = 'work' | 'info' | 'explore'
const SingleWork:React.FC = () => {
    const [ currentId, setCurrentId ] = useState('')
    const go = useNavigate()
    const [ showModal, setShowModal] = useState(false)
    const [ currentStep, setCurrentStep] = useState<StepState>('work')
    const [ open, setOpen ] = useState(false);
    
    function closeModal() {
        if(currentStep === 'work'){
            setCurrentStep('info')
        } else if(currentStep === 'info'){
            setCurrentStep('explore')
        } else if(currentStep === 'explore'){
            setShowModal(false)
        } 
    }
    function openModalClick(currentStep:StepState) {
        setShowModal(true)
        setCurrentStep(currentStep)

    }
      
    useEffect(()=>{
        setCurrentId(localStorage.getItem('currentId') as string)
    },[])

    
    async function handleClickScroll (id:string){
        await go('/home')
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setOpen(!open)
    }

    return <>
        <div className='w-screen h-screen bg-[#fffbf0] flex flex-col relative max-h-screen overflow-hidden'>
            <div className="fixed top-0 z-100">
                <HeaderBar 
                    handleClickScroll={handleClickScroll}
                    setOpen={setOpen}
                    open={open}
                />
            </div>
            <div 
                className={`${ open ? 'hidden' : ''} fixed top-[100px] left-[30px] flex flex-row items-center gap-[10px] cursor-pointer lg:gap-[15px] mt-3`}
                onClick={()=>{go('/home')}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <h1 className="text-[20px] font-extralight lg:text-[24px]">Back</h1>
            </div>

            <div className="absolute top-1/2 left-1/2 z-50 w-[40%] translate-x-[-50%] translate-y-[-50%] lg:w-[30%]">
                {   currentId === 'work1' && 
                    <div className={`w-[100%] pt-[70%] overflow-hidden cursor-pointer relative`}>
                        <img src={work1} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                    </div>
                }
                {   currentId === 'work2' && 
                    <div className={`w-[100%] pt-[125%] overflow-hidden cursor-pointer relative`}>
                        <img src={work2} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                    </div>
                }
                {   currentId === 'work6' && 
                    <div className={`w-[100%] pt-[70%] overflow-hidden cursor-pointer relative`}>
                        <img src={work6} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                    </div>
                }
                {   currentId === 'work10' && 
                    <div className={`w-[100%] pt-[100%] overflow-hidden cursor-pointer relative`}>
                        <img src={work10} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                    </div>
                }
                {   currentId === 'work11' && 
                    <div className={`w-[100%] pt-[70%] overflow-hidden cursor-pointer relative`}>
                        <img src={work11} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                    </div>
                }
                {   currentId === 'work13' && 
                    <div className={`w-[100%] pt-[45%] overflow-hidden cursor-pointer relative`}>
                        <img src={work13} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                    </div>
                }
                {   currentId === 'work14' && 
                    <div className={`w-[100%] pt-[125%] overflow-hidden cursor-pointer relative`}>
                        <img src={work14} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                    </div>
                }
            </div>
            <div className="w-[28%] select-none absolute top-[65%] left-[60%] translate-x-[-50%] translate-y-[-50%] z-10 lg:top-[55%]">
                <div className="w-[100%] pt-[125%] relative">
                    <img src={ocean} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                </div>   
            </div>
            <div className="w-[28%] select-none absolute top-[40%] left-[35%] translate-x-[-50%] translate-y-[-50%] lg:top-[35%] lg:left-[40%]">
                <div className="w-[100%] pt-[125%] relative">
                    <img src={line} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                </div>
            </div>
            <div className="w-[40%] select-none absolute top-[75%] right-[-2%]  translate-y-[-50%] z-10 lg:top-[65%]">
            <div className="w-[100%] pt-[50%] relative">
                    <img src={workblack} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                </div>   
            </div>
            <div className="w-[20%] select-none absolute top-[70%] left-[25%] translate-x-[-50%] translate-y-[-50%] z-10">
                <div className="w-[100%] pt-[105%] relative">
                    <img src={statue} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                </div>   
            </div>
            <div className="w-[20%] select-none absolute top-[43%] left-[72%] translate-x-[-50%] translate-y-[-50%] rotate-45 z-100 lg:top-[30%]">
                <div className="w-[100%] pt-[90%] relative">
                    <img src={paper} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                </div>   
            </div>
            <div className="w-[30%] select-none absolute top-[30%] left-[20%] translate-x-[-10%] translate-y-[-50%] z-50 lg:top-[20%]">
                <div className="w-[100%] pt-[20%] relative">
                    <img src={worklogo} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                </div>   
            </div>
            <div className="w-[20%] select-none absolute top-[76%] left-[20%] translate-x-[-50%] translate-y-[-50%]  ">
                <div className="w-[100%] pt-[50%] relative">
                    <img src={paint} className="absolute top-0 left-0 overflow-hidden block object-cover w-[100%] h-[100%]"/>
                </div>   
            </div>
            <div className="w-[20%] select-none absolute top-[0%] right-[2%] max-h-[88vh] overflow-hidden opacity-0 lg:opacity-100">
                <div className="w-[100%] relative">
                    <LoadingCanvas />
                </div>
            </div>
            { showModal && currentStep === 'work' ? <Modal closeModal={closeModal} id={currentId} currentStep={currentStep}/> : null  }
            { showModal && currentStep === 'info' ? <Modal closeModal={closeModal} id={currentId} currentStep={currentStep}/> : null  }
            { showModal && currentStep === 'explore' ? <Modal closeModal={closeModal} id={currentId} currentStep={currentStep}/> : null  }

            <div className="fixed bottom-0">
                <Footer workName="" openModal={openModalClick}/>
            </div>
        </div>
    </>
}

export default SingleWork