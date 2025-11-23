"use client";

import { useProjects } from "@/stores/projects";
import Image from "next/image";
import Link from "next/link";
import { Globe, BookOpen } from "lucide-react";

const IconButton = ({ children }: { children: React.ReactNode }) => (
  <div className="z-10 cursor-pointer text-white p-[6px] rounded-md bg-gray-400/20 transition-all duration-300 ease-in-out">
    {children}
  </div>
);

const Links = ({
  id,
  github,
  live,
}: {
  id: string;
  github: string;
  live: string;
}) => {
  return (
    <div className="flex justify-end gap-2 pt-3">
      <Link href={`/projects/${id}`}>
        <IconButton>
          <BookOpen className="w-[15px] h-[15px] stroke-green-light" />
        </IconButton>
      </Link>

      <Link href={github} target="_blank">
        <IconButton>
          <Image
            src="/icons/github.svg"
            alt="GitHub"
            width={15}
            height={15}
            className="w-[15px] h-[15px]"
          />
        </IconButton>
      </Link>

      <Link href={live} target="_blank">
        <IconButton>
          <Globe className="w-[15px] h-[15px] stroke-green-light" />
        </IconButton>
      </Link>
    </div>
  );
};

const ProjectStarter = () => {
  const { projects } = useProjects();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[20px] max-sm:gap-[20px]">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden w-full sm:max-w-md h-[180px]"
        >
          {/* main image */}
          <Image
            src={project.project_images[0]}
            alt={project.project_name}
            fill
            className="object-cover"
          />

          {/* hover overlay */}
          <div className="opacity-100 group-hover:opacity-100 absolute inset-0 p-6 bg-white/20 backdrop-blur-sm transition-all duration-300 flex items-start">
            <div className="w-full p-2 text-black">
              <p className="font-firacode">{project.project_name}</p>
              <p className="font-firacode text-gray-400 text-left text-sm mt-2 mx-1 head-line">
                {project.project_category}
              </p>

              <div className="flex flex-wrap gap-2 justify-start mt-3">
                {project.project_tags.map((tag, idx) => (
                  <Image
                    key={idx}
                    src={tag.project_tech_image}
                    alt={tag.project_tech_text}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                ))}
              </div>

              <Links
                id={project._id}
                github={project.project_github_link}
                live={project.project_link}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectStarter;
