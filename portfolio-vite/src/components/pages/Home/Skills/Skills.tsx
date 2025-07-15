const Skills = () => {
    const skillsImage =
    {
        "Fullstack development":
            [
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
                    name: "Supabase",
                    src: "/icons/supabase.svg",
                    shadow: "#ffffff"
                },
            ],
        "Agentic AI":[
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
        ],
        "Devops":[
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

    return (
        <div className="text-white">
        <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
                        <h1 className='px-5 m-auto text-white-custom text-left w-full font-firacode font-bold 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px] 
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px]'>
                Skillset 
            </h1>
        </div>
            <br />

            <div className='flex flex-wrap gap-6 w-full justify-center items-center'>

                <div className='hover:bg-white-custom hover:text-black-custom bg-black text-white
                    transition-all duration-300 ease-in-out
                    rounded-[30px] p-6
                    font-firacode
                    w-[300px] max-sm:w-full
                    shadow-lg shadow-gray-800'>
                    <h1 className='text-[20px] lg:text-[25px] mb-3'>Full-stack Development:</h1>
                    <p className='flex flex-wrap gap-2'>
                        {skillsImage["Fullstack development"].map((skill,idx) => (
<div key={idx} className="flex flex-row flex-nowrap justify-center items-center gap-[5px]">
    <img src={skill.src} alt={skill.name} className={`rounded-[20px] w-[35px] h-auto object-cover shadow-md ${skill.shadow}`}/>
    <span className="text-sm">{skill.name} </span>
</div>
                        ))}
                    </p>
                </div>

                <div className='hover:bg-white-custom hover:text-black-custom bg-black text-white
                    transition-all duration-300 ease-in-out
                    rounded-[30px] p-6
                    font-firacode
                    w-[300px] max-sm:w-full
                    shadow-lg shadow-gray-800'>
                    <h1 className='text-[20px] lg:text-[25px] mb-3'>Agentic AI:</h1>
                    <p className='flex flex-wrap gap-2'>
                        {skillsImage["Agentic AI"].map((skill,idx) => (
<div key={idx} className="flex flex-row flex-nowrap justify-center items-center gap-[5px]">
    <img src={skill.src} alt={skill.name} className={`rounded-[20px] w-[35px] h-auto object-cover shadow-md ${skill.shadow}`}/>
    <span className="text-sm">{skill.name} </span>
</div>
                        ))}
                    </p>
                </div>

                <div className='hover:bg-white-custom hover:text-black-custom bg-black text-white
                    transition-all duration-300 ease-in-out
                    rounded-[30px] p-6
                    font-firacode
                    w-[300px] max-sm:w-full
                    shadow-lg shadow-gray-800'>
                    <h1 className='text-[20px] lg:text-[25px] mb-3'>Devops</h1>
                    <p className='flex flex-wrap gap-2'>
                        {skillsImage["Devops"].map((skill,idx) => (
<div key={idx} className="flex flex-row flex-nowrap justify-center items-center gap-[5px]">
    <img src={skill.src} alt={skill.name} className={`rounded-[20px] w-[35px] h-auto object-cover shadow-md ${skill.shadow}`}/>
    <span className="text-sm">{skill.name} </span>
</div>
                        ))}
                    </p>
                </div>
            </div>
            <div className="h-[100px]"></div>
        </div>
    )
}

export default Skills
