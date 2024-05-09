import { DiscordFollowIcon, TwitterFollowIcon, IgFollowIcon} from "@/assets"


 type props = {
    handleClickScroll: (id:string) => void
 }

const FooterWork:React.FC<props> = ({
    handleClickScroll
}) => {
    return <>
        <div className="py-[50px]"> 
            <div className="flex flex-row justify-between items-start">
                <div className="flex flex-col">
                    <h1 className="text-[20px] font-bold leading-[24px] lg:text-[24px] lg:leading-[24px]">George Foundation</h1>
                    <h1 className="text-[20px] font-bold mb-[30px] leading-[24px] lg:text-[24px] lg:leading-[24px]">Graphic Design</h1>
                    <p className="text-[12px] font-[400] leading-[26px] max-w-[380px] lg:text-[16px] lg:leading-[26px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vel mi faucibus mauris, mauris ornare. Sagittis ultrices nisl cras ut sit adipiscing
                    </p>
                </div>
                <div className="flex flex-row gap-7 items-start lg:gap-[85px]">
                    <div className="flex flex-col items-start gap-3 lg:gap-[20px]">
                        <h1 className="text-[20px] font-[700] lg:text-[24px]">MENU</h1>
                        <h1 className="text-[12px] font-[700] cursor-pointer lg:text-[16px]" onClick={()=>{handleClickScroll('workSection')}}>WORK</h1>
                        <h1 className="text-[12px] font-[700] cursor-pointer lg:text-[16px]" onClick={()=>{handleClickScroll('aboutSection')}}>ABOUT</h1>
                    </div>
                    <div className="flex flex-col gap-2 items-start lg:gap-[20px]">
                        <h1 className="text-[20px] font-bold lg:text-[24px] ">Follow us</h1>
                        <div className="flex flex-row gap-2 lg:gap-[15px]">
                            <DiscordFollowIcon />
                            <TwitterFollowIcon />
                            <IgFollowIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  };
    
  export default FooterWork;