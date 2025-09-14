"use client";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// ____must regiter the gsap plugin ...
gsap.registerPlugin(ScrollTrigger);

const MainAbout = () => {
  // useGSAP(() => {
  //   // ____ animate content ...
  //   const text = document.querySelectorAll(".content");
  //   gsap.fromTo(
  //     text,
  //     {
  //       y: 100,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.002,
  //       scrollTrigger: {
  //         trigger: text[0],
  //         start: "top center",
  //         end: "top 60%",
  //       },
  //     }
  //   );

  //   // ____ animate headline ...
  //   const headLine = document.querySelector(".head-line");
  //   gsap.fromTo(
  //     headLine,
  //     {
  //       y: 100,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.002,
  //       scrollTrigger: {
  //         trigger: headLine,
  //         start: "top center",
  //         end: "top 60%",
  //       },
  //     }
  //   );

  //   // ____ animate heading ...
  //   const aboutHeading = document.querySelector(".about-head");
  //   gsap.fromTo(
  //     aboutHeading,
  //     {
  //       opacity: 0,
  //       y: 100,
  //       duration: 0.8,
  //       stagger: 0.3,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.8,
  //       delay: 0.8,
  //       // stagger: 0.8,
  //       scrollTrigger: {
  //         trigger: aboutHeading,
  //         start: "top center",
  //         end: "top 60%",
  //       },
  //     }
  //   );
  // }, []);

  useGSAP(() => {
    // ____ animate content (paragraph letters) ...
    const text = document.querySelectorAll(".content");
    gsap.fromTo(
      text,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1,
        stagger: 0.03,
        scrollTrigger: {
          trigger: text[0],
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

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
          scrub: true,
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
    <>
      <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto flex flex-row flex-nowrap justify-between items-center ">
        <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
          <div className="h-[80px] overflow-hidden">
            <h1
              className="text-5xl md:text-7xl font-bold px-5 m-auto text-white-custom text-left w-full font-firacode 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px] 
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px] about-head"
            >
              About me
            </h1>
          </div>

          <div className="h-[30px] overflow-hidden">
            <p className="font-firacode text-faun mt-2 mx-5 text-sm text-faun head-line">
              Here is the little about me and what i bring to the table
            </p>
          </div>
        </div>
      </div>
      <br />

      <div className="flex flex-col gap-10 p-6 2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
        <p className="text-gray-400 max-sm:w-full font-firacode">
          {aboutContent.split("").map((char, idx) => (
            <span key={idx} className="content text-sm">
              {char}
            </span>
          ))}
        </p>

        <div className="flex flex-row flex-nowrap">
          <button className="bg-white-custom rounded-[40px] text-black lg:px-[100px] md:px-[80px] sm:px-[40px] max-sm:px-[30px] py-[13px]">
            <i>Download CV</i>
          </button>

          <button className="text-center flex justify-center items-center bg-white-custom rounded-full w-[50px] h-[50px]">
            <ArrowUp size={35} className="font-bold rotate-90" />
          </button>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <section className="w-full selection:bg-faun selection:text-black">
      <MainAbout />
      <div className="h-[100px]"></div>
    </section>
  );
};

export default About;
