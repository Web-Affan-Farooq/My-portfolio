// import React from 'react'
// import Project_card from '@/components/Projects/Card';

// const Projects = () => {
//     return (
//         <section className="w-full h-auto px-4 md:px-10 lg:px-20 py-10 overflow-hidden">
//             {/* Title */}
//             <h1 className="text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
//                 My Work
//             </h1>

//             <div className="border-t-2 border-light-gray mt-10 pt-10 flex gap-8">

//                 {/* Pagination (Vertical) */}
//                 <div className="flex flex-col gap-4 items-center">
//                     {[1, 2, 3].map(num => (
//                         <button key={num} className="w-10 h-10 rounded-full border-2 border-white text-white-custom hover:bg-white-custom hover:text-black-custom transition-all duration-200 flex items-center justify-center">
//                             {num}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Articles Grid */}
//                 <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6 w-full">
//                     {/* cards */}
//                     <Project_card/>
//                     <Project_card/>
//                     <Project_card/>
//                     <Project_card/>

//                 </div>
//             </div>

//             {/* Bottom spacing */}
//             <div className="h-[200px]"></div>
//         </section>
//     )
// }

// const ProjectsPage = () => {
//     return (
//         <main>
//             <article>
//                 <br /><br /><br />
//                 <Projects/>
//             </article>
//         </main>
//     )
// }

// export default ProjectsPage


// components/ProjectsSection.tsx

"use client";
import Image from "next/image";
import {IoIosArrowRoundForward} from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Iskill {
    name: string;
    image: string;
}
interface Iproject {
    project_name: string;
    project_skills: Iskill[];
    // project_id: string;
    short_description: string;
    // link: string;
}
const Project_card = ({ project_name, project_skills, short_description }: Iproject) => {

    // Attach animations on this card also 
    return (
        <div className="project-card relative mb-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="flex flex-col flex-nowrap justify-center items-start gap-4">
                    <h3 className="font-firacode text-xl font-semibold mb-2">{project_name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-300 font-poppins">
                        {
                            project_skills.map((skill: Iskill, idx: number) => {
                                return <div className="bg-[#131c2e] text-white-custom px-3 py-1 rounded-[20px] flex flex-row flex-nowrap justify-center items-center gap-2 font-poppins" key={idx}>
                                    <Image src={skill.image} alt="typescript" width={30} height={30} className="" />
                                    <span>{skill.name}</span>
                                </div>
                            })
                        }

                    </div>
                    <p className="text-gray-400 max-w-md">
                        {short_description}
                    </p>
                <div className='button-container flex items-center gap-2'>
                    <button
                        className='
                    bg-white-custom text-black
                    2xl:px-[60px]
                    xl:px-[55px]
                    lg:px-[50px]
                    md:px-[45px]
                    sm:px-[40px] sm:py-[10px]
                    max-sm:px-[35px] max-sm:py-[8px]
                    text-[14px] max-sm:text-[12px]
                    rounded-[40px] py-[11px]'
                    >
                        <i>Check My work</i>
                    </button>
                    <button className='bg-white-custom rounded-full'>
                        <IoIosArrowRoundForward
                            size={38}
                            className='text-black transition-all duration-300'
                        />
                    </button>
                </div>                </div>

                {/* Images Cluster */}
                <div className="relative h-[300px] w-full">
                    <div className="absolute top-0 left-1/3 w-32 h-56 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/example-blog-banner.jpeg"
                            alt="project1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute bottom-4 left-1 w-24 h-36 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/example-blog-banner.jpeg"
                            alt="project2"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute top-1/3 right-0 w-28 h-44 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/example-blog-banner.jpeg"
                            alt="project3"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ProjectsSection() {
        useGSAP(() => {
            // GSAP animation for desktop and tablets
            gsap.fromTo(".project-head", { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 });
        });
    return (
        <section className="relative bg-black text-white py-[100px] px-4 sm:px-6 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="overflow-hidden h-[100px] md:h-[170px]">
                <h1 className="project-head px-[30px] text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
                My Work
                </h1>
                </div>
                <br /><br />
                {/* Gostat Section */}
                <Project_card project_name="Example project_1" short_description="kjhj jer  ejrhj hdbf dsfjudsf jsdfd sjfbd  fkgkl gfg dflgknm dsfhdjfnd fdksl fiodsf erjh cehrjc herh uer cue ruehr uh" project_skills={[
                    {
                        name: "Typescript",
                        image: "/icons/typescript.svg"
                    },
                    {
                        name: "Next.JS",
                        image: "/icons/next.svg"
                    },
                    {
                        name: "React.JS",
                        image: "/icons/react.svg"
                    },
                    {
                        name: "Tailwind CSS",
                        image: "/icons/tailwindcss.svg"
                    },
                    {
                        name: "Vercel",
                        image: "/icons/vercel.svg"
                    },
                    {
                        name: "Netlify",
                        image: "/icons/netlify.svg"
                    },
                    {
                        name: "Git",
                        image: "/icons/git.svg"
                    }
                ]} />
                <Project_card project_name="Example project_2" short_description="kjhj jer  ejrhj hdbf dsfjudsf jsdfd sjfbd  fkgkl gfg dflgknm dsfhdjfnd fdksl fiodsf erjh cehrjc herh uer cue ruehr uh" project_skills={[
                    {
                        name: "Python",
                        image: "/icons/python.svg"
                    },
                    {
                        name: "Streamlit",
                        image: "/icons/streamlit.svg"
                    },
                ]} />
                <Project_card project_name="Example project_3" short_description="kjhj jer  ejrhj hdbf dsfjudsf jsdfd sjfbd  fkgkl gfg dflgknm dsfhdjfnd fdksl fiodsf erjh cehrjc herh uer cue ruehr uh" project_skills={[
                    {
                        name: "html",
                        image: "/icons/html.svg"
                    },
                    {
                        name: "CSS",
                        image: "/icons/css.svg"
                    },
                    {
                        name: "Javascript",
                        image: "/icons/javascript.svg"
                    },
                    {
                        name: "Tailwind CSS",
                        image: "/icons/tailwindcss.svg"
                    }
                ]} />
                <Project_card project_name="Example project_4" short_description="kjhj jer  ejrhj hdbf dsfjudsf jsdfd sjfbd  fkgkl gfg dflgknm dsfhdjfnd fdksl fiodsf erjh cehrjc herh uer cue ruehr uh" project_skills={[
                    {
                        name: "Node.JS",
                        image: "/icons/node.svg"
                    },
                    {
                        name: "Express.JS",
                        image: "/icons/express.svg"
                    },
                    {
                        name: "Javascript",
                        image: "/icons/javascript.svg"
                    },
                    {
                        name: "React.JS",
                        image: "/icons/react.svg"
                    },
                    {
                        name: "Tailwind CSS",
                        image: "/icons/tailwindcss.svg"
                    }
                ]} />

            </div>
        </section>
    );
}