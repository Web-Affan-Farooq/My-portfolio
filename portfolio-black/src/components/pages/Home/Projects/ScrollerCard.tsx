"use client";
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ScrollerCard = () => {
    const [hover, sethover] = useState(false);
    const handleHover = () => sethover(true);
    const handleLeave = () => sethover(false);

    return (
        <div
            className={`bg-blue-600 relative text-white-custom
        rounded-[15px] whitespace-normal overflow-hidden
        2xl:min-w-[600px] 2xl:h-[290px] 
        xl:min-w-[600px] xl:h-[290px] 
        lg:min-w-[530px] lg:h-[280px] 
        md:min-w-[500px] md:h-[270px] 
        sm:min-w-[450px] sm:h-[250px] 
        max-sm:min-w-[370px] max-sm:h-[220px]
        bg-[url('/images/example-blog-banner.jpeg')] bg-no-repeat bg-center bg-cover
        flex flex-row flex-nowrap justify-end items-center
      `}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <div
                className={`bg-black/50 
          absolute ${hover ? "right-0" : "right-[-100%]"} transition-all duration-500 ease-in-out
          w-[75%] h-full
          flex flex-col flex-nowrap justify-center items-start
          gap-2 px-[16px] py-[10px]
        `}
            >
                <h3
                    className='
            2xl:text-[23px]
            xl:text-[22px]
            lg:text-[21px]
            md:text-[20px]
            sm:text-[18px]
            max-sm:text-[16px]
            font-firacode font-semibold'
                >
                    The simplest example is Kafka + Golang
                </h3>
                <p
                    className='break-words
            text-[15px]
            lg:text-[15px]
            md:text-[14px]
            sm:text-[13px]
            max-sm:text-[12px]'
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dflsdfl;skdfl;ksdl;fksl;dkf;lsdkfl;ksdl;fkl;sdkfl;sdkl;fkl;dkfl;kdsl;fk;sdkicta facilis, delectus, ut possimus at animi id, nam dolor corrupti
                </p>

                <div className='button-container flex items-center gap-2'>
                    <button
                        className='bg-white-custom text-black
              rounded-[40px] py-[11px]
              2xl:px-[60px]
              xl:px-[55px]
              lg:px-[50px]
              md:px-[45px]
              sm:px-[40px] sm:py-[10px]
              max-sm:px-[35px] max-sm:py-[8px]
              text-[14px] max-sm:text-[12px]'
                    >
                        <i>Read more</i>
                    </button>
                    <button className='bg-white-custom rounded-full'>
                        <IoIosArrowRoundForward
                            size={38}
                            className='text-black transition-all duration-300'
                        />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ScrollerCard;
