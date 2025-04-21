import Image from "next/image";
import Link from "next/link";

// ___Import custom components ...
import Scrollbar from "./Scrollbar";

// ___Import icons ...
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

// ___Import nessessary typescript types ...
import { Project, Tags } from "@/@types/Projects";

const Project_card = ({ project_category, project_github_link, project_description, project_images, project_tags, project_name, project_link, }: Omit<Project, '_id'>) => {


    // Attach animations on this card also 
    return (
        <div className="project-card relative mb-24">
            <div className="flex justify-evenly max-md:flex-col-reverse items-center">
                {/* Text Content */}
                <div className="flex flex-col flex-nowrap justify-center items-start gap-4">
                    <span className="text-left sm:text-[15px] max-sm:text-[13px] font-poppins-small bg-black-custom py-[5px] sm:px-[15px] max-sm:px-[15px] rounded-[10px]">🚀 &nbsp; {project_category}</span>
                    <h3 className="font-firacode text-2xl font-semibold mb-2">{project_name} </h3>
                    <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-300 font-poppins">
                        {
                            project_tags.map((skill: Tags, idx: number) => {
                                return <div className="bg-[#131c2e] text-white-custom sm:px-3 sm:py-1 sm:rounded-[20px] flex flex-row flex-nowrap justify-center items-center sm:gap-2 max-sm:px-[11px] max-sm:py-[3px] max-sm:rounded-[10px] max-sm:gap-1" key={idx}>
                                    <Image src={skill.project_tech_image} alt={skill.project_tech_text} width={30} height={30} className="max-sm:w-[25px] max-sm:h-[25px] " />
                                    <span className="font-poppins text-[15px] max-sm:text-[13px]">{skill.project_tech_text}</span>
                                </div>
                            })
                        }

                    </div>
                    {/* attach markdonw rendering component */}
                    <p className="text-gray-400 max-w-md">
                        {project_description}
                    </p>

                    <div className='button-container flex items-center gap-2'>
                        <Link href={project_github_link} target="_blank">
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
                                <div className="font-italic flex flex-row flex-nowrap justify-center items-center gap-3"><IoLogoGithub size={20} /> <span>Check my work</span></div>
                            </button>
                        </Link>
                        <Link href={project_link} target="_blank">
                            <button className='bg-white-custom rounded-full'>
                                <IoIosArrowRoundForward
                                    size={38}
                                    className='text-black transition-all duration-300'
                                />
                            </button>
                        </Link>
                    </div>
                </div>


                <Scrollbar images={project_images} />
            </div>
        </div>
    )
}
export default Project_card;