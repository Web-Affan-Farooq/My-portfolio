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

    const project = {
        project_category: "Fullstack",
        project_github_link: "/",
        project_description: "this is project description df dfidhfi usdiofuiosd ufiosdufi usdifuiodsfiudfoiuiodufioufioudiofuoiduf idoisfu oidufsio udiofuoidsufoiduio fkjkdsjfkds jfdsjfkjdsklfjdslk fjkdsjflkdskf jsdkfjksdfjklsjdfkljdskl fjksdjfksdjlkfjsdklfjksd jfksjdfkjksdfjksdjfk sjdfkjslkdfjksdfklsj dfkjsdkfjksdjfkjdfkjdkj",
        project_images: ["/images/example-project.png"],
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
                            {/* {
                                data.map((project: Project, idx: number) => {
                                    return <Project_card project={project} key={idx} />
                                })
                            } */}
                            <Project_card project={project} />
                            <Project_card project={project} />
                            <Project_card project={project} />
                            <Project_card project={project} />
                            <Project_card project={project} />
                            <Project_card project={project} />
                            <Project_card project={project} />
                            <Project_card project={project} />
                            <Project_card project={project} />
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default Main