"use client";

import React, {useState} from 'react';
import Link from 'next/link';

const Header = () => {
  const [navstatus, setnavstatus] = useState<boolean>(false);
  const handleNav = () => {
    if(window.innerWidth < 780) {
      setnavstatus(!navstatus);
    }
  }
  return (
      <div>
        <header className={`w-full fixed z-10 bg-glass backdrop-blur-[20px] bg-opacity-100 px-20 py-3 max-md:px-16 max-sm:px-12 ${navstatus? "h-[55vh]" : ""}`}>
          <nav className={`flex justify-between items-center leading-4 `}>
            <div className='flex flex-row flex-nowrap justify-center items-center w-[50px] h-[50px] rounded-full gap-3'>
            {/* <span className='font-bold text-[30px] text-greenlight'>Affan </span> */}
            <div className='w-[50px] h-[50px] bg-logo bg-center bg-no-repeat bg-cover rounded-[50%]'>
            {/* <Image src={"/images/logo.jpeg"} alt='logo' width={50} height={50} className='rounded-full w-[50px] h-[50px] object-cover object-left'/> */}
            </div>
            </div>
            {/* <div className='text-3xl font-bold text-primary'>Affan .</div> */}

            {/* <div className={`${navstatus? "hidden" : "block"} text-primary text-left absolute top-[150px] left-[10px] bg-black px-8 py-4 rounded-xl`}>
              <Link href={""}>
              <i className="fa-solid fa-flask"></i> <span className='text-[12px]'>Admin is online</span>
              </Link>
            </div> */}

            <div className={`${navstatus? "flex" : "hidden"} flex-col md:flex md:flex-row gap-10 md:gap-8 md:bg-transparent absolute md:static w-full h-[40vh] md:h-auto top-[120px] left-0 md:w-auto`}>
              <div className='nav-options text-center py-2.5 px-2 font-normal text-link'>
                <Link href={'/'}> <span onClick={handleNav}>Home</span> </Link>
              </div>
              <div className='nav-options text-center py-2.5 px-2 font-normal text-link'>
                <Link href={'#projects'}> <span  onClick={handleNav}>Projects</span> </Link>
              </div>
              <div className='nav-options text-center py-2.5 px-2 font-normal text-link'>
                <Link href={'/Contact'}> <span  onClick={handleNav}>Contact</span> </Link>
              </div>
              <div className='nav-options text-center py-2.5 px-2 font-normal text-link'>
                <Link href={'/'}> <span onClick={handleNav}>Explore</span> </Link>
              </div>
            </div>
            <div id='menu-icon' onClick={handleNav} className='md:hidden text-primary text-[25px] font-normal'>
                {navstatus? (
                  <i className="fa-solid fa-xmark"></i>
                ): (
                  <i className="fa-solid fa-bars"></i>
                )}
              </div>
          </nav>
        </header>
      </div>
  )
};
export default Header;