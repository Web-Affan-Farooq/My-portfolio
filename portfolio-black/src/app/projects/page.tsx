import React from 'react'
import { ProjectsSection } from '@/components'

const Projectspage = () => {
    return (
        <>
            <ProjectsSection />
        </>
    )
}

export default Projectspage
// "use client";
// /* ____ Dependencies ... */
// import gsap from "gsap";
// import axios from "axios";

// /* ____ Hooks ... */
// import { useGSAP } from "@gsap/react";
// import { useEffect, useState } from "react";

// /* ____ Components ... */
// import Project_card from "@/components/Projects/Card";

// /* ____ Types ... */
// import { Project } from "@/@types/Projects";

// export default function ProjectsSection() {
//     // ___ projects Array
//     const [data, setdata] = useState<Project[]>([]);

//     // _____ Reveal from bottom animation on my work heading ...
//     useGSAP(() => {
//         // GSAP animation for desktop and tablets
//         gsap.fromTo(".project-head", { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 });
//     });


//     useEffect(() => {
//         // ___Fetch data from API and update the content
//         const getData = async () => {
//             const response = await axios.get("/api/projects");
//             const { data } = await response.data;
//             console.log("Data : ", data);
//             if (data !== "Error while creating connection") {
//                 setdata(data)
//             }
//             // add notification for error
//             else { }
//         }
//         getData();
//     }, []);

//     return (
//         <section className="relative bg-black text-white py-[100px] px-4 sm:px-6 lg:px-16 overflow-hidden">
//             <div className="max-w-7xl mx-auto">
//                 <div className="overflow-hidden h-[100px] md:h-[170px]">
//                     <h1 className="project-head px-[30px] text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
//                         My Work
//                     </h1>
//                 </div>
//                 <br /><br />
//                 <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 w-full max-sm:gap-[40px] sm:gap-[10px]">
//                     {
//                         data.map((project: Project, idx: number) => {
//                             return <Project_card project={project} key={idx}/>
//                         })
//                     }
//                 </div>
//             </div>
//         </section>
//     );
// }