"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [hide, sethide] = useState(true);
    const handleHide = () => {
        sethide(!hide);
    }
    return (
        <header className='p-5 fixed w-full text-white bg-black'>
            <nav className='flex flex-row flew-wrap justify-between align-middle max-md:flex-col'>
                <div className='flex flex-row flex-nowrap justify-start align-middle'><div className='w-12 h-12 rounded-full bg-avatar bg-no-repeat bg-center bg-cover'>
                    <div className='w-3 h-3 rounded-full bg-link'></div>
                </div><div className='w-40 relative top-3 text-center box-border h-12 text-white font-semibold'>Affan's panel</div> </div>
                <div className={`flex flex-row flew-wrap gap-5 relative top-3 max-md:absolute max-md:top-20 max-md:right-0 max-md:flex-col max-md:${hide? "hidden" : "flex"} bg-black md:bg-transparent rounded-3xl max-md:p-5`}>
                    <Link href={'/'} className='hover:text-gray-400 transition-0.3'><i className="fa-solid fa-house text-[13px]"></i> Go to Home</Link>

                    <Link href={'/Admin-Panel/Entries'} className='hover:text-gray-400 transition-0.3'><i className="fa-solid fa-table text-[13px]"></i> Entries</Link>

                    <Link href={'/Admin-Panel/Settings'} className='hover:text-gray-400 transition-0.3'><i className="fa-solid fa-gear text-[13px]"></i> Settings</Link>

                    <Link href={'/Admin-Panel/Form-submissions'} className='hover:text-gray-400 transition-0.3'><i className="fa-solid fa-check text-[13px]"></i> Form Submissions</Link>

                    <Link href={'/Admin-Panel'} className='hover:text-gray-400 transition-0.3'>Dashboard</Link>
                </div>
                <div className='text-white md:hidden block absolute right-5 top-7 font-bold text-2xl' onClick={handleHide}>
                    <i className="fa-solid fa-ellipsis-vertical"></i>  {/* more options icon */}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;