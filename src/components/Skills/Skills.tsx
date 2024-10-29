import React from 'react';
import Image from 'next/image';

const Skills = () => {
    return (
        <section className='text-white p-5'>
            <h1 className='text-5xl font-bold text-center'>My<span className='text-primary'> Skills</span></h1>
            <br />
            <br />
            <div className='flex flex-row flex-wrap justify-center align-middle gap-0'>
                <div className='px-5 py-2 rounded-lg w-15 h-15'>
                <Image src={'/images/typescript.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/figma.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/canva.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/nodejs.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/express.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/reactjs.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/nextjs.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/html.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/css.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/javascript.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/tailwind.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/shadcn.png'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
                <div className='px-5 py-2 rounded-lg'>
                <Image src={'/images/git.svg'} alt='html' width={40} height={40} className='object-cover'/>
                </div>
            </div>
        </section>
    )
}

export default Skills;