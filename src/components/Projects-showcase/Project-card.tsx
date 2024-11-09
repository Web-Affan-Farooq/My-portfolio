import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Project {
    project_name:string; 
    project_link:string;
    project_description:string;
    project_image:string;
    technologies:string[]
}
const Project_card = ({project_name, project_link, project_description, project_image, technologies}:Project) => {
  return (
    <div className='p-5 w-80 rounded-xl bg-glass'>
        <div className='flex flex-row flex-nowrap justify-end'>
            <Link href={project_link}>
            <span className='w-10 h-10 bg-black text-center font-bold rounded-full flex flex-col justify-center align-middle -rotate-45'>
            <i className="fa-solid fa-arrow-right"></i>
            </span>
            </Link>
        </div>
        <Image src={project_image} alt='project' width={200} height={200} className="rounded-lg"/>
        <br />
        <h1 className='text-2xl font-bold'>{project_name}</h1>
        <br />
        <p className="text-gray-400">{project_description}</p>
        <br />
        <div className='flex flex-row flex-nowrap gap-2'>
          {technologies.map((technology:string, index:number) => {
            return <Image src={technology} alt="project" width={20} height={20} key={index}/> 
          })}
        </div>
    </div>
  )
}

export default Project_card;