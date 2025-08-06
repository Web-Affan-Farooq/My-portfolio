"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SkillsData } from "@/@types/Skills";

const SkillsSection = () => {
  const [skillsData, setskillsData] = useState<SkillsData>(
    {
      'Fullstack': [],
      'Devops': [],
      'AI': [],
    }
  );

  useEffect(() => {
    const getSkills = async () => {
      try {
        const response = await axios.get("/api/skills");
        setskillsData(response.data.skills);
      } catch (err) {
        console.log("Error : ", err);
        alert("An error occured")
      }
    }
    getSkills();
  }, []);

  return (
    <section className="relative w-full min-h-screen py-20 bg-black text-white overflow-hidden font-firacode">
      <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold px-5 m-auto text-white-custom text-left w-full font-firacode 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px] 
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px]">Skillset</h1>
        <p className="text-gray-400 mt-2 mx-8 max-sm:mx-5 ">Crafted, Deployed & Automated</p>
      </div>

      <br />

      <div className='flex flex-col flex-wrap gap-6 w-full justify-center items-center'>

        {Object.keys(skillsData).map((skill, index) => (
          <div className='hover:bg-white-custom hover:text-black-custom bg-black text-white
                    transition-all duration-300 ease-in-out
                    rounded-[30px] p-6
                    font-firacode
                    w-[80vw] max-sm:w-[90vw]
                    shadow-lg shadow-gray-800' key={index}>
            <h1 className='text-[20px] lg:text-[25px] mb-5'>{skill}</h1>
            <div className='flex flex-wrap gap-6'>
              {skillsData[skill].map((skill) => (
                <div key={Math.random()} className="flex flex-row flex-nowrap justify-center items-center gap-[5px]">
                  <Image src={skill.logo.asset.url} alt={skill.name} width={20} height={20} className={`rounded-[20px] w-[35px] h-auto max-sm:w-[25px] object-cover shadow-xl shadow-white/20 `} />
                  <span className="text-sm max-sm:text-xs">{skill.name} </span>
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