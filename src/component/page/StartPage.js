'use client';
import MobileFram from "../layout/MobileFrame";
import Image from "next/image";

import XstartUp from "@/../public/0.start/starUp.png";
import XstartDown from "@/../public/0.start/startDown.png";
import XstartTitle from "@/../public/0.start/startTitle.png";
import XstartBin from "@/../public/0.start/startBin.png";


export default function StartPage({nextStep}) {

  return (
    <MobileFram className="bg-[#A0763A]">
     <div className="flex justify-center items-center flex-col gap-[30px]">
      <Image className="absolute top-1 w-[250px]" src={XstartUp} alt='startUp'/>
      <Image className="mt-7" src={XstartTitle} alt='title'/>
      <div className="text-[#EFEFEF] font-[500] text-center text-[14px] leading-loose">
      你總覺得自己不太適合這個時代？
      科技飛快、節奏壓迫、資訊洪流滾滾而來……
      在這樣的世界裡，有時你會懷疑：「是不是我太慢？太敏感？還是，根本走錯了時代？」
      你那份細膩、獨特、反應世界的方式，或許更適合某個早已被時間遺忘的年代。
      來測測看吧，你的靈魂其實最適合哪個 「被時間遺忘的職業」？
      </div>
      
      <div onClick={nextStep} className="cursor-pointer z-10">
      <Image className="w-[130px] cursor-pointer hover:translate-y-0.5 transition" src={XstartBin} alt="startBtn"/></div>
      <Image className="w-[300px] absolute bottom-0 translate-y-2/5 pointer-events-none" src={XstartDown} alt='circleLmg'/>
     </div>
     </MobileFram>
  );
}
