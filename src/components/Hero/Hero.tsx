import React from 'react';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <div>
        <br /><br /><br /><br />
        <section className='bg-transparent flex flex-row flex-wrap w-full px-5 py-7 md:py-36 justify-between align-middle max-md:flex-col-reverse max-md:justify-start'>
            <div className='p-5 text-white text-left w-3/6 max-md:w-full'>
            <h1 className='text-5xl font-bold leading-13'>I'm </h1><br /><h1 className='text-5xl font-bold text-primary'>Muhammad Affan</h1>
            <br />
            <br />
            <p className='text-gray-400'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, possimus unde nobis itaque, ut quos eos iusto accusamus reprehenderit odit sed, corporis consectetur. Eos sint natus corrupti, minima optio quasi.
            </p>
            <br />
            <Button text='Hire me'/>
            </div>
            <div className='p-5 w-1/2 max-md:w-full'>
            <div className='bg-avatar bg-cover bg-center bg-no-repeat w-80 h-80 rounded-full m-auto'></div>
            </div>
        </section>
    </div>
  )
}

export default Hero