
import React from 'react';
import bgImage1 from "@/assets/images/bg1.jpg";
import bgImage2 from "@/assets/images/bg2.jpg";
import bgImage6 from "@/assets/images/bg6.jpg";
import bgImage10 from "@/assets/images/bg10.png";
import bgImage11 from "@/assets/images/bg11.jpg";
import ParallaxImage from "./ParallaxImage";

type itemProps = {
    photo?: string,
    workId?: string,
    h?: number
    onToggleClick: (id:string) => void
}

const WorkItem:React.FC<itemProps> = ({
  photo,
  workId,
  h,
  onToggleClick,
}) => {
  return<>
    <div className="max-w-[300px] lg:max-w-[500px] group">
      <div 
        className="w-[100%]"
        onClick={() => { workId && onToggleClick?.(workId)}}
      >
        <div className="w-[100%]  rounded-2xl overflow-hidden cursor-pointer relative" >
            <img src={photo} className="overflow-hidden transition-transform duration-1000 block object-cover w-[100%] h-[100%]  group-hover:scale-150"/>
            <div className="absolute top-0 left-0 bg-[#808080] w-full h-full opacity-0 transition-opacity duration-1000 z-40 group-hover:opacity-70" />
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[28px] font-light opacity-0 z-40 transition-opacity duration-1000 group-hover:opacity-100">VIEW PROJECT</div>
        </div>
      </div>
    </div>
  </>
}
type listProps = {
  entryWork: (id:string) => void
}
const WorkList:React.FC<listProps> = ({
  entryWork
}) => {

  return <>
    <div className="flex flex-col">
      <ParallaxImage speed={4} className="self-center translate-x-[2vh] lg:translate-x-[50px]">
        <WorkItem 
          photo = {bgImage2}
          workId="work2"
          onToggleClick={entryWork}
        /> 
      </ParallaxImage>
      <ParallaxImage speed={-5} className="self-start translate-y-[10vh] lg:translate-x-[5vh] lg:translate-y-[22vh] scale-[130%]">
        <WorkItem
          photo = {bgImage1}
          workId="work1"
          onToggleClick={entryWork}
        /> 
      </ParallaxImage>
      <ParallaxImage speed={4} className="self-end -translate-x-[1vh] translate-y-[10vh] lg:-translate-x-[10vh] lg:translate-y-[10vh]">
        <h1 className="text-[60px] font-bold text-center lg:text-[120px]">ABOUT US</h1>
        <p className="text-[12px] leading-[18px] w-[60%] text-center mx-auto lg:text-[18px] lg:leading-[32px]">我是一名從事平面設計的Freelancer<br></br>近年來開始做網頁設計，UIUX，各種跟Design有關的事物<br></br>大學期間是念經濟系所，所以目前對區塊鏈也有興趣，持續研究中</p>
      </ParallaxImage>
      <ParallaxImage speed={-6} className="self-start translate-x-[1vh] translate-y-[35vh] scale-125 lg:translate-x-[20vh] lg:translate-y-[20vh]">
        <WorkItem
          photo = {bgImage6}
          workId="work6"
          onToggleClick={entryWork}
        /> 
      </ParallaxImage>
      
      <ParallaxImage speed={5} className="self-end -translate-x-[1vh] translate-y-[8vh] scale-125 lg:-translate-x-[15vh] lg:translate-y-[15vh]">
        <WorkItem
          photo = {bgImage11}
          workId="work11"
          onToggleClick={entryWork}
        /> 
      </ParallaxImage>
      <ParallaxImage speed={6} className="self-center translate-y-[10vh] scale-125 lg:translate-y-[30vh]">
        <WorkItem
          photo = {bgImage10}
          workId="work10"
          onToggleClick={entryWork}
        /> 
      </ParallaxImage>
    </div>
  </>
}

export default WorkList

