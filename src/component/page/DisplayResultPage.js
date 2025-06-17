'use client';
import Image from "next/image";
import MobileFram from "../layout/MobileFrame";
import circle1 from "@/../public/0.start/circle1.png";
import resulcro1 from "@/../public/3.result/resultcro.png";
import XdisplayResult from "@/../public/2.display/displayResult.png";
import XdisplayTitle from "@/../public/2.display/displayTitle.png";


export default function DisplayResultPage({nextStep}) {

  return (
    <>
     <MobileFram>
      <div className="absolute inset-0 bg-cover bg-center z-0"
          style={
            { backgroundImage: `url(${XdisplayResult.src})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center' }}/>

    
    
      
        <Image className="absolute top-0 w-[250px] mt-20" src={XdisplayTitle} alt='displatTitle'/>
        
        <div className="flex flex-col items-center gap-[15px]">
          <Image src={resulcro1} className='w-[88px]' alt='qUp' />
          
          <div className="text-[#B65A0F] font-[500] text-center text-[24px]">
              顯示我的失控可頌
          </div>
          <div
              className={`bg-[#662E08] w-full rounded-full text-white
                py-[10px] text-sm flex justify-center items-center font-medium mt-[170px]
                shadow-[0px_4px_0px_1px_#290B00] cursor-pointer hover:translate-y-0.5 transition z-1`}
              onClick={nextStep}
                > 查看結果</div>
        </div>

     </MobileFram>
    </>
  );
}
