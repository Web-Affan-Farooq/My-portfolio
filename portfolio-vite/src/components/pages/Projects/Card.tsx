"use client";

import { Globe, BookOpen } from "lucide-react";
import type { Project } from "@/@types/Projects";
// _____ Components ...
import Link from "next/link";
import Image from "next/image";

const Project_card = ({ project }: { project: Project }) => {
  return (
    <div className="w-full sm:max-w-md mx-auto overflow-hidden rounded-xl shadow-md selection:bg-faun selection:text-black">
      <div className="flex flex-col gap-[20px]">
        <div className="w-full h-[200px] rounded-xl">
          <Image
            className="h-full w-full object-cover object-center"
            src={project.project_images[0]}
            alt="Modern building architecture"
            width={300}
            height={300}
          />
        </div>
        <div className="px-4 flex flex-col gap-[5px]">
          <div className="text-xs font-bold tracking-wide text-gray-700 uppercase">
            {project.project_category}
          </div>
          <h1 className="mt-1 block text-lg leading-tight font-normal font-firacode text-[#e3cb8f]">
            {project.project_name}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.project_tags.map((tag, idx) => (
              <Image
                key={idx}
                src={tag.project_tech_image}
                alt={tag.project_tech_text}
                width={25}
                height={25}
                className="sm:w-[23px] sm:h-[23px] max-sm:w-[23px] max-sm:h-[23px]"
              />
            ))}
          </div>
          <p className="mt-2 text-gray-500 text-sm font-firacode">
            {project.project_description}
          </p>
          <div className="flex justify-end flex-row flex-nowrap gap-[10px] pt-3">
            <Link href={`/projects/${project._id}`}>
              <div className="z-10 cursor-pointer text-white p-[6px] rounded-md bg-gray-400/20 hover:bg-gray-700 transition-all duration-300 ease-in-out">
                <BookOpen className="w-[15px] h-[15px] stroke-faun rounded-full w-[15px] h-[15px]" />
              </div>
            </Link>

            <Link href={project.project_github_link}>
              <div className="z-10 cursor-pointer text-white p-[6px] rounded-md bg-gray-400/20 hover:bg-gray-700 transition-all duration-300 ease-in-out">
                <Image
                  src={"/icons/github.svg"}
                  alt="Muhammad affan"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px] transition-all duration-1000 ease"
                />
              </div>
            </Link>

            <Link href={project.project_link}>
              <div className="z-10 cursor-pointer text-white p-[6px] rounded-md bg-gray-400/20 hover:bg-gray-700 transition-all duration-300 ease-in-out">
                <Globe className="w-[15px] h-[15px] stroke-faun rounded-full w-[15px] h-[15px]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project_card;
