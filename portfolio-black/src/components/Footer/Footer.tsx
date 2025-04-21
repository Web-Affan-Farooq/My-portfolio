"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const lineRef = useRef<HTMLDivElement | null>(null);
  
  useGSAP(() => {
    if(lineRef.current) {
      gsap.from(".line", {
        scaleX:0,
        duration:2,
        scrollTrigger : {
          trigger:".line",
          scroller:"body",
          start:"top 90%",
          end:"bottom 10%",
        },
        transformOrigin:"left center"
      })
    }

  });

  return (
    <>
    <div className='m-auto w-full md:w-[80vw] line border-2 border-solid border-white' ref={lineRef}></div>
      <footer className='
    flex flex-row flex-nowrap justify-evenly items-center'>
        <div className='text-right p-7'>
          <h1 className='text-white-custom
                    font-firacode font-bold 
                    2xl:text-[130px]
                    xl:text-[120px]
                    lg:text-[100px]
                    md:text-[77px]
                    sm:text-[50px]
                    max-sm:text-[40px]'>
            Muhammad
          </h1>
          <h1 className='text-white-custom
                    font-firacode font-bold 
                    2xl:text-[130px]
                    xl:text-[120px]
                    lg:text-[100px]
                    md:text-[77px]
                    sm:text-[50px]
                    max-sm:text-[40px]'>
            Affan
          </h1>

        </div>
        <div className='flex flex-col flex-nowrap justify-start items-start gap-3'>

          <Link href={"/"} className='text-white
            w-full px-[20px] py-[10px] text-left
            '>
            ...  /About me ...
          </Link>

          <Link href={"/contact"} className='text-white
            w-full px-[20px] py-[10px] text-left
            '>
            ...  /Contact me ...
          </Link>

          <Link href={"/projects"} className='text-white
            w-full px-[20px] py-[10px] text-left
            '>
            ...  /My Work ...
          </Link>

        </div>

      </footer>
      <div className='p-[30px]'>
        &copy; Muhammad Affan | All rights reserved
      </div>
    </>
  )
}

export default Footer