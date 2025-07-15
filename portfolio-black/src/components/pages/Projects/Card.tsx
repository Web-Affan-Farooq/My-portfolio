
import { ArrowUp } from "lucide-react";
import type { Project} from "@/@types/Projects";
import Link from "next/link";
import Image from "next/image";

const Project_card = ({ project }: { project: Project }) => {
    return (
        <div className="flex flex-row flex-nowrap max-md:flex-wrap justify-evenly max-md:justify-start items-center my-5 w-[90vw] max-sm:w-full gap-[20px]">
            <div className="w-[400px]">
                <h1 className="text-xl font-semibold fsont-firacode my-1">{project.project_name}</h1>
                <p className="text-sm text-gray-500 font-opensans">{project.project_description}</p>
                <div className="flex flex-row my-2">
                    {project.project_tags.map((tag, idx) => {
                        return <div className="bg-[#131c2e] text-white-custom flex flex-row flex-nowrap justify-center items-center p-[5px] rounded-full gap-1" key={idx}>
                            <Image src={tag.project_tech_image} alt={tag.project_tech_text} width={24} height={24} className="max-sm:w-[25px] max-sm:h-[25px] " />
                        </div>
                    })}
                </div>

                <div className='button-container flex items-center gap-2'>
                    <Link href={project.project_github_link} target="_blank">
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
                            <div className="font-italic flex flex-row flex-nowrap justify-center items-center gap-3">
                                <Image src={"/icons/github.svg"} alt="github" width={20} height={20} className="w-[20px] h-[20px]"/>
                                 <span>Check my work</span></div>
                        </button>
                    </Link>
                    <Link href={project.project_link} target="_blank">
                        <button className='bg-white-custom rounded-full'>
                            <ArrowUp
                                size={38}
                                className='text-black rotate-90'
                            />
                        </button>
                    </Link>
                </div>

            </div>
            <div className="w-[350px] h-[200px] rounded-xl overflow-hidden z-10">
                <Image src={project.project_images[0]} alt={project.project_name} width={400} height={400} className="w-full h-full object-cover" />
            </div>
        </div>


        // <div className="flex flex-col justify-center items-start gap-[10px] p-[20px] rounded-md ">
        //     <div className="w-[full] h-[200px]">
        //         <Image src={project.project_imgs[0]} alt="project" width={300} height={300} className="object-cover w-full h-full" />
        //     </div>
        //     <div className="flex flex-row flex-wrap justify-start items-center gap-[10px]">
        //         {
        //             project.project_tags.map((tag: Tags, idx: number) => {
        //                 return <div className="bg-[#131c2e] text-white-custom flex flex-row flex-nowrap justify-center items-center px-[9px] py-[1px] rounded-[30px] gap-1" key={idx}>
        //                     <Image src={tag.project_tech_img} alt={tag.project_tech_text} width={24} height={24} className="max-sm:w-[25px] max-sm:h-[25px] " />
        //                     <span className="font-poppins text-[13px]">{tag.project_tech_text}</span>
        //                 </div>
        //             })
        //         }
        //     </div>
        //     <h1 className="font-firacode text-[19px] font-bold tracking-[0.5px]">{project.project_name}</h1>
        //     <p className="text-[14px] tracking-[0.25px] text-gray-300">{project.project_description}</p>
        // <div className='button-container flex items-center gap-2'>
        //     <Link href={project.project_github_a} target="_blank">
        //         <button
        //             className='
        //         bg-white-custom text-black
        //         2xl:px-[60px]
        //         xl:px-[55px]
        //         lg:px-[50px]
        //         md:px-[45px]
        //         sm:px-[40px] sm:py-[10px]
        //         max-sm:px-[35px] max-sm:py-[8px]
        //         text-[14px] max-sm:text-[12px]
        //         rounded-[40px] py-[11px]'
        //         >
        //             <div className="font-italic flex flex-row flex-nowrap justify-center items-center gap-3"><IoLogoGithub size={20} /> <span>Check my work</span></div>
        //         </button>
        //     </Link>
        //     <Link href={project.project_a} target="_blank">
        //         <button className='bg-white-custom rounded-full'>
        //             <IoIosArrowRoundForward
        //                 size={38}
        //                 className='text-black transition-all duration-300'
        //             />
        //         </button>
        //     </Link>
        // </div>
        // </div>
    )
}
export default Project_card;