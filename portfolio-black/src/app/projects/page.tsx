"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Project_card from "@/components/Projects/Card";
import { useEffect, useState } from "react";

// ____ import nessessary types 
import { Project } from "@/@types/Projects";

export default function ProjectsSection() {
    // ___ projects Array
    const [data, setdata] = useState<Project[]>([]);

    useGSAP(() => {
        // GSAP animation for desktop and tablets
        gsap.fromTo(".project-head", { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 });
    });


    useEffect(() => {
        // ___Fetch data from API and update the content
        const getData = async () => {
            const response = await fetch("/api/projects");
            const {data} = await response.json();
            if(data !== "Error while creating connection") {
                setdata(data)
            }
            // add notification for error 
            else {}
        }
        getData();
    },[]);

    return (
        <section className="relative bg-black text-white py-[100px] px-4 sm:px-6 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="overflow-hidden h-[100px] md:h-[170px]">
                    <h1 className="project-head px-[30px] text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
                        My Work
                    </h1>
                </div>
                <br /><br />

                {
                    // ____display project cards 
                    data.map((project:Project, idx:number) => {
                        return <Project_card project_category={project.project_category} project_tags={project.project_tags} project_name={project.project_name} project_description={project.project_description} project_github_link={project.project_github_link} project_images={project.project_images} project_link={project.project_link} key={idx}/>
                    })
                }

            </div>
        </section>
    );
}