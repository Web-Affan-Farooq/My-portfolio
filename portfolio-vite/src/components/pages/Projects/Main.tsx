import { ArrowUp } from 'lucide-react';
export interface Tags {
    project_tech_text: string;
    project_tech_image: string;
}
export interface Project {
    project_category: string;
    project_github_link: string;
    project_description: string;
    project_images: string[];
    project_tags: Tags[],
    _id: string;
    project_name: string;
    project_link: string;
}

// import sanityClient from '@/lib/sanity';
import Project_card from './Card';

const Main = () => {
    //     const q = `
    //     *[_type == "projects"]{
    //   _id,
    //   project_name,
    //   project_category,
    //   project_link,
    //   project_github_link,
    //   project_description,
    //   "project_images": project_images[].asset->url,
    //   "project_tags": project_tags[]{
    //     project_tech_text,
    //     "project_tech_image": project_tech_image.asset->url
    //   }
    // }
    //   `
    // const data = await sanityClient.fetch(q);
    // console.log('Projects : ',data);

    const projects = [
        {
            project_category: "Fullstack",
            project_github_link: "/",
            project_description: "this is project description df dfidhfi usdiofuiosd ufiosdufi usdifuiodsfiudfoiuiodufioufioudiofuoiduf idoisfu oidufsio udiofuoidsufoiduio fkjkdsjfkds jfdsjfkjdsklfjdslk fjkdsjflkdskf jsdkfjksdfjklsjdfkljdskl fjksdjfksdjlkfjsdklfjksd jfksjdfkjksdfjksdjfk sjdfkjslkdfjksdfklsj dfkjsdkfjksdjfkjdfkjdkj",
            project_images: ["/images/mockup.jpg"],
            project_tags: [
                {
                    project_tech_text: "Next.JS",
                    project_tech_image: "/icons/next.svg"
                },
                {
                    project_tech_text: "React",
                    project_tech_image: "/icons/react.svg"
                },
                {
                    project_tech_text: "TailwindCSS",
                    project_tech_image: "/icons/tailwindcss.svg"
                },
                {
                    project_tech_text: "GSAP",
                    project_tech_image: "/icons/gsap.svg"
                },
                {
                    project_tech_text: "Postgres",
                    project_tech_image: "/icons/postgres.svg"
                },
                {
                    project_tech_text: "Prisma",
                    project_tech_image: "/icons/prisma.svg"
                },
                {
                    project_tech_text: "Typescript",
                    project_tech_image: "/icons/typescript.svg"
                },


            ],
            _id: "1",
            project_name: "Example projectdfjkds fkd sjfkjdksfjkldjfksdjflkjdklsfjkjdfkljdlfkjdk jfkj",
            project_link: "/"
        },
        {
            project_category: "Fullstack",
            project_github_link: "/",
            project_description: "this is project description df dfidhfi usdiofuiosd ufiosdufi usdifuiodsfiudfoiuiodufioufioudiofuoiduf idoisfu oidufsio udiofuoidsufoiduio fkjkdsjfkds jfdsjfkjdsklfjdslk fjkdsjflkdskf jsdkfjksdfjklsjdfkljdskl fjksdjfksdjlkfjsdklfjksd jfksjdfkjksdfjksdjfk sjdfkjslkdfjksdfklsj dfkjsdkfjksdjfkjdfkjdkj",
            project_images: ["/images/manzarri.jpg"],
            project_tags: [
                {
                    project_tech_text: "Streamlit",
                    project_tech_image: "/icons/streamlit.svg"
                },
                {
                    project_tech_text: "React",
                    project_tech_image: "/icons/react.svg"
                },
                {
                    project_tech_text: "Node.JS",
                    project_tech_image: "/icons/node.svg"
                },
            ],
            _id: "1",
            project_name: "Example projectdfjkds fkd sjfkjdksfjkldjfksdjflkjdklsfjkjdfkljdlfkjdk jfkj",
            project_link: "/"
        },
        {
            project_category: "Fullstack",
            project_github_link: "/",
            project_description: "this is project description df dfidhfi usdiofuiosd ufiosdufi usdifuiodsfiudfoiuiodufioufioudiofuoiduf idoisfu oidufsio udiofuoidsufoiduio fkjkdsjfkds jfdsjfkjdsklfjdslk fjkdsjflkdskf jsdkfjksdfjklsjdfkljdskl fjksdjfksdjlkfjsdklfjksd jfksjdfkjksdfjksdjfk sjdfkjslkdfjksdfklsj dfkjsdkfjksdjfkjdfkjdkj",
            project_images: ["/images/mockup.jpg"],
            project_tags: [
                {
                    project_tech_text: "Streamlit",
                    project_tech_image: "/icons/streamlit.svg"
                },
                {
                    project_tech_text: "React",
                    project_tech_image: "/icons/react.svg"
                },
                {
                    project_tech_text: "Node.JS",
                    project_tech_image: "/icons/node.svg"
                },
            ],
            _id: "1",
            project_name: "Example projectdfjkds fkd sjfkjdksfjkldjfksdjflkjdklsfjkjdfkljdlfkjdk jfkj",
            project_link: "/"
        },
        {
            project_category: "Fullstack",
            project_github_link: "/",
            project_description: "this is project description df dfidhfi usdiofuiosd ufiosdufi usdifuiodsfiudfoiuiodufioufioudiofuoiduf idoisfu oidufsio udiofuoidsufoiduio fkjkdsjfkds jfdsjfkjdsklfjdslk fjkdsjflkdskf jsdkfjksdfjklsjdfkljdskl fjksdjfksdjlkfjsdklfjksd jfksjdfkjksdfjksdjfk sjdfkjslkdfjksdfklsj dfkjsdkfjksdjfkjdfkjdkj",
            project_images: ["/images/mockup.jpg"],
            project_tags: [
                {
                    project_tech_text: "Streamlit",
                    project_tech_image: "/icons/streamlit.svg"
                },
                {
                    project_tech_text: "React",
                    project_tech_image: "/icons/react.svg"
                },
                {
                    project_tech_text: "Node.JS",
                    project_tech_image: "/icons/node.svg"
                },
            ],
            _id: "1",
            project_name: "Example projectdfjkds fkd sjfkjdksfjkldjfksdjflkjdklsfjkjdfkljdlfkjdk jfkj",
            project_link: "/"
        }
    ]

    // Descri0ption maximum 4 lines
    // tags maximum 20

    return (
        <main>
            <article>
                <section className="relative bg-black text-white py-[80px] px-3 sm:px-6 lg:px-16 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        {/* Header */}
                        <div className="overflow-hidden h-[100px] md:h-[170px]">
                            <h1 className="project-head px-[20px] text-white-custom font-firacode font-semibold text-right text-[40px] sm:text-[65px] lg:text-[90px] xl:text-[110px] 2xl:text-[120px] leading-none">
                                My Work
                            </h1>
                        </div>

                        <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            {projects.map((project, idx) => (
                                <div
                                    key={idx}
                                    className="p-2 sm:p-4 flex flex-col gap-4 w-full max-w-full"
                                >
                                    {/* Image */}
                                    <div className="overflow-hidden w-full aspect-[4/3] max-sm:aspect-[5/4] group rounded-lg">
                                        <img
                                            src={project.project_images[0]}
                                            alt={project.project_name}
                                            className="w-full h-full object-cover rounded-lg group-hover:scale-105 group-hover:blur-xs transition-all duration-300"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h2 className="font-firacode font-semibold text-md text-base sm:text-lg">
                                        {project.project_name}
                                    </h2>

                                    {/* Tags */}
                                    <div className="flex flex-wrap items-center gap-2">
                                        {project.project_tags.map((tag, tagIdx) => (
                                            <img
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
                                        <a
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
                                                <img
                                                    src="/icons/github.svg"
                                                    alt="github"
                                                    width={18}
                                                    height={18}
                                                    className="w-[18px] h-[18px]"
                                                />
                                                <span>Check my work</span>
                                            </button>
                                        </a>

                                        {/* Live Link */}
                                        <a
                                            href={project.project_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="bg-white-custom rounded-full p-2 sm:p-2.5 hover:scale-110 transition-transform">
                                                <ArrowUp size={28} className="text-black rotate-90" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </article>
        </main>


        // <main>
        //     <article>
        //         <section className="relative bg-black text-white py-[100px] px-4 sm:px-6 lg:px-16 overflow-hidden">
        //             <div className="max-w-7xl mx-auto">
        //                 <div className="overflow-hidden h-[100px] md:h-[170px]">
        //                     <h1 className="project-head px-[30px] text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
        //                         My Work
        //                     </h1>
        //                 </div>
        //                 <br /><br />
        //                 <div className='grid grid-cols-2 grid-rows-1 gap-[20px]'>
        //                     {projects.map((project, idx) => (
        //                         <div key={idx} className='p-2 flex flex-col gap-[10px]'>
        //                             <div className='overflow-hidden w-[400px] h-auto group'>
        //                                 <img src={project.project_images[0]} alt={project.project_name} width={300} height={300} className="group-hover:scale-[1.1] group-hover:blur-xs transition-all duration-300 rounded-lg object-cover w-full h-full" />
        //                             </div>
        //                             <h1 className='font-firacode font-semibold text-md w-full'>{project.project_name}</h1>
        //                             <div className='flex flex-row flex-wrap'>
        //                                 {project.project_tags.map((tag,) => (
        //                                     <div>
        //                                         <img src={tag.project_tech_image} alt={tag.project_tech_text} width={25} height={25} />
        //                                     </div>
        //                                 ))}
        //                             </div>
        //                             <p className='text-sm text-gray-500'>{project.project_description}</p>
        //                             <div className='button-container flex items-center gap-2'>
        //                                 <a href={project.project_github_link} target="_blank">
        //                                     <button
        //                                         className='
        //                                                 bg-white-custom text-black
        //                                                 2xl:px-[60px]
        //                                                 xl:px-[55px]
        //                                                 lg:px-[50px]
        //                                                 md:px-[45px]
        //                                                 sm:px-[40px] sm:py-[10px]
        //                                                 max-sm:px-[35px] max-sm:py-[8px]
        //                                                 text-[14px] max-sm:text-[12px]
        //                                                 rounded-[40px] py-[11px]'
        //                                     >
        //                                         <div className="font-italic flex flex-row flex-nowrap justify-center items-center gap-3">
        //                                             <img src={"/icons/github.svg"} alt="github" width={20} height={20} className="w-[20px] h-[20px]" />
        //                                             <span>Check my work</span></div>
        //                                     </button>
        //                                 </a>
        //                                 <a href={project.project_link} target="_blank">
        //                                     <button className='bg-white-custom rounded-full'>
        //                                         <ArrowUp
        //                                             size={38}
        //                                             className='text-black rotate-90'
        //                                         />
        //                                     </button>
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     ))}
        //                 </div>
        //             </div>
        //         </section>
        //     </article>
        // </main>
    )
}

export default Main