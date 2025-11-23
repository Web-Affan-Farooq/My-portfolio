"use client";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

// ____must regiter the gsap plugin ...
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // ____ animate headline (small text) ...
    const headLine = document.querySelector(".head-line");
    gsap.fromTo(
      headLine,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: headLine,
          start: "top 85%",
          end: "top 55%",
          scrub: true,
        },
      }
    );

    // ____ animate heading (big "About me") ...
    const aboutHeading = document.querySelector(".about-head");
    gsap.fromTo(
      aboutHeading,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: aboutHeading,
          start: "top 90%",
          end: "top 60%",
        },
      }
    );
  }, []);

  const aboutContent = ` I'm Muhammad Affan, a full-stack developer based in Pakistan with a passion
            for building clean, scalable, and efficient software solutions. I
            have a solid understanding of software design and architecture, and I love turning
            complex problems into elegant code. With strong capabilities, I am
            specializing in creating seamless user experiences and robust
            backend logic. I'm always exploring new technologies and sharpening
            my problem-solving abilities.`;

  return (
    <section className="w-[85vw]">
      <div className=" max-md:px-[20px] max-sm:px-[0px] flex max-md:flex-col items-start justify-evenly items-center border border-white">
        <div>
          <h1 className="text-green-light w-full font-firacode font-bold text-4xl text-left max-sm:text-[20px] sm:text-[30px] md:text-[47px] lg:text-[70px] xl:text-[90px] 2xl:text-[100px]">
            About me
          </h1>
          <p className="font-firacode text-faun text-left text-sm mt-2 mx-1">
            Crafted | Automated | Deployed
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>

      <br />

      <div className="flex flex-col gap-0 max-sm:gap-5 mx-auto font-firacode text-sm">
        {aboutContent}
      </div>
    </section>
  );
};

export default About;
