'use client';


export default function CalenderPage({year, month, day, day2}) {

  return (
    <>
      <div className='relative bg-white text-[#4C37AC] p-6
       rounded-2xl flex items-center justify-center flex-col'>
        <div className="flex justify-between gap-3">
        <div className=''>{year}</div>
        <div className=''>乙巳年[蛇]四月初四</div>
        <div className=''>{month}月</div>
        </div>
        <div className='text-[240px]'>{day}</div>
        <div className='text-[80px]'>{day2}</div>
     </div>
    </>
  );
}
