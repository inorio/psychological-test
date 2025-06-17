'use client';
import Image from "next/image";
import MobileFram from "../layout/MobileFrame";
import { usePsyStore } from "@/app/store/store";
import Xresult1 from "@/../public/3.result/result01.png";
import Xresult2 from "@/../public/3.result/result02.png";
import Xresult3 from "@/../public/3.result/result03.png";
import Xresult4 from "@/../public/3.result/result04.png";
import XstartUp from "@/../public/0.start/starUp.png";
import XstartDown from "@/../public/0.start/startDown.png";



export default function ResultPage() {

  const psyState = usePsyStore( (state)=>state);
  
  const playAgain = function(){
    window.location.reload();
  }
//1234 //5678 //9101112 //131415
  return (
    <>
     <MobileFram className="bg-[#A0763A]"> 
     <div className="flex justify-center items-center flex-col gap-[30px]">
          <Image className="absolute top-1 w-[250px]" src={XstartUp} alt='startUp'/>
      
        
          <div className="flex flex-col items-center ">
            {
              psyState.score < 8 &&<>
              <Image className="w-[130px]" src={Xresult1} alt="result1"/>
              <div className="text-[#EFEFEF] font-[500] text-center text-[14px] leading-normal">
              你是安靜的觀察者，對世界保持一種溫柔的距離。
              你靜靜觀察，擁有耐心與安定感。你適合慢節奏、意義深遠的溝通方式，一字一句都比聲量重要。
              </div>            
              </>     
              
            }
            {
              (psyState.score >=8 && psyState.score < 11) &&<>
              <Image className="w-[130px]" src={Xresult2} alt="result2"/>
              <div className="text-[#EFEFEF] font-[500] text-center text-[14px] leading-normal">
              你是記憶與情感的守護者，生活在時光的縫隙裡。
              你細膩、念舊、有一點藝術家的執拗。你對於「過去的質感」有獨特的鑑賞力，像是在時光裡修補溫柔。
              </div>            
              </> 
              
              
            }
            {
              (psyState.score >=11 && psyState.score < 14) &&<>
              <Image className="w-[130px]" src={Xresult3} alt="result3"/>
              <div className="text-[#EFEFEF] font-[500] text-center text-[14px] leading-normal">
              你是資訊與秩序的操控者，擁有絕佳的分析能力與冷靜判斷。
              你擅長在混亂中抓住關鍵，講究效率，冷靜分析，是舊時代裡連接世界的傳訊角色。
              </div>            
              </>
            }
            {
              psyState.score >= 14 &&<>
              <Image className="w-[130px]" src={Xresult4} alt="result4"/>
              <div className="text-[#EFEFEF] font-[500] text-center text-[14px] leading-normal">
              你是城市的魔法師，憑直覺與觀察捕捉人心。  
              你有神祕感、觀察力敏銳、自由奔放，總能用一句話戳中人心，是現代都市中的異色預言家。
              </div>            
              </>
            }

              <div
                  className={`bg-[#8D4509] rounded-full text-white w-[120px] z-[1]
                    py-[5px] text-[15px] flex justify-center items-center font-medium mt-[20px]
                    shadow-[0px_4px_0px_1px_#672F0A] cursor-pointer hover:translate-y-0.5 transition`}
                  onClick={playAgain}
                    > 再玩一次</div>


          </div>
      </div>
      <Image className="w-[300px] absolute bottom-0 translate-y-2/5 pointer-events-none" src={XstartDown} alt='circleLmg'/>
     </MobileFram>
    </>
  );
}