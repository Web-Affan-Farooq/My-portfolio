"use client";

import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='w-[300px] bg-black text-white'>
        <Image src={"/images/options.svg"} alt='options' width={20} height={20}/>
    </div>
  )
}

export default Sidebar