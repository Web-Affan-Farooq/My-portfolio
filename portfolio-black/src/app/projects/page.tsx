"use client";
/* ____ Dependencies ... */
// import gsap from "gsap";

/* ____ Hooks ... */
// import { useGSAP } from "@gsap/react";

/* ____ Components ... */
import { ProjectCard } from "@/components/pages";

/* ____ Types ... */
import { Project } from "@/@types/Projects";
import { useProjects } from "@/stores/projects";
// import { testprojects } from "@/constants";

export default function ProjectsSection() {
  const { projects } = useProjects();
  return (
    <main>
      <article>
        <section className="relative bg-black text-white py-[80px] px-3 sm:px-6 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <br />
            <div className="px-[50px] max-md:px-[20px] flex max-md:flex-col items-start justify-evenly items-center">
              <div>
                <h1 className="text-green-light w-full font-firacode font-bold text-5xl text-left max-sm:text-[30px] sm:text-[40px] md:text-[57px] lg:text-[80px] xl:text-[100px] 2xl:text-[110px] about-head">
                  My Work
                </h1>
                <p className="font-firacode text-faun text-left text-sm mt-2 mx-1 head-line">
                  Glimpse of my recent work
                </p>
              </div>
              <div className="w-1/2"></div>
            </div>
            <br />
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[20px] max-sm:gap-[100px]">
              {projects.map((project: Project, idx: number) => (
                <ProjectCard project={project} key={idx} />
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
