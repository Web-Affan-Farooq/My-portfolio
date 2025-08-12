"use client"
// import { IoIosArrowRoundForward } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import { ArrowUp } from "lucide-react";

import gsap from "gsap";

const HeroText = () => {
    useGSAP(() => {
        // GSAP animation for desktop and tablets
        gsap.fromTo(".banner-head", { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 });

        // GSap animation for mobile and smaller screens 
        gsap.fromTo(".banner-mobile", { opacity: 0, y: 100, duration: 0.8, stagger: 0.3 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.3 });

    });
    return (
        <section className='w-full'>
            {/* Desktop View */}
            <div className='m-auto 2xl:w-[85vw] xl:w-full max-md:hidden'>

                <div className="overflow-hidden 
                2xl:h-[170px]
                xl:h-[150px]">
                    <div className='banner-head flex
                lg:justify-evenly
                md:justify-evenly
                items-center
                '>
                        <h1 className='text-white-custom
                    font-firacode font-bold 
                    2xl:text-[130px]
                    xl:text-[120px]
                    lg:text-[100px]
                    md:text-[77px]
                    sm:text-[50px]
                    max-sm:text-[40px]'>
                            Full-stack
                        </h1>

                        <a href={"/projects"} className='flex items-center gap-2'>
                            <button className="bg-white-custom rounded-[40px] text-black lg:px-[100px] md:px-[80px] py-[13px]">
                                <i>Projects</i>
                            </button>
                            <button className='text-center flex justify-center items-center bg-white-custom rounded-full w-[50px] h-[50px]'>
                                <ArrowUp size={35} className='font-bold rotate-90' />
                            </button>
                        </a>

                    </div>
                </div>

                <div className="overflow-hidden 
                2xl:h-[170px]
                xl:h-[160px]">
                    <div className='banner-head overflow-y-hidden flex 
                lg:justify-evenly
                md:justify-evenly
                items-center'>
                        <div className='lg:w-[400px]
                     md:w-[300px]
                    text-left'>
                            <p className="text-[15px] text-gray-400 tracking-[0.5px]">
                                My goal is to <i className='text-white-custom'>write maintainable, clean</i> and <i className='text-white-custom'>understandable code</i> to make the development process enjoyable.
                            </p>
                        </div>
                        <h1 className='text-white-custom 
                    font-firacode font-bold 
                    2xl:text-[130px]
                    xl:text-[120px]
                    lg:text-[100px]
                    md:text-[77px]
                    sm:text-[50px]
                    max-sm:text-[40px]'>
                            Developer
                        </h1>
                    </div>
                </div>

            </div>

            {/* Mobile View */}
            <div className='flex flex-col justify-center items-start sm:p-10 max-sm:p-4 max-[400px]:p-0 gap-5 md:hidden'>
                <div className='w-full'>
                    <div className="max-[400px]:h-[70px] h-[100px] overflow-hidden">
                        <h1 className='banner-mobile text-white-custom font-firacode font-bold text-[70px] max-[500px]:text-[55px] max-[400px]:text-[45px]'>
                            Full-stack
                        </h1>
                    </div>
                    <div className="max-[400px]:h-[70px] h-[100px] overflow-hidden w-full">
                        <h1 className='banner-mobile ml-16 max-[400px]:ml-0 text-white-custom font-firacode font-bold text-[70px] max-[500px]:text-[55px] max-[400px]:text-[45px]'>
                            Developer
                        </h1>
                    </div>
                </div>

                <div className='overflow-hidden text-[20px] sm:w-[400px] max-sm:w-full text-left '>
                    <p className="banner-mobile text-[15px] text-gray-400 tracking-[0.5px]">
                        My goal is to <i className='text-white-custom'>write maintainable, clean</i> and <i className='text-white-custom'>understandable code</i> to make the development process enjoyable.
                    </p>
                </div>

                <div className="h-[60px] overflow-hidden">

                    <a href={"/projects"} className='banner-mobile flex items-center gap-2'>
                        <button className='bg-white-custom  rounded-[40px] text-black 
                    sm:px-[70px] sm:py-[13px]
                    max-sm:px-[55px] max-sm:py-[11px]
                    '>
                            <i>Projects</i>
                        </button>
                        <button className='text-center flex justify-center items-center bg-white-custom rounded-full w-[50px] h-[50px]'>
                            <ArrowUp size={35} className='font-bold rotate-90' />
                        </button>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default HeroText;