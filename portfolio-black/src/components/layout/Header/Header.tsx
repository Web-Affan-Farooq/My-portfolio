"use client";

import { X } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import clsx from "clsx";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { useScrollDirection } from "@/components/hooks";
import { usePathname } from "next/navigation";
import { pagesNotAllowed } from "@/constants";
import Link from "next/link";

const GithubProfile = () => {
  return (
    <Link href={"https://github.com/Web-Affan-Farooq"}>
      <div className="z-10 cursor-pointer text-white p-[6px] rounded-md bg-gray-400/20">
        <Image
          src={"/icons/github.svg"}
          alt="Muhammad affan"
          width={15}
          height={15}
          className="w-[15px] h-[15px] transition-all duration-1000 ease"
        />
      </div>
    </Link>
  );
};

const LinkedinProfile = () => {
  return (
    <Link href={"www.linkedin.com/in/muhammad-affan-139a3a290"}>
      <div className="z-10 cursor-pointer text-white p-[6px] rounded-md bg-gray-400/20">
        <Image
          src={"/icons/linkedin.svg"}
          alt="Muhammad affan"
          width={15}
          height={15}
          className="w-[15px] h-[15px] transition-all duration-1000 ease"
        />
      </div>
    </Link>
  );
};
const XProfile = () => {
  return (
    <Link href={"www.linkedin.com/in/muhammad-affan-139a3a290"}>
      <div className="z-10 cursor-pointer text-white p-[6px] rounded-md bg-gray-400/20">
        <Image
          src={"/icons/xcom.svg"}
          alt="Muhammad affan"
          width={15}
          height={15}
          className="w-[15px] h-[15px] transition-all duration-1000 ease"
        />
      </div>
    </Link>
  );
};

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

      if (navStatus && window.innerWidth < 768) {
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
        className="selection:bg-green-light selection:text-black text-green-light header z-20 bg-black/4 backdrop-blur-md fixed md:w-[90vw] max-md:w-[90vw] rounded-2xl px-[40px] py-[10px] top-[3%] lg:left-[5%] md:left-[5%] max-md:left-[5%]
    flex flex-row flex-wrap justify-between items-center
    max-md:items-start"
        ref={headerRef}
      >
        <div
          className="flex flex-row flex-nowrap justify-center items-center gap-[10px] px-[10px] md:px-0 text-green-light font-semibold font-firacode
      text-[25px] 
      2xl:text-[35px]
      xl:text-[33px]
      lg:text-[31px]"
        >
          {/* <div className="w-[35px] h-[35px] rounded-full overflow-hidden relative bottom-[3px]">
            <Image
              src={"/images/avatar.jpg"}
              alt="affan"
              width={35}
              height={35}
              className="object-cover w-full h-full"
            />
          </div> */}
          <span>Affan</span>
        </div>

        <div
          className="text-faun flex flex-row flex-wrap justify-center items-center 
      md:gap-[43px]
      max-md:hidden font-firacode"
        >
          <Link href={"/"} className="nav-options 2xl:text-[20px]">
            Home
          </Link>
          <Link href={"/projects"} className="nav-options 2xl:text-[20px]">
            Projects
          </Link>
          <Link href={"/contact"} className="nav-options 2xl:text-[20px]">
            Contact me
          </Link>
          <div className="flex flex-row flex-nowrap gap-[10px]">
            <GithubProfile />
            <LinkedinProfile />
            <XProfile />
          </div>
        </div>

        <div
          className={clsx(
            `py-[100px] font-firacode flex-col absolute -top-5 -left-10 bg-black w-[100vw] h-screen flex-wrap justify-center items-center gap-[40px] transition-all duration-400 ease-in-out hidden max-md:flex`,
            {
              "-translate-x-0": navStatus,
              "-translate-x-[100vw]": !navStatus,
            }
          )}
        >
          <Link
            href={"/"}
            className="nav-options-mobile"
            onClick={() => {
              setnavStatus(!navStatus);
            }}
          >
            Home
          </Link>
          <Link
            href={"/projects"}
            className="nav-options-mobile"
            onClick={() => {
              setnavStatus(!navStatus);
            }}
          >
            Projects
          </Link>
          <Link
            href={"/contact"}
            className="nav-options-mobile"
            onClick={() => {
              setnavStatus(!navStatus);
            }}
          >
            Contact me
          </Link>
        </div>

        <div
          className="cursor-pointer text-green-light md:hidden block absolute left-[15px] top-[13px] p-[6px] rounded-md bg-gray-400/20"
          onClick={handleSideNav}
        >
          {navStatus ? (
            <X
              className="transition-all duration-1000 ease text-green-light w-[18px] h-[18px]"
              onClick={handleSideNav}
            />
          ) : (
            <Image
              src={"/icons/menu.svg"}
              alt="menu"
              width={18}
              height={18}
              className="w-[18px] h-[18px] transition-all duration-1000 ease"
            />
          )}
        </div>

        <div className="flex flex-row flex-nowrap gap-[10px] md:hidden block pt-[5px]">
          <GithubProfile />
          <LinkedinProfile />
        </div>
      </header>
    );
  }
};

export default Header;
