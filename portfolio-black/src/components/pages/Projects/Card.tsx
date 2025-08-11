"use client";

import { Globe } from "lucide-react";
import type { Project } from "@/@types/Projects";
import Link from "next/link";
import Image from "next/image";

const Project_card = ({ project }: { project: Project }) => {
  return (
    <div className="w-full sm:max-w-md mx-auto overflow-hidden rounded-xl shadow-md">
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

          <h1 className="mt-1 block text-lg leading-tight font-bold font-firacode text-[#e3cb8f]">
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
          <div className="flex flex-row flex-nowrap gap-[20px]">
            <Link href={project.project_github_link} className="bg-white w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex justify-center items-center rounded-full">
              <Image src={"/icons/github.svg"} alt="github link" width={30} height={30} className="rounded-full w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" />
            </Link>
            <Link href={project.project_link} className="bg-white w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex justify-center items-center rounded-full">
              {/* <Image src={"/icons/github.svg"} alt="github link" width={30} height={30} className="rounded-full w-[20px] h-[20px]"/> */}
              <Globe className="stroke-black rounded-full w-[15px] h-[15px] sm:w-[20px] sm:h-[20px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project_card

/*
    <div className="relative group md:h-[400px] sm:max-w-5xl w-full mx-auto shadow-lg rounded-2xl overflow-hidden flex flex-row flex-wrap items-center sm:gap-10 max-sm:gap-5 p-6 transition-all duration-300 hover:shadow-2xl max-md:flex-col max-md:items-start">
      <div className="relative w-[400px] h-[300px] max-sm:w-[300px] max-sm:h-[200px] overflow-hidden rounded-lg">
        <Image
          src={project.project_images[0]}
          alt={`${project.project_name} image`}
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-1 flex-col sm:gap-4 max-sm:gap-3">
        <h2 className="text-2xl font-semibold text-white max-sm:text-lg font-firacode">
          {project.project_name}
        </h2>

        <div>
          <Link href="/" passHref>
            <button
              type="button"
              className="flex items-center gap-2 bg-white text-black text-xs font-medium max-sm:px-4 max-sm:py-[4px] px-4 py-[5px] rounded-full transition"
            >
              <i>Explore</i>
              <ArrowUp className="rotate-90 transition-transform duration-300 group-hover:translate-x-1 max-sm:size-5 size-7" />
            </button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.project_tags.map((tag, idx) => (
            <Image
              key={idx}
              src={tag.project_tech_image}
              alt={tag.project_tech_text}
              width={25}
              height={25}
              className="sm:w-[25px] sm:h-[25px] max-sm:w-[23px] max-sm:h-[23px]"
            />
          ))}
        </div>

        <p className="text-gray-600 text-sm">
          {project.project_description}
        </p>
      </div>
    </div>
 */