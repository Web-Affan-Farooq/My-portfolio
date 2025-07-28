import sanityClient from '@/lib/sanity';
import type { Project } from '@/@types/Projects';
import Project_card from './Card';
// import { testprojects } from '@/constants';

export interface Tags {
    project_tech_text: string;
    project_tech_image: string;
}

const Main = async () => {
        const q = `
        *[_type == "projects"]{
      _id,
      project_name,
      project_category,
      project_link,
      project_github_link,
      project_description,
      "project_images": project_images[].asset->url,
      "project_tags": project_tags[]{
        project_tech_text,
        "project_tech_image": project_tech_image.asset->url
      }
    }
      `
    const data = await sanityClient.fetch(q,{},{
        cache:"no-store"
    });

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

                        <div className="mt-12 grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            {data.map((project:Project, idx:number) => (
                                <Project_card project={project} key={idx}/>
                            ))}
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default Main