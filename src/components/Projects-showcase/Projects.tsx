import React from 'react';
import Project_card from './Project-card';
import Link from 'next/link';

const Projects = () => {
    return (
        <section className='text-white py-20 px-5'>
            <h1 className='text-white text-center text-4xl font-bold'>Featured <span className='text-primary'>projects</span></h1>
            <br />
            <div className='p-5 flex flex-row flex-wrap gap-10 justify-center align-middle'>
                <Project_card project_name='portfolio template' project_description='🚀 Portfolio Template With Stunning Animations' project_image='/images/portfolio.png' project_link='https://muhammad-affan.netlify.app/' technologies={['/images/html.svg',"/images/css.svg", "/images/javascript.svg", "/images/figma.svg", "/images/git.svg"]}/>
                <Project_card project_name='portfolio template' project_description='🚀 Dark Themed Portfolio Website' project_image='/images/portfolio.png' project_link='https://muhammad-affan.netlify.app/' technologies={['/images/shadcn.png',"/images/reactjs.svg", "/images/tailwind.svg",]}/>
            </div>
            <br />
            <br />
            <br />
            <div className='text-center'>
            <Link href={'/Projects'} className='text-center text-link text-[14px]'>See more ...</Link>
            </div>
        </section>
    )
}

export default Projects;