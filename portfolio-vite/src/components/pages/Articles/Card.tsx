import React from 'react'
// import {IoIosArrowRoundForward} from "react-icons/io";
import { ArrowBigRight } from 'lucide-react';
import Link from 'next/link';

interface Icard {
    title:string;
    id:string;
    headline:string;
}

const Card = ({title, id, headline}:Icard) => {
    return (
        <div className="border border-light-gray rounded-2xl p-6 w-full max-w-md">
            <h2 className="text-white-custom font-semibold text-xl mb-2">
                {title} 
            </h2>
            <p className="text-light-gray mb-4">
                {headline}
            </p>
            <Link href={id}>
            <div className='w-full flex items-center gap-2'>
                <button className='bg-white-custom text-black rounded-[40px] py-[13px]
                    lg:px-[70px] 
                    md:px-[60px]
                    sm:px-[50px] sm:py-[11px]
                    max-sm:px-[50px] max-sm:py-[11px]'>
                    <i className='break-none'>Read more</i>
                </button>
                <button className='bg-white-custom rounded-full'>
                    <ArrowBigRight size={50} />
                </button>
            </div>
            </Link>
        </div>
    )
}

export default Card
