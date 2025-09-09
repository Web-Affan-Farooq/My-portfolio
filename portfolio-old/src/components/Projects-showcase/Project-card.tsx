import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBook } from "@tabler/icons-react";

interface Project {
  project_name: string;
  project_link: string;
  project_description: string;
  project_image: string;
  technologies: string[];
}
const Project_card = ({
  project_name,
  project_link,
  project_description,
  project_image,
  technologies,
}: Project) => {
  return (
    <div className="p-5 w-[350px] rounded-xl bg-hue shadow-lg hover:shadow-gray-400 transition-all duration-200 ease-in-out cursor-pointer">
      <div className="flex flex-row flex-nowrap justify-end">
        <Link href={project_link}>
          <span className="w-10 h-10 bg-black text-center font-bold rounded-full flex flex-col justify-center align-middle -rotate-45">
            <i className="text-white fa-solid fa-arrow-right"></i>
          </span>
        </Link>
      </div>
      <Image
        src={project_image}
        alt="project"
        width={200}
        height={200}
        className="rounded-lg"
      />
      <br />
      <h1 className="text-2xl font-bold fonr-normal text-black">
        {project_name}
      </h1>
      <br />
      <p className="text-gray-400 text-sm break-all">{project_description}</p>
      <br />
      <div className="flex flex-row flex-nowrap gap-2">
        {technologies.map((technology: string, index: number) => {
          return (
            <Image
              src={technology}
              alt="project"
              width={15}
              height={15}
              key={index}
            />
          );
        })}
      </div>
      <br />
      <div className="flex flex-row flex-nowrap gap-[20px]">
        <button className="bg-white shadow-xs shadow-green flex flex-row flex-nowrap text-sm text-black gap-[10px] justify-center items-center px-2 py-0 rounded-sm">
          <span className="font-semibold">Docs</span>
          <IconBook size={18} className="stroke-gray-400" />
        </button>
        <button className="bg-white shadow-xs shadow-green flex flex-row flex-nowrap text-sm text-black gap-[10px] justify-center items-center px-2 py-1 rounded-sm">
          <span className="font-semibold">Github</span>
          <Image
            src={"/icons/github-gray.svg"}
            alt="Check on github"
            width={15}
            height={15}
            className="blend-mode- w-[15px] h-[15px]"
          />
        </button>
      </div>
    </div>
  );
};

export default Project_card;
