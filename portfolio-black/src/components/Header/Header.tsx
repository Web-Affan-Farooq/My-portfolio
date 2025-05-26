"use client";
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { IoMenuSharp } from "react-icons/io5";
import { HiXMark } from "react-icons/hi2";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import useScrollDirection from '@/hooks/UseScrollDirection';

gsap.registerPlugin(useGSAP)
const Header = () => {
  const [navStatus, setnavStatus] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const showHeader = useScrollDirection();

  useGSAP(() => {
    if (showHeader) {
      gsap.to(".header", { y: 0, duration: 0.5, ease: "power2.out" });
    } else {
      gsap.to(".header", { y: -100, duration: 0.5, ease: "power2.out" });
    }
  }, { dependencies: [showHeader] });


  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(".nav-options", {
      y: -30,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });

    if (navStatus && window.innerWidth < 640) {
      gsap.from(".nav-options-mobile", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }

  }, { dependencies: [navStatus] });

  const handleSideNav = () => {
    setnavStatus(!navStatus)
  }

  return (
    <header className='header z-20 bg-black/20 backdrop-blur-lg fixed w-full px-[40px] py-[20px]
    2xl:py-[40px]
    flex flex-row flex-wrap justify-between items-center 
    max-sm:items-start' ref={headerRef}>
      <div className='logo text-white font-bold font-firacode
      text-[25px] 
      2xl:text-[35px]
      xl:text-[33px]
      lg:text-[31px]
      '>
        Affan
      </div>

      <div className='flex flex-row flex-wrap justify-center items-center 
      2xl:gap-[80px]
      xl:gap-[60px]
      lg:gap-[45px]
      md:gap-[45px]
      sm:gap-[43px]
      max-sm:hidden'>
        <Link href={"/"} className='nav-options 2xl:text-[20px]'>Home</Link>
        <Link href={"/projects"} className='nav-options 2xl:text-[20px]'>Projects</Link>
        <Link href={"/"} className='nav-options 2xl:text-[20px]'>Articles</Link>
        <Link href={"/"} className='nav-options 2xl:text-[20px]'>Contact</Link>
      </div>

      <div className={clsx(`py-[100px] flex-col absolute top-0 left-0 bg-black w-[80vw] h-screen flex-wrap justify-center items-center gap-[40px] transition-all duration-400 ease-in-out hidden max-sm:flex`, {
        "-translate-x-0": navStatus,
        "-translate-x-[100vw]": !navStatus
      })}>
        <Link href={"/"} className='nav-options-mobile' onClick={() => {
          setnavStatus(!navStatus);
        }}>Home</Link>
        <Link href={"/projects"} className='nav-options-mobile' onClick={() => {
          setnavStatus(!navStatus);
        }}>Projects</Link>
        <Link href={"/"} className='nav-options-mobile' onClick={() => {
          setnavStatus(!navStatus);
        }}>Articles</Link>
        <Link href={"/"} className='nav-options-mobile' onClick={() => {
          setnavStatus(!navStatus);
        }}>Contact</Link>
      </div>

      {navStatus ? <HiXMark size={30} className='text-white sm:hidden block' onClick={handleSideNav} /> : <IoMenuSharp size={30} className='text-white sm:hidden block' onClick={handleSideNav} />}

      {/* <div className='md:block hidden'></div> */}
    </header>
  )
}

export default Header;