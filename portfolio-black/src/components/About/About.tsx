import React from 'react';
import Image from 'next/image';

const UpperHead = () => {
    return (
        <div className='flex flex-row flex-nowrap justify-center items-center gap-[20px]'>
            <div className='text-white
            w-[50%] px-[30px] py-[40px]
            '>
                {"...  /About me ..."}
            </div>
            <div className='w-[50%] px-[30px] py-[40px]'>
                <p className='lg:w-[50%] md:w-[70%] sm:w-[70%] max-sm:w-[90%]'>
                    Hello! , {"I'm"} <em className='text-white'>Muhammad affan</em>, {"I'm"} a remote full-stack developer based in <b className='text-white font-semibold'>Pakistan</b>
                </p>
            </div>
        </div>
    )
}

const MainAbout = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10 p-6'>
            {/* Left Content: Cards */}
            <div className='flex flex-col gap-6 w-full lg:w-1/2'>
                {/* Full-stack Card */}
                <div className='hover:bg-white-custom hover:text-black-custom bg-black text-white
                    transition-all duration-300 ease-in-out
                    rounded-[30px] p-6
                    font-firacode
                    w-full max-w-[600px]
                    shadow-md shadow-gray-800 border border-gray-700'>
                    <h1 className='text-[25px] lg:text-[30px] mb-3'>Full-stack Development:</h1>
                    <p className='flex flex-wrap gap-2'>
                        <span>Typescript</span>/<span>React</span>/<span>Next.JS</span>/<span>TailwindCSS</span>/
                        <span>HTML</span>/<span>CSS</span>/<span>Node.JS</span>/<span>Express.JS</span>/
                        <span>Javascript</span>/<span>Supabase</span>
                    </p>
                </div>

                {/* AI Card */}
                <div className='hover:bg-white-custom hover:text-black-custom bg-black text-white
                    transition-all duration-300 ease-in-out
                    rounded-[30px] p-6
                    font-firacode
                    w-full max-w-[600px]
                    shadow-md shadow-gray-800 border border-gray-700'>
                    <h1 className='text-[25px] lg:text-[30px] mb-3'>Agentic AI Development:</h1>
                    <p className='flex flex-wrap gap-2'>
                        <span>Python</span>/<span>Streamlit</span>/<span>Pandas</span>
                    </p>
                </div>

                {/* Tools Card */}
                <div className='hover:bg-white-custom hover:text-black-custom bg-black text-white
                    transition-all duration-300 ease-in-out
                    rounded-[30px] p-6
                    font-firacode
                    w-full max-w-[600px]
                    shadow-md shadow-gray-800 border border-gray-700'>
                    <h1 className='text-[23px] lg:text-[30px] mb-3'>Tools:</h1>
                    <p className='flex flex-wrap gap-2'>
                        <span>Github</span>/<span>Vercel</span>/<span>Netlify</span>
                    </p>
                </div>
            </div>

            {/* Right Content: Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <Image
                    src={"/images/host.jpeg"}
                    alt='host-image'
                    width={400}
                    height={400}
                    className='rounded-[40px] w-full max-w-[400px] h-auto object-cover shadow-md shadow-gray-800'
                />
            </div>
        </div>
    )
}


const About = () => {
    return (
        <section className='w-full'>
            <UpperHead />
            <MainAbout />
            {/* Bottom spacing */}
            <div className="h-[200px]"></div>
        </section>
    )
}

export default About