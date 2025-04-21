"use client";
import Lenis from 'lenis';
import React, { useEffect, useRef } from 'react';
import "./style.css";
import Image from 'next/image';

const ProjectPage = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const lenis = new Lenis({
      wrapper: scrollerRef.current,
      orientation: "horizontal",
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className='w-full border border-solid border-white px-[20px] sm:px-[30px] py-[100px] sm:py-[80px] md:py-[100px]'>
      
      {/* Section title */}
      <h1 className='font-opensans text-white-custom font-semibold 
        text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[40px]'>
        Frontend Project
      </h1>

      {/* Project Name */}
      <h2 className='font-firacode font-bold text-white-custom 
        text-[22px] sm:text-[28px] md:text-[38px] lg:text-[48px] xl:text-[60px] mt-4'>
        Example project name
      </h2>

      <br /><br /><br /><br />

      {/* Scrollable Projects List */}
      <div className='overflow-x-auto whitespace-nowrap m-auto rounded-[20px] 
        max-sm:w-full sm:w-[370px] p-[15px]' 
        ref={scrollerRef}>
        
        {Array(4).fill(0).map((_, idx) => (
          <div key={idx} className='inline-block w-[350px] rounded-[20px] mr-[20px] h-auto whitespace-normal'>
            <Image 
              src={"/images/example-project.png"} 
              alt='project name' 
              width={350} 
              height={350} 
              className='object-cover rounded-[20px]' 
            />
          </div>
        ))}
      </div>

      {/* Project Description */}
      <p className='text-white-custom mt-6 leading-relaxed max-w-[1200px]
        text-[15px] sm:text-[17px] md:text-[18px] lg:text-[19px] xl:text-[20px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, iste animi, amet labore iusto corporis pariatur nesciunt, praesentium quo reprehenderit quod minima. Quae id hic nihil dolore animi corrupti sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis fugit voluptate impedit deleniti molestiae temporibus voluptatibus, dicta quibusdam sequi atque blanditiis debitis exercitationem enim facere reprehenderit repellat, voluptas maxime? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum possimus odio accusantium molestiae nesciunt, non porro, dolor, tempora earum voluptatum veniam? Repellat, earum neque explicabo dolore vero culpa laboriosam voluptates!
      </p>
    </section>
  );
}

const DynamicProject = () => {
  return (
    <main>
        <article>
            <ProjectPage/>
        </article>
    </main>
  )
}

export default DynamicProject