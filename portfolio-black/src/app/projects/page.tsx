"use client";
/* ____ Dependencies ... */
import gsap from "gsap";

/* ____ Hooks ... */
import { useGSAP } from "@gsap/react";

/* ____ Components ... */
import { ProjectCard } from "@/components/pages";

/* ____ Types ... */
import { Project } from "@/@types/Projects";
import { useEffect, useState } from "react";
import { useProjects } from "@/stores/projects";
// import { testprojects } from "@/constants";

export default function ProjectsSection() {
  const [projects, setProjectsData] = useState<Project[]>([]);
  const { setProjects } = useProjects();
  useEffect(() => {
    // ___Fetch data from API and update the content
    const getData = async () => {
      const response = await fetch(`/api/projects`, {
        next: { revalidate: 600 },
      });
      const { data } = await response.json();

      if (data !== "Error while creating connection") {
        setProjectsData(data);
        setProjects(data);
      } else {
      }
    };
    getData();
  }, [setProjects]);

  // _____ Reveal from bottom animation on my work heading ...
  useGSAP(() => {
    // GSAP animation for desktop and tablets
    gsap.fromTo(
      ".project-head",
      { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 }
    );
  });

  return (
    <main>
      <article>
        <section className="relative bg-black text-white py-[80px] px-3 sm:px-6 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="overflow-hidden h-[100px] md:h-[170px] pt-10 mb-7 mt-4 sm:mb-6 sm:mt-6">
              <h1 className="project-head px-[20px] text-white-custom font-firacode font-semibold text-right text-[40px] sm:text-[65px] lg:text-[90px] xl:text-[110px] 2xl:text-[120px] leading-none">
                My Work
              </h1>
            </div>

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
