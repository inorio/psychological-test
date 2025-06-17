'use client';
import { DatePicker } from 'antd';
import CalenderPage from '@/component/CalenderPage'
import { useState } from 'react';


export default function TestUI() {
  
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是："+dateString)
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center item-center gap-3">
      <CalenderPage year="2025" month="五" day="01" day2="星期四"></CalenderPage>
      <CalenderPage year="2025" month="五" day="02" day2="星期五"></CalenderPage>
    </div>
  );
}
