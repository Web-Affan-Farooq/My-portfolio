import React from "react";
import Image from "next/image";
import { skills } from "@/constants";

const Skills = () => {
  return (
    <section className="text-white p-5 w-[85vw] m-auto flex flex-col flex-nowrap justify-start items-start">
      <div>
        <h1 className="text-[100px] text-black leading-[78px] font-semibold relative right-[10px] max-sm:text-[80px] max-sm:leading-[68px] max-md:text-[80px] max-md:leading-[68px] w-[70vw] max-lg:w-[80vw] max-md:w-full">
          My <span className="text-greenlight">Toolbox</span>
        </h1>
        <br />
        <h2 className="text-[24px] text-black w-[500px] max-sm:w-[400px] max-[500px]:w-[350px]">
          From <span className="text-greenlight">Frontend Magic</span> to
          <span className="text-greenlight">Backend Logic</span>, here’s what I
          bring.
        </h2>
      </div>
      <br />
      <br />
      <div className=" flex flex-row flex-wrap justify-center items-center gap-4">
        {skills.map((skill, idx) => (
          <Image
            src={skill.image}
            alt={skill.name}
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
