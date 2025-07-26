import sanityClient from '@/lib/sanity';
import type { Project } from '@/@types/Projects';
import Project_card from './Card';
// import { testprojects } from '@/constants';

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
    const data = await sanityClient.fetch(q);
    // const data = testprojects;
    // Descri0ption maximum 4 lines
    // tags maximum 20

    return (
        <main>
            <article>
                <section className="relative bg-black text-white py-[100px] px-4 sm:px-6 lg:px-16 overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="overflow-hidden h-[100px] md:h-[170px]">
                            <h1 className="project-head px-[30px] text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
                                My Work
                            </h1>
                        </div>
                        <br /><br />
                        <div className='flex flex-col max-md:gap-[40px]'>
                            {
                                data.map((project: Project, idx: number) => {
                                    return <Project_card project={project} key={idx} />
                                })
                            }
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default Main