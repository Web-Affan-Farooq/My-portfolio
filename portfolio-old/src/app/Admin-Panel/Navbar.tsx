"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [navStatus, setnavStatus] = useState<boolean>(false);

    useEffect(() => {
        function resizeComponent () {
            if(window.innerWidth <= 870) {
                setnavStatus(true);
            }
        }
        window.addEventListener("resize", resizeComponent);
        return window.removeEventListener("resize", resizeComponent);
    });
    const handleHide = () => {
       if(window.innerWidth <870) {
        setnavStatus(!navStatus);
       }
    }
    // -----------------------> testing function
    // useEffect(() => {
    //     console.log(navStatus);
    // },[navStatus]);

    return (
        <header className='w-full fixed p-5 text-white bg-black flex flex-row flex-wrap justify-between items-center gap-3 px-[30px]'>

            {/* profile icon */}
            <div className='flex flex-row flex-nowrap justify-center items-center gap-3 w-[200px] '>
                {/* profile circle */}
                <div className='w-12 h-12 rounded-full bg-avatar bg-no-repeat bg-center bg-cover'>
                    <div className='w-3 h-3 rounded-full bg-link'></div>
                </div>
                <div className='text-center text-white font-semibold'>
                    Admin panel
                </div>
            </div>

            {/* navbar */}
            <div className={` bg-black rounded-lg flex flex-row flex-wrap justify-center items-center gap-5 ${navStatus? "hidden" : "flex"} max-[870px]:flex-col max-[870px]:absolute max-[870px]:top-24 max-[870px]:right-10 max-[870px]:items-start max-[870px]:p-5 max-[870px]:gap-0 transition-0.4`}>

                <Link href={'/'} className='flex flex-row flex-nowrap justify-center items-center gap-2 hover:text-gray-400 transition-0.3 max-[870px]:hover:bg-gray-600 max-[870px]:w-full max-[870px]:justify-start max-[870px]:py-2 max-[870px]:px-2 max-[870px]:rounded-md max-[870px]:hover:text-white' onClick={handleHide}><i className="fa-solid fa-house text-[13px]"></i> Home</Link>

                <Link href={'/Admin-Panel'} className='flex flex-row flex-nowrap justify-center items-center gap-2 hover:text-gray-400 transition-0.3 max-[870px]:hover:bg-gray-600 max-[870px]:w-full max-[870px]:justify-start max-[870px]:py-2 max-[870px]:px-2 max-[870px]:rounded-md max-[870px]:hover:text-white' onClick={handleHide}>
                <Image src={"/images/options.svg"} alt='options' width={15} height={15}/>
                Dashboard</Link>

                <Link href={'/Admin-Panel/Entries'} className='flex flex-row flex-nowrap justify-center gap-2 items-center hover:text-gray-400 transition-0.3 max-[870px]:hover:bg-gray-600 max-[870px]:w-full max-[870px]:justify-start max-[870px]:py-2 max-[870px]:px-2 max-[870px]:rounded-md max-[870px]:hover:text-white' onClick={handleHide}><i className="fa-solid fa-table text-[13px]"></i> Entries</Link>

                <Link href={'/Admin-Panel/Form-submissions'} className='flex flex-row flex-nowrap gap-2 justify-center items-center hover:text-gray-400 transition-0.3 max-[870px]:hover:bg-gray-600 max-[870px]:w-full max-[870px]:justify-start max-[870px]:py-2 max-[870px]:px-2 max-[870px]:rounded-md max-[870px]:hover:text-white' onClick={handleHide}><i className="fa-regular fa-bell text-[13px]"></i> Form Submissions</Link>

                <Link href={'/Admin-Panel/Settings'} className='flex flex-row flex-nowrap justify-center gap-2 items-center hover:text-gray-400 transition-0.3 max-[870px]:hover:bg-gray-600 max-[870px]:w-full max-[870px]:justify-start max-[870px]:py-2 max-[870px]:px-2 max-[870px]:rounded-md max-[870px]:hover:text-white' onClick={handleHide}><i className="fa-solid fa-gear text-[13px]"></i> Settings</Link>

            </div>

            {/* options icon that should be shown on mobile screens */}
            <div className='absolute bg-gray-600 w-[23px] h-[23px] text-center rounded-full right-10 hidden flex-row flex-nowrap justify-center items-center max-[870px]:flex ' onClick={handleHide}>
                <i className="fa-solid fa-ellipsis-vertical text-[18px] font-bold"></i>
            </div>

        </header>
    )
}

export default Navbar;
