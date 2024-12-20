"use client";

import React, {useState} from 'react';
import Link from 'next/link';

const Header = () => {
  const [navstatus, setnavstatus] = useState<boolean>(false);
  const handleNav = () => {
    if(window.innerWidth < 768) {
    setnavstatus(!navstatus);
    }
  }
  return (
      <div>
        <header className={`w-full fixed z-10 bg-glass backdrop-blur-2xl bg-opacity-100 px-9 py-5 ${navstatus? "h-[55vh]" : ""} `}>
          <nav className={`flex justify-between items-center leading-4 h-auto`}>
            <div className='text-3xl font-bold text-primary'>Affan .</div>

            {/* <div className={`${navstatus? "hidden" : "block"} text-primary text-left absolute top-[150px] left-[10px] bg-black px-8 py-4 rounded-xl`}>
              <Link href={""}>
              <i className="fa-solid fa-flask"></i> <span className='text-[12px]'>Admin is online</span>
              </Link>
            </div> */}

            <div className={`${navstatus? "flex" : "hidden"} flex-col md:flex md:flex-row gap-10 md:gap-8 md:bg-transparent absolute md:static w-full h-[40vh] md:h-auto top-[120px] left-0 md:w-auto`}>
              <div className='nav-options text-center py-2.5 px-2 font-normal text-link'>
                <Link href={'/'} onClick={handleNav}>Home</Link>
              </div>
              <div className='nav-options text-center py-2.5 px-2 font-normal text-link'>
                <Link href={'/Projects'} onClick={handleNav}>Projects</Link>
              </div>
              <div className='nav-options text-center py-2.5 px-2 font-normal text-link'>
                <Link href={'/Contact'} onClick={handleNav}>Contact</Link>
              </div>
              <div className='nav-options text-center py-2.5 px-2 font-normal text-link'>
                <Link href={'/'} onClick={handleNav}>Explore</Link>
              </div>
            </div>
            <div id='menu-icon' onClick={handleNav} className='md:hidden text-primary text-3xl font-bold'>
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