"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Notification = () => {
    const [noteHide, setnoteHide] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setnoteHide(true);            
        }, 5000);
    });

    return (
        <Link href={'/'}>
            <div className={`w-80 py-3 px-6 top-10 left-5 absolute rounded-xl bg-glass backdrop-blur-xl bg-opacity-50 z-10 transition-0.4 ${noteHide? "hidden":"block"}`}>
                <span className='text-[12px] font-bold text-link'>New Form Submission</span>
                <h1 className=''>{new Date().toDateString()}</h1>
                <p className='text-gray-400 text-[15px] max-md:text-[12px]'>Explore who is requesting services <span className='text-link'>...</span></p>
            </div>
        </Link>
    )
}

export default Notification;