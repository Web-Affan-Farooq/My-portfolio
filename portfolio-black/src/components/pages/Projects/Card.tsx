import { ArrowUp } from "lucide-react";
import type { Project } from "@/@types/Projects";
import Link from "next/link";
import Image from "next/image";

const Project_card = ({ project }: { project: Project }) => {
    return (
        <div className="p-2 sm:p-4 flex flex-col gap-4 w-full max-w-full">
            {/* Image */}
<Image
  src={project.project_images[0]}
  alt={project.project_name}
  width={300}
  height={300}
  className="w-full aspect-[4/3] max-sm:aspect-[5/4] object-cover rounded-lg transition-all duration-300 hover:scale-105"
  quality={100}
/>


            {/* Title */}
            <h2 className="font-firacode font-semibold text-md text-base sm:text-lg">
                {project.project_name}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
                {project.project_tags.map((tag, tagIdx) => (
                    <Image
                        key={tagIdx}
                        src={tag.project_tech_image}
                        alt={tag.project_tech_text}
                        width={22}
                        height={22}
                        className="object-contain"
                    />
                ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400">{project.project_description}</p>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-wrap">
                {/* GitHub */}
                <Link
                    href={project.project_github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="
                      bg-white-custom text-black font-italic rounded-[40px]
                      py-[9px] px-5 sm:px-6 text-[12px] sm:text-[14px]
                      flex items-center gap-2 sm:gap-3 hover:scale-[1.03] transition-all"
                    >
                        <Image
                            src="/icons/github.svg"
                            alt="github"
                            width={18}
                            height={18}
                            className="w-[18px] h-[18px]"
                        />
                        <span>Check my work</span>
                    </button>
                </Link>

                {/* Live Link */}
                <Link
                    href={project.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-white-custom rounded-full p-2 sm:p-2.5 hover:scale-110 transition-transform">
                        <ArrowUp size={28} className="text-black rotate-90" />
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default Project_card;