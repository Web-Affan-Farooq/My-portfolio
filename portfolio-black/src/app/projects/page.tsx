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

  // _____ Reveal from bottom animation on my work heading ...
  // useGSAP(() => {
  //   // GSAP animation for desktop and tablets
  //   gsap.fromTo(
  //     ".project-head",
  //     { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 },
  //     { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 }
  //   );
  // });

  return (
    <main>
      <article>
        <section className="relative bg-black text-white py-[80px] px-3 sm:px-6 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <br />
            <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
              <h1
                className="h-[70px] overflow-hidden text-5xl md:text-7xl font-bold px-5 m-auto text-white-custom text-left w-full font-firacode 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px] 
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px] about-head"
              >
                My Work
              </h1>
              <p className="font-firacode text-faun mt-2 mx-5 text-sm text-faun">
                Glimpse of my recent work
              </p>
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
