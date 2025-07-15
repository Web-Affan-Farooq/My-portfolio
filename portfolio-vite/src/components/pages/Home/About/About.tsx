import { ArrowUp } from "lucide-react"

const MainAbout = () => {
    return (
        <>
        <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto ">
                        <h1 className='px-5 m-auto text-white-custom text-left w-full font-firacode font-bold 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px] 
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px]'>
                About me
            </h1>
        </div>
            <div className='flex flex-row max-sm:flex-col justify-between lg:justify-evenly items-center gap-10 p-6'>
                <div className="sm:w-1/2 md:w-1/2">
                    <p className="text-gray-400 max-sm:w-full">
                        I'm <em className='text-white'>Muhammad Affan</em>, a
                        <span className='text-white font-semibold'> full-stack developer </span> based in
                        <b className='text-white font-semibold'> Pakistan</b> with a passion for building clean, scalable, and efficient software solutions.
                        I have a solid understanding of <span className='text-white'>software design</span> and <span className="text-white">architecture</span>,
                        and I love turning complex problems into elegant code. With strong capabilities, I am specializing in creating seamless
                        user experiences and robust backend logic. I'm always exploring new technologies and sharpening my problem-solving abilities.
                    </p>
                    <br />
                    {/* <a href={"/projects"} className='flex items-center gap-2 border border-white'> */}
                    <div className="flex flex-row flex-nowrap justify-start items-center">
                                                <button className="bg-white-custom rounded-[40px] text-black lg:px-[100px] md:px-[80px] sm:px-[40px] max-sm:px-[30px] py-[13px]">
                            <i>Download CV</i>
                        </button>
                        <button className='text-center flex justify-center items-center bg-white-custom rounded-full w-[50px] h-[50px]'>
                            <ArrowUp size={35} className='font-bold rotate-90' />
                        </button>
                    </div>
                    {/* </a> */}
                </div>
                {/* Right Content: Image */}
                <div className="flex justify-center items-center">
                    <img
                        src={"/icons/vite.svg"}
                        alt='host-image'
                        width={400}
                        height={400}
                        className='rounded-[40px] lg:w-[400px] md:w-[300px] sm:w-[200px] max-sm:w-[200px] h-auto object-cover shadow-md shadow-gray-800'
                    />
                </div>
            </div>
        </>
    )
}


const About = () => {
    return (
        <section className='w-full'>
            <MainAbout />
            {/* Bottom spacing */}
            <div className="h-[100px]"></div>
        </section>
    )
}

export default About;

/*
                <img
                    src={"/public/vite.svg"}
                    alt='host-image'
                    width={400}
                    height={400}
                    className='rounded-[40px] w-full max-w-[400px] h-auto object-cover shadow-md shadow-gray-800'
                />
*/

// const About = () => {
//     return (
//         <section className="border-2 border-solid border-white my-10 px-[10px]">
//             {/* Spacing */}
//             <div className="h-[100px] sm:h-[200px]" />

//             {/* Header Section */}
//             <div className="flex flex-row flex-nowrap justify-between items-center">
//                 <p className="text-[15px]">
//                     Myself &nbsp;
//                     <span className="font-bold text-white uppercase">Muhammad Affan</span>
//                 </p>

//                 <h1 className="text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
//                     About me
//                 </h1>
//             </div>

//             {/* Content Section */}
//             <div className="mt-10">
//                 <h2 className="uppercase text-[20px] font-semibold text-gray-400">
//                     Heading kjkdfjd fdifjdf ddfld fdlif difopdi ofpidsopf iopdsfiopds ifopdsifopi
//                 </h2>
//                 <p className="text-[15px] tracking-[0.5px] text-white mt-2">
//                     jhfjdsfh djsfh dsjfhjsdhfjdshfjkdh jfhdjhfjdhsfjdshfjhd
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default About;
