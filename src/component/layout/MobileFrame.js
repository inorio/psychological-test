'use client';

export default function MobileFram({ children, className = "" }) {
  return (
    <div className={`w-[33%] min-w-[380px] max-w-[420px] h-[85%] p-[52px] rounded-2xl 
    flex justify-center items-center relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}