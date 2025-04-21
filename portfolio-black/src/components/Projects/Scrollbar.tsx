"use client";

import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import "./style.css";

const Scrollbar = ({images}:{images:string[]}) => {
    const scrollerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!scrollerRef.current) return;
  
      const lenis = new Lenis({
        wrapper: scrollerRef.current,
        orientation: "horizontal",
      });
  
      function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }, []);
    
  return (
<div
  className="horizontal-scroll-container overflow-x-auto whitespace-nowrap m-auto rounded-[20px] max-sm:w-full sm:w-[370px] p-[15px]"
  ref={scrollerRef}
>
  <div
    className="flex flex-row flex-nowrap flex-shrink-0 items-center gap-[20px]"
  >
    {images.map((link, idx) => (
      <div
        key={idx}
        className="w-[350px] h-[350px] flex-shrink-0 rounded-[20px] mr-[20px]"
      >
        <Image
          src={link}
          alt="project name"
          width={350}
          height={350}
          className="object-cover rounded-[20px]"
        />
      </div>
    ))}
  </div>
</div>


  )
}

export default Scrollbar