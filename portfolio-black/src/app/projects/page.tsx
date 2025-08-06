"use client";
/* ____ Dependencies ... */
import gsap from "gsap";
import axios from "axios";

/* ____ Hooks ... */
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";

/* ____ Components ... */
import { ProjectCard } from "@/components/pages";

/* ____ Types ... */
import { Project } from "@/@types/Projects";

export default function ProjectsSection() {
    // ___ projects Array
    const [data, setdata] = useState<Project[]>([]);

    // _____ Reveal from bottom animation on my work heading ...
    useGSAP(() => {
        // GSAP animation for desktop and tablets
        gsap.fromTo(".project-head", { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 });
    });

    useEffect(() => {
        // ___Fetch data from API and update the content
        const getData = async () => {
            const response = await axios.get("/api/projects");
            const { data } = await response.data;
            console.log("Data : ", data);
            if (data !== "Error while creating connection") {
                setdata(data)
            }
            // add notification for error
            else { }
        }
        getData();
    }, []);

    return (
        <main>
            <article>
                <section className="relative bg-black text-white py-[80px] px-3 sm:px-6 lg:px-16 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="overflow-hidden h-[100px] md:h-[170px] pt-10">
                            <h1 className="project-head px-[20px] text-white-custom font-firacode font-semibold text-right text-[40px] sm:text-[65px] lg:text-[90px] xl:text-[110px] 2xl:text-[120px] leading-none">
                                My Work
                            </h1>
                        </div>
                        
                        <div className="mt-12 flex flex-col gap-[20px]">
                            {data.map((project: Project, idx: number) => (
                                <ProjectCard project={project} key={idx} />
                            ))}
                        </div>
                        {/* <div className="w-full border border-white h-[500px] overflow-y-auto flex flex-col gap-4 items-center justify-center pt-[15vh] text-white">
                            <div className="card sticky top-[15vh] bg-blue-400 w-[500px] h-[500px]">
                                <Image src={"/images/example-project.png"} alt={"example"} width={100} height={100} className="w-[150px]" />
                                <h1>Hello</h1>
                            </div>
                            <div className="card sticky top-[15vh] bg-green-400 w-[500px] h-[500px]">
                                <Image src={"/images/example-project.png"} alt={"example"} width={100} height={100} className="w-[150px]" />
                                <h1>Hello</h1>
                            </div>
                            <div className="card sticky top-[15vh] bg-blue-400 w-[500px] h-[500px]">
                                <Image src={"/images/example-project.png"} alt={"example"} width={100} height={100} className="w-[150px]" />
                                <h1>Hello</h1>
                            </div>
                            <div className="card sticky top-[15vh] bg-blue-400 w-[500px] h-[500px]">
                                <Image src={"/images/example-project.png"} alt={"example"} width={100} height={100} className="w-[150px]" />
                                <h1>Hello</h1>
                            </div>
                            <div className="card sticky top-[15vh] bg-blue-400 w-[500px] h-[500px]">
                                <Image src={"/images/example-project.png"} alt={"example"} width={100} height={100} className="w-[150px]" />
                                <h1>Hello</h1>
                            </div>
                            <div className="card sticky top-[15vh] bg-blue-400 w-[500px] h-[500px]">
                                <Image src={"/images/example-project.png"} alt={"example"} width={100} height={100} className="w-[150px]" />
                                <h1>Hello</h1>
                            </div>
                        </div>*/}
                    </div> 
                </section>
            </article>
        </main>
    );
}

