"use client";

import { Menu, X } from "lucide-react";
import gsap from "gsap";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { useScrollDirection } from "@/components/hooks";
import { usePathname } from "next/navigation";
import { pagesNotAllowed } from "@/constants";

gsap.registerPlugin(useGSAP);
const Header = () => {
  const [navStatus, setnavStatus] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const showHeader = useScrollDirection();

  useGSAP(
    () => {
      if (showHeader) {
        gsap.to(".header", { y: 0, duration: 0.5, ease: "power2.out" });
      } else {
        gsap.to(".header", { y: -100, duration: 0.5, ease: "power2.out" });
      }
    },
    { dependencies: [showHeader] }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline();
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
    },
    { dependencies: [navStatus] }
  );

  const handleSideNav = () => {
    setnavStatus(!navStatus);
  };
  const pathname = usePathname();
  const hide = pagesNotAllowed.some((page) => pathname.startsWith(page));

  if (hide) {
    return <></>;
  } else {
    return (
      <header
        className="header text-white z-20 bg-black/4 backdrop-blur-md fixed md:w-[80vw] sm:w-[90vw] max-sm:w-[90vw] rounded-2xl px-[40px] py-[10px] top-[3%] lg:left-[10%] md:left-[10%] sm:left-[5%] max-sm:left-[5%]
    flex flex-row flex-wrap justify-between items-center 
    max-sm:items-start"
        ref={headerRef}
      >
        <div
          className="logo text-white font-semibold font-firacode
      text-[25px] 
      2xl:text-[35px]
      xl:text-[33px]
      lg:text-[31px] 
      "
        >
          Affan
        </div>

        <div
          className="flex flex-row flex-wrap justify-center items-center 
      2xl:gap-[80px]
      xl:gap-[60px]
      lg:gap-[45px]
      md:gap-[45px]
      sm:gap-[43px]
      max-sm:hidden font-firacode"
        >
          <a href={"/"} className="nav-options 2xl:text-[20px]">
            Home
          </a>
          <a href={"/projects"} className="nav-options 2xl:text-[20px]">
            Projects
          </a>
          <a href={"/contact"} className="nav-options 2xl:text-[20px]">
            Contact me
          </a>
        </div>

        <div
          className={clsx(
            `py-[100px] font-firacode flex-col absolute -top-5 -left-10 bg-black w-[100vw] h-screen flex-wrap justify-center items-center gap-[40px] transition-all duration-400 ease-in-out hidden max-sm:flex`,
            {
              "-translate-x-0": navStatus,
              "-translate-x-[100vw]": !navStatus,
            }
          )}
        >
          <X
            className="text-white sm:hidden block absolute right-10 top-9"
            onClick={handleSideNav}
          />
          <a
            href={"/"}
            className="nav-options-mobile"
            onClick={() => {
              setnavStatus(!navStatus);
            }}
          >
            Home
          </a>
          <a
            href={"/projects"}
            className="nav-options-mobile"
            onClick={() => {
              setnavStatus(!navStatus);
            }}
          >
            Projects
          </a>
          <a
            href={"/contact"}
            className="nav-options-mobile"
            onClick={() => {
              setnavStatus(!navStatus);
            }}
          >
            Contact me
          </a>
        </div>

        <Menu
          className="text-white sm:hidden block absolute right-4 top-4"
          onClick={handleSideNav}
        />

        {/* <div className='md:block hidden'></div> */}
      </header>
    );
  }
};

export default Header;
