"use client";
import { useGSAP } from "@gsap/react";
import { ArrowUp, Briefcase, Rocket, Users, Code } from "lucide-react";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const HeroText = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".banner-head",
      { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
      }
    );

    gsap.fromTo(
      ".banner-mobile",
      { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 }
    );

    gsap.fromTo(
      ".cta-button",
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
      }
    );
  });

  const ctaButtons = [
    { label: "Freelance", icon: <Briefcase size={16} />, href: "/contact?type=freelance" },
    { label: "Remote Roles", icon: <Code size={16} />, href: "/contact?type=remote" },
    { label: "Startups", icon: <Rocket size={16} />, href: "/contact?type=startup" },
    { label: "Corporate", icon: <Users size={16} />, href: "/contact?type=corporate" },
  ];

  return (
    <section className="w-full 2xl:w-[85vw] xl:w-full m-auto pt-[20px]">
      {/* Desktop View */}
      <div className="max-md:hidden">
        <div className="banner-head flex justify-evenly items-center overflow-hidden 2xl:h-[170px] xl:h-[150px]">
          <h1 className="text-green-light font-firacode font-bold max-sm:text-[40px] sm:text-[50px] md:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
            Full-stack
          </h1>

          <Link href={"/projects"} className="flex items-center gap-2">
            <button className="bg-custom rounded-[40px] lg:px-[100px] md:px-[80px] px-[50px] py-[13px] hover:bg-faun/20 transition-all duration-300">
              <i>Projects</i>
            </button>
            <button className="text-center flex justify-center items-center bg-green-light rounded-full w-[50px] h-[50px] hover:scale-110 transition-transform duration-300">
              <ArrowUp size={35} className="font-bold rotate-90 text-black" />
            </button>
          </Link>
        </div>

        <div className="banner-head flex justify-evenly lg:justify-evenly items-center overflow-hidden xl:h-[160px] 2xl:h-[170px]">
          <div className="md:w-[300px] lg:w-[400px] text-left">
            <p className="text-[15px] text-gray-400 tracking-[0.5px]">
              Data Science • Full-Stack Development • Backend Engineering
            </p>
            <p className="text-[13px] text-gray-500 tracking-[0.5px] mt-3">
              Trusted by <i>freelance clients</i>, <i>remote teams</i>, <i>startups</i>, and <i>enterprises</i>
            </p>
          </div>

          <h1 className="text-green-light font-firacode font-bold max-sm:text-[40px] sm:text-[50px] md:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
            Developer
          </h1>
        </div>

        {/* CTA Buttons for Different Audiences */}
        <div className="banner-head flex justify-center items-center gap-4 mt-8 flex-wrap">
          {ctaButtons.map((btn) => (
            <Link key={btn.label} href={btn.href}>
              <button className="cta-button flex items-center gap-2 px-4 py-2 bg-faun/10 hover:bg-faun/20 border border-faun/30 rounded-lg text-faun transition-all duration-300 text-sm font-firacode group">
                {btn.icon}
                <span className="group-hover:text-green-light transition-colors">{btn.label}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col justify-center items-start sm:p-10 max-sm:p-0 gap-5 md:hidden">
        <div className="w-full">
          <div className="max-[400px]:h-[70px] h-[100px] overflow-hidden">
            <h1 className="banner-mobile text-green-light font-firacode font-bold text-[70px] max-[500px]:text-[55px] max-[400px]:text-[45px]">
              Full-stack
            </h1>
          </div>
          <div className="max-[400px]:h-[70px] h-[100px] overflow-hidden w-full">
            <h1 className="banner-mobile ml-16 max-[400px]:ml-0 text-green-light font-firacode font-bold text-[70px] max-[500px]:text-[55px] max-[400px]:text-[45px]">
              Developer
            </h1>
          </div>
        </div>

        <div className="overflow-hidden text-[20px] sm:w-[400px] max-sm:w-full text-left">
          <p className="banner-mobile text-[13px] text-gray-400 tracking-[0.5px]">
            Data Science • Full-Stack • Backend
          </p>
          <p className="banner-mobile text-[12px] text-gray-500 tracking-[0.5px] mt-2">
            Trusted by freelance clients, remote teams, startups, and enterprises
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div className="banner-mobile flex flex-wrap gap-2 justify-start">
            {ctaButtons.map((btn) => (
              <Link key={btn.label} href={btn.href}>
                <button className="cta-button flex items-center gap-1 px-3 py-1.5 bg-faun/10 hover:bg-faun/20 border border-faun/30 rounded-md text-faun transition-all duration-300 text-xs font-firacode">
                  {btn.icon}
                  <span>{btn.label}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="h-[60px] overflow-hidden">
          <Link href={"/projects"} className="flex items-center gap-2">
            <button className="bg-custom rounded-[40px] lg:px-[100px] md:px-[80px] sm:px-[50px] sm:py-[13px] max-sm:px-[30px] max-sm:py-[8px] hover:bg-faun/20 transition-all duration-300">
              <i>Projects</i>
            </button>
            <button className="text-center flex justify-center items-center bg-green-light rounded-full sm:w-[40px] sm:h-[40px] max-sm:w-[30px] max-sm:h-[30px] hover:scale-110 transition-transform duration-300">
              <ArrowUp className="md:font-bold rotate-90 text-black sm:text-xl max-sm:size-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroText;
