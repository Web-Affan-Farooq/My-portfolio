"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SkillsData } from "@/@types/Skills";
// import { testSkills } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { skillsAction } from "@/actions";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const [skillsData, setskillsData] = useState<SkillsData>({});
  useEffect(() => {
    const getSkills = async () => {
      try {
        const skills = await skillsAction();
        setskillsData(skills);
      } catch (err) {
        console.log("Error : ", err);
        alert("An error occured");
      }
    };
    getSkills();
  }, []);

  // useGSAP(() => {
  //   // ____ animate heading ...
  //   const aboutHeading = document.querySelector(".skills-head");
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

  //   // ____ animate content ...
  //   const headLine = document.querySelector(".headline-skills");
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
  // }, []);
  // useGSAP(() => {
  //   // Animate heading
  //   const skillsHeading = document.querySelector(".skills-head");
  //   gsap.fromTo(
  //     skillsHeading,
  //     { opacity: 0, y: 80 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       ease: "power3.out",
  //       duration: 1.2,
  //       scrollTrigger: {
  //         trigger: skillsHeading,
  //         start: "top 85%",
  //         end: "top 60%",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   // Animate tagline
  //   const headLine = document.querySelector(".headline-skills");
  //   gsap.fromTo(
  //     headLine,
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       ease: "power3.out",
  //       duration: 1,
  //       delay: 0.2,
  //       scrollTrigger: {
  //         trigger: headLine,
  //         start: "top 85%",
  //         end: "top 60%",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   // Animate skill cards
  //   const skillCards = document.querySelectorAll(".skill-card");
  //   gsap.fromTo(
  //     skillCards,
  //     { opacity: 0, y: 60, scale: 0.9 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scale: 1,
  //       ease: "power3.out",
  //       duration: 0.6,
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: skillCards[0],
  //         start: "top 85%",
  //         end: "top 50%",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section className="2xl:w-[85vw] w-full">
      <div className="flex max-md:flex-col items-start justify-evenly items-center">
        <div>
          <h1 className="text-green-light w-full font-firacode font-bold text-5xl text-left max-sm:text-[30px] sm:text-[40px] md:text-[57px] lg:text-[80px] xl:text-[100px] 2xl:text-[110px] about-head">
            Skillset
          </h1>
          <p className="font-firacode text-faun text-left text-sm mt-2 mx-1 head-line">
            Here is the little about me and what i bring to the table
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>

      <br />

      <div className="flex flex-col gap-0 max-sm:gap-5 mx-auto">
        {Object.keys(skillsData).map((skill, index) => (
          <div
            className="bg-black text-white transition-all duration-300 ease-in-out rounded-[30px] p-6 max-sm:p-1 font-firacode w-[80vw] max-sm:w-[90vw]"
            key={index}
          >
            <div className="flex">
              <h1 className="bg-green-light/10 text-faun text-black px-[15px] rounded-full text-md mb-4">
                {skill}
              </h1>
            </div>
            <div className="flex flex-wrap gap-[5px] max-sm:gap-2">
              {skillsData[skill].map((skill, idx) => (
                <div
                  className="sm:py-[8px] sm:px-[20px] px-[10px] py-[5px] flex flex-row flex-nowrap justify-center items-center gap-[10px] bg-custom backdrop-blur-xl flex justify-center items-center rounded-md"
                  key={idx}
                >
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={20}
                    height={20}
                    quality={75}
                    className="w-[25px] h-auto max-sm:w-[20px] object-cover"
                  />
                  <p className="text-green-light text-xs">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
