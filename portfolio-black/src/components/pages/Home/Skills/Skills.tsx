"use client";
import Image from "next/image";
import { useState } from "react";
import { SkillsData } from "@/@types/Skills";
import { testSkills } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  // const [skillsData, setskillsData] = useState<SkillsData>(testSkills);
  const [skillsData, setskillsData] = useState<SkillsData>(testSkills);

  // const [skillsData, setskillsData] = useState<SkillsData>({
  //   Fullstack: [],
  //   Devops: [],
  //   AI: [],
  // });

  // useEffect(() => {
  //   const getSkills = async () => {
  //     try {
  //       const response = await fetch(`/api/skills`, {
  //         next: { revalidate: 600 }, // 👈 ISR: revalidate every 10 minutes
  //       });
  //       const { skills } = await response.json();
  //       console.log(JSON.stringify(skills));

  //       setskillsData(skills);
  //     } catch (err) {
  //       console.log("Error : ", err);
  //       alert("An error occured");
  //     }
  //   };
  //   getSkills();
  // }, []);

  useGSAP(() => {
    // ____ animate heading ...
    const aboutHeading = document.querySelector(".skills-head");
    gsap.fromTo(
      aboutHeading,
      {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.3,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        // stagger: 0.8,
        scrollTrigger: {
          trigger: aboutHeading,
          start: "top center",
          end: "top 60%",
        },
      }
    );

    // ____ animate content ...
    const headLine = document.querySelector(".headline-skills");
    gsap.fromTo(
      headLine,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.002,
        scrollTrigger: {
          trigger: headLine,
          start: "top center",
          end: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section className="selection:bg-faun selection:text-black relative w-full min-h-screen py-20 bg-black text-white overflow-hidden font-firacode">
      <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
        <div className="h-[80px] overflow-hidden">
          <h1
            className="text-5xl md:text-7xl font-bold px-5 m-auto text-white-custom text-left w-full font-firacode
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px]
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px] skills-head"
          >
            Skillset
          </h1>
        </div>

        <div className="h-[30px] overflow-hidden">
          <p className=" font-firacode text-faun mt-2 mx-5 text-sm text-faun headline-skills">
            Crafted, Deployed & Automated
          </p>
        </div>
      </div>

      <br />

      <div className="flex flex-col flex-wrap gap-4 w-full justify-center items-center">
        {Object.keys(skillsData).map((skill, index) => (
          <div
            className="bg-black text-white
                    transition-all duration-300 ease-in-out
                    rounded-[30px] p-6 max-sm:p-4
                    font-firacode
                    w-[80vw] max-sm:w-[90vw]"
            key={index}
          >
            <h1 className="text-[20px] lg:text-[25px] max-sm:text-[18px] mb-5">
              {skill}
            </h1>
            <div className="flex flex-wrap gap-6 max-sm:gap-4">
              {skillsData[skill].map((skill, idx) => (
                <div
                  className="flex flex-row flex-nowrap justify-center items-center rounded-md w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] bg-gray-900 cursor-pointer hover:rotate-10 hover:scale-[1.2] transition-all duration-300 ease-in-out"
                  key={idx}
                >
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={20}
                    height={20}
                    quality={75}
                    className={`w-[35px] h-auto max-sm:w-[25px] object-cover`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="h-20"></div>
    </section>
  );
};

export default SkillsSection;
/*
                  <span className="text-sm max-sm:text-xs">{skill.name} </span>
*/
