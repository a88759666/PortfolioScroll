import ParallaxImage from "./ParallaxImage";
import bgImage16 from "@/assets/images/bg16.jpg";

type Props = {
    windowWidth:number
}

const FixedScroll:React.FC<Props> = ({
    windowWidth
}) => {
    return <>
       <div className="flex flex-row items-center gap-[4vh] lg:gap-[10vh]">
            <div className="basis-1/3">
                <h1 className="text-black text-[20px] font-bold mb-6 xl:text-[24px] xl:mb-12">Web3 Project</h1>
                <p className="text-black  text-[16px] xl:text-[20px] ">之前上Web3時期的NFT專案，主要是酒精路跑與NFT結合，發行門票型的NFT，同時也可以透過不同的NFT合成新的NFT，目前因為還沒把智能合約匯入，所以用自己創的data當作資料，可以連接錢包，之後會把顯示餘額，和交易功能補上，視覺和UIUX也是由我設計</p>
            </div>
            <div className="basis-1/2">
                <ParallaxImage speed={-17} className="z-10 overflow-hidden relative">
                    <div className="w-[100%] pt-[100vh] relative">
                        <div className={`${ windowWidth > 1280 ? 'translate-x-[15vh] scale-[150%]' : ''} max-w-full absolute top-0 left-0  translate-y-[20vh]`}>
                            <img className="block object-cover w-[100%] h-[100%]" src={bgImage16} alt="" />
                        </div>
                    </div>
                    
                </ParallaxImage>
            </div>
       </div>
    </>
  };
    
  export default FixedScroll;