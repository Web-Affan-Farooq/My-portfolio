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

  return (
    <section className="2xl:w-[80vw]">
      <div className="px-[10px] max-md:px-[20px] max-sm:px-[0px] flex max-md:flex-col items-start justify-evenly items-center border border-white">
        <div>
          <h1 className="text-green-light w-full font-firacode font-bold text-4xl text-left max-sm:text-[20px] sm:text-[30px] md:text-[47px] lg:text-[70px] xl:text-[90px] 2xl:text-[100px] border border-white">
            Skillset
          </h1>
          <p className="font-firacode text-faun text-left text-sm mt-2 mx-1 border border-white">
            Crafted | Automated | Deployed
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>

      <br />

      <div className="flex flex-col gap-0 max-sm:gap-5 mx-auto border border-white">
        {Object.keys(skillsData).map((skill, index) => (
          <div
            className="bg-black text-white transition-all duration-300 ease-in-out rounded-[30px] p-6 max-sm:p-1 font-firacode w-[80vw] max-sm:w-[90vw]"
            key={index}
          >
            <div className="flex">
              <h1 className="text-faun text-black px-[15px] rounded-full text-md mb-4">
                {skill}
              </h1>
            </div>
            <div className="flex flex-wrap gap-[5px] max-sm:gap-2">
              {skillsData[skill].map((skill, idx) => (
                <div
                  className="sm:py-[8px] sm:px-[20px] px-[10px] py-[5px] flex flex-row flex-nowrap justify-center items-center gap-[10px] bg-custom flex justify-center items-center rounded-md"
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
