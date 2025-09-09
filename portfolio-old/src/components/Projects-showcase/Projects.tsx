import React from "react";
import Project_card from "./Project-card";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <div>
      <br />
      <br />
      <section className="w-[85vw] mx-auto md:py-36">
        <h1 className="font-bold text-[60px] text-[#698c6d] leading-[70px] tracking-[-2px]">
          My Projects
        </h1>
        <h2 className="mt-3 px-[20px]">Work I've recently shipped 🚀 </h2>
        <br />
        <div className="p-5 flex flex-row flex-wrap gap-10 justify-center align-middle">
          {projects.map((project, idx) => (
            <Project_card
              key={idx}
              project_name={project.project_name}
              project_description={project.project_description}
              project_image={project.project_image}
              project_link={project.project_link}
              technologies={project.technologies}
            />
          ))}
        </div>
        <br />
      </section>
    </div>
  );
};

export default Projects;
