"use client";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

// ____must regiter the gsap plugin ...
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
        },
      }
    );
  }, []);

  const aboutContent = `I'm Muhammad Affan, a full-stack developer and data science enthusiast based in Pakistan. I specialize in building scalable, production-ready solutions tailored to diverse business needs. Whether you're a freelance client seeking a solo contributor, a startup needing rapid MVP development, a remote team requiring collaborative engineering, or an enterprise demanding robust architecture—I deliver excellence. My expertise spans data science pipelines, cloud infrastructure, modern frontend frameworks, and backend systems design. I combine clean coding principles with pragmatic problem-solving to transform complex requirements into elegant, maintainable solutions that drive real business impact.`;

  return (
    <section className="2xl:w-[85vw] sm:p-[18px]">
      <div className="px-[50px] max-md:px-[20px] max-sm:px-[0px] flex max-md:flex-col items-start justify-evenly items-center">
        <div>
          <h1 className="about-head text-green-light w-full font-firacode font-bold text-5xl text-left max-sm:text-[30px] sm:text-[40px] md:text-[57px] lg:text-[80px] xl:text-[100px] 2xl:text-[110px] about-head">
            About me
          </h1>
          <p className="font-firacode text-faun text-left text-sm mt-2 mx-1">
            Here is the little about me and what i bring to the table
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>

      <br />

      <div className="flex flex-col gap-10 mx-auto px-[50px] max-md:px-[20px] max-sm:px-[0px]">
        <p className="text-gray-400 max-sm:text-sm max-sm:w-full font-firacode">
          {aboutContent.split("").map((char, idx) => (
            <span key={idx} className="content text-sm">
              {char}
            </span>
          ))}
        </p>

        <Link href={"/projects"} className="flex items-center gap-2">
          <button className="bg-custom rounded-[40px] lg:px-[100px] md:px-[80px] sm:px-[50px] sm:py-[13px] max-sm:px-[30px] max-sm:py-[8px]">
            <i>Download CV</i>
          </button>
          <button className="text-center flex justify-center items-center bg-green-light rounded-full sm:w-[40px] sm:h-[40px] max-sm:w-[30px] max-sm:h-[30px]">
            <ArrowUp className="md:font-bold rotate-90 text-black sm:text-xl max-sm:size-4" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;
