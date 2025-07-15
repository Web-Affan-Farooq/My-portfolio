"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import { HeroSection, AboutSection, ProjectsScroll, ProjectScrollCard } from '@/components/pages/Home';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const data = [
  {
    src: "/icons/react.svg",
    text: "React.JS",
    shadow:"#ffffff"
  },
    {
    src: "/icons/zustand.svg",
    text: "Zustand",
    shadow:"#ffffff"
  },
  {
    src: "/icons/next.svg",
    text: "Next.JS",
    shadow:"#ffffff"
  },
  {
    src: "/icons/tailwindcss.svg",
    text: "Tailwind",
    shadow:"#ffffff"
  },

  {
    src: "/icons/python.svg",
    text: "Python",
    shadow:"#ffffff"
  },
  {
    src: "/icons/streamlit.svg",
    text: "Streamlit",
    shadow:"#ffffff"
  },

  {
    src: "/icons/vercel.svg",
    text: "Vercel",
    shadow:"#ffffff"
  },
  {
    src: "/icons/netlify.svg",
    text: "Netlify",
    shadow:"#ffffff"
  },
    {
    src: "/icons/git.svg",
    text: "Git",
    shadow:"#ffffff"
  },


  {
    src: "/icons/html.svg",
    text: "HTML",
    shadow:"#ffffff"
  },
  {
    src: "/icons/css.svg",
    text: "CSS",
    shadow:"#ffffff"
  },
    {
    src: "/icons/typescript.svg",
    text: "Typescript",
    shadow:"#ffffff"
  },
  {
    src: "/icons/javascript.svg",
    text: "Javascript",
    shadow:"#ffffff"
  },
  {
    src: "/icons/node.svg",
    text: "Node.JS",
    shadow:"#ffffff"
  },
  {
    src: "/icons/express.svg",
    text: "Express",
    shadow:"#ffffff"
  },
    {
    src: "/icons/sanity.svg",
    text: "Sanity",
    shadow:"#ffffff"
  },
    {
    src: "/icons/stripe.svg",
    text: "Stripe",
    shadow:"#ffffff"
  }
]
const Home = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <article>
        <HeroSection />
        <section className='border border-white text-white'>
          {/* <div className='flex flex-row'>
            <div className='border-2 border-white rounded-full px-[20px] py-[2px] text-center flex flex-col justify-center items-center'>
              <span className='font-semibold'>Why choose me</span>
            </div>
            <div className='rounded-full w-[50px] h-[50px] border-2 border-white flex justify-center items-center'>
              <span className='text-[30px]'>?</span>
            </div>
          </div> */}

          <div className='p-5 flex flex-row flex-wrap justify-between items-center sm:gap-[20px] max-sm:gap-[20px]'>
            <div className='w-[50%]'>
              <h1 className='text-white-custom 
                    font-firacode font-semibold leading-[90px]
                    2xl:text-[110px]
                    xl:text-[70px]
                    lg:text-[80px]
                    md:text-[50px] md:leading-[55px]
                    sm:text-[30px] sm:leading-[35px]
                    max-sm:text-[28px] max-sm:leading-[35px]'>
                My extensive skillset
              </h1>
            </div>

            <div className='text-gray-400 text-[20px] sm:text-[17px] max-sm:text-[16px]'>
              <p>
                Building the world's best marketing ,
                <br />
                your trusted partner for strategy , design and dev
              </p>
            </div>
          
          </div>
          <div className='flex flex-row flex-wrap gap-[10px]'>
            {
              data.map((skill,idx) => (
                <div className={`flex flex-col flex-nowrap gap-[7px] shadow-lg shadow-[${skill.shadow}]`} key={idx}>
                  <Image src={skill.src} alt={skill.text} width={40} height={40} className=''/>
                <span className='text-gray-200 text-sm'>{skill.text}</span>
                </div>
              ))
            }

          </div>
          {/* <div className='sm:w-[300px] sm:h-[150px] border border-white'> */}
            {/* <Image src={"/images/solar.png"} alt='solar' width={500} height={500} className='w-[380px] h-[160px]'/> */}
          {/* </div> */}

          {/* <ProjectsScroll> */}

          {/* </ProjectsScroll> */}

        </section>
        {/* <AboutSection /> */}


        {/* <ProjectsScroll>
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
        </ProjectsScroll> */}
        {/* <Articles /> */}
      </article>
    </main>
  )
}

export default Home