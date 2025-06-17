'use client';
import MobileFram from "../layout/MobileFrame";
import Image from "next/image";

import { usePsyStore, useQuestionStore } from "@/app/store/store";

import X01Up from "@/../public/1.question/01Up.png";
import X01Down from "@/../public/1.question/01Down.png";
import X02Up from "@/../public/1.question/02Up.png";
import X02Down from "@/../public/1.question/02Down.png";
import X03Up from "@/../public/1.question/03Up.png";
import X03Down from "@/../public/1.question/03Down.png";
import X04Up from "@/../public/1.question/04Up.png";
import X04Down from "@/../public/1.question/04Down.png";
import X05Up from "@/../public/1.question/05Up.png";
import X05Down from "@/../public/1.question/05Down.png";
import Xtype from"@/../public/1.question/Qword.png";


export default function QuestionPage({questionIndex, nextStep}) {

  const questionData= useQuestionStore((state)=>state);
  const psyData= usePsyStore((state)=>state);

  const clickAnswer =function(option){
    nextStep();
    psyData.updateScore(psyData.score+ option.value);
    console.log(option.title,option.value);
  }
  const colorMap = [
    { text: "text-[#734DA5]",  
      qUp: X01Up,qDown: X01Down, bgColor:"bg-[#734DA5]", 
    },
    { text: "text-[#539669]",  
      qUp: X02Up,qDown: X02Down, bgColor:"bg-[#539669]", 
    },
    { text: "text-[#536E96]",  
      qUp: X03Up,qDown: X03Down, bgColor:"bg-[#536E96]", 
    },
    { text: "text-[#967053]",  
      qUp: X04Up,qDown: X04Down, bgColor:"bg-[#967053]", 
    },
    { text: "text-[#965353]",  
      qUp: X05Up,qDown: X05Down, bgColor:"bg-[#965353]", 
    },
  ];
  const currentColor = colorMap[questionIndex] || colorMap[0];


  return (
    <>
     <MobileFram className={currentColor.bgColor}>
      


      

      <div className="flex flex-col items-center gap-[15px] mb-20">
       <Image src={currentColor.qUp} className='absolute top-1 w-[250px]' alt='qUp' />

        <div className="flex justify-center items-center gap-2">
         <Image className="w-[33px]" src={Xtype} alt="dec"/>
        <div className={`text-white border-current border-2 rounded-sm w-[33px] h-[33px]
        flex justify-center items-center font-bold text-l`}>
         Q{questionIndex+1}
        </div>


      </div>

        <div className={`
            text-center text-xl font-bold mb-[18px] text-white`}>
          {questionData.questions[questionIndex+1].title}</div>
        
        {questionData.questions[questionIndex+1].options.map( (option, index) => {

              return (              
                  
                  <div
                     key={index}
                    onClick={() => clickAnswer(option)}
                    className={`bg-white shadow-[0px_4px_0px_1px_#C3C3C3] ${currentColor.text}
                      w-full rounded-full py-[10px] text-sm 
                      flex justify-center items-center font-medium 
                      cursor-pointer hover:translate-y-0.5 transition`}>
                        {option.title}
                      </div>        
              )

            })
          }
          <Image src={currentColor.qDown} className='w-[300px] absolute bottom-0 translate-y-2/5 pointer-events-none' alt='qDown' /> 
      </div>
      
     </MobileFram>
    </>
  );
}