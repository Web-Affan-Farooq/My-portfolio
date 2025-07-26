"use client";
import Image from "next/image";

const skillSet =
  [
    {
      name: "Fullstack development",
      skills: [
        {
          name: "Typescript",
          src: "/icons/typescript.svg",
          shadow: "#0d71c2"
        },
        {
          name: "React",
          src: "/icons/react.svg",
          shadow: "#ffffff"
        },
        {
          name: "Zustand",
          src: "/icons/zustand.svg",
          shadow: "#ffffff"
        },
        {
          name: "Next.JS",
          src: "/icons/next.svg",
          shadow: "#ffffff"
        },
        {
          name: "Tailwind",
          src: "/icons/tailwindcss.svg",
          shadow: "#ffffff"
        },
        {
          name: "GSAP",
          src: "/icons/gsap.svg",
          shadow: "#ffffff"
        },
        {
          name: "Stripe",
          src: "/icons/stripe.svg",
          shadow: "#ffffff"
        },
        {
          name: "Sanity",
          src: "/icons/sanity.svg",
          shadow: "#ffffff"
        },
        {
          name: "Postgres",
          src: "/icons/postgres.svg",
          shadow: "#ffffff"
        },
        {
          name: "Prisma",
          src: "/icons/prisma.svg",
          shadow: "#ffffff"
        },
        {
          name: "Supabase",
          src: "/icons/supabase.svg",
          shadow: "#ffffff"
        },
      ],
    },
    {
      name: "Agentic AI",
      skills: [
        {
          name: "Python",
          src: "/icons/python.svg",
          shadow: "#ffffff"
        },
        {
          name: "Streamlit",
          src: "/icons/streamlit.svg",
          shadow: "#ffffff"
        },
        {
          name: "OpenAI Agents SDK",
          src: "/icons/agents-sdk.svg",
          shadow: "#ffffff"
        },
      ]
    },
    {
      name: "Devops",
      skills: [
        {
          name: "Git",
          src: "/icons/git.svg",
          shadow: "#ffffff"
        },
        {
          name: "Vercel",
          src: "/icons/vercel.svg",
          shadow: "#ffffff"
        },
        {
          name: "Netlify",
          src: "/icons/netlify.svg",
          shadow: "#ffffff"
        },
      ]
    }
  ];

const Skills = () => {
  return (
    <section className="relative w-full min-h-screen py-20 bg-black text-white overflow-hidden font-firacode">
      <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold px-5 m-auto text-white-custom text-left w-full font-firacode 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px] 
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px]">Skillset</h1>
        <p className="text-gray-400 mt-2 mx-8 max-sm:mx-5 ">Crafted, Deployed & Automated</p>
      </div>

      <br />

      <div className='flex flex-col flex-wrap gap-6 w-full justify-center items-center'>

        {skillSet.map(({ name, skills }, index) => (
          <div className='hover:bg-white-custom hover:text-black-custom bg-black text-white
                    transition-all duration-300 ease-in-out
                    rounded-[30px] p-6
                    font-firacode
                    w-[80vw] max-sm:w-[90vw]
                    shadow-lg shadow-gray-800' key={index}>
            <h1 className='text-[20px] lg:text-[25px] mb-5'>{name}:</h1>
            <div className='flex flex-wrap gap-6'>
              {skills.map((skill) => (
                <div key={Math.random()} className="flex flex-row flex-nowrap justify-center items-center gap-[5px]">
                  <Image src={skill.src} alt={skill.name} width={20} height={20} className={`rounded-[20px] w-[35px] h-auto max-sm:w-[25px] object-cover shadow-xl shadow-white/20 `} />
                  <span className="text-sm max-sm:text-xs">{skill.name} </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="h-20"></div>
    </section>
  );
};

export default Skills;