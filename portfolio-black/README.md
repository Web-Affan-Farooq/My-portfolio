## Notes :

Create the aricles page with the help of following code :

```Typescript
// container
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
```

--- 


```Typescript
"use client";

import { ArrowUp } from "lucide-react";
import type { Project } from "@/@types/Projects";
import Link from "next/link";
import Image from "next/image";

const Project_card = ({ project }: { project: Project }) => {
  return (
    <div className="relative group md:h-[400px] sm:max-w-5xl w-full mx-auto shadow-lg rounded-2xl overflow-hidden flex flex-row flex-wrap items-center sm:gap-10 max-sm:gap-5 p-6 transition-all duration-300 hover:shadow-2xl max-md:flex-col max-md:items-start">
      {/* Project Image */}
      <div className="relative w-[400px] h-[300px] max-sm:w-[300px] max-sm:h-[200px] overflow-hidden rounded-lg">
        <Image
          src={project.project_images[0]}
          alt={`${project.project_name} image`}
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col sm:gap-4 max-sm:gap-3">
        {/* Project Name */}
        <h2 className="text-2xl font-semibold text-white max-sm:text-lg font-firacode">
          {project.project_name}
        </h2>

        {/* Explore Button */}
        <div>
          <Link href="/" passHref>
            <button
              type="button"
              className="flex items-center gap-2 bg-white text-black text-xs font-medium max-sm:px-4 max-sm:py-[4px] px-4 py-[5px] rounded-full transition"
            >
              <i>Explore</i>
              <ArrowUp className="rotate-90 transition-transform duration-300 group-hover:translate-x-1 max-sm:size-5 size-7" />
            </button>
          </Link>
        </div>

        {/* Tags/Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.project_tags.map((tag, idx) => (
            <Image
              key={idx}
              src={tag.project_tech_image}
              alt={tag.project_tech_text}
              width={25}
              height={25}
              className="sm:w-[25px] sm:h-[25px] max-sm:w-[23px] max-sm:h-[23px]"
            />
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm">
          {project.project_description}
        </p>
      </div>
    </div>
  );
};

export default Project_card;
```