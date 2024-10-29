import React from 'react';
import Navbar from '../Navbar';
import Entries_card from './Entries-card';

const Entries = () => {
  return (
    <div className='bg-black text-white h-auto'>
        <Navbar/>
        <br />
        <br />
        <br />
        <br />
        <section className='p-5 '>
        <h1 className='text-white text-2xl font-bold'>Entries</h1>
        <br />
        <div className='flex flex-col flew-wrap justify-center align-middle'>
            <Entries_card/>
        </div>
        <br />
        <br />
        <br />
        </section>
    </div>
  )
}

export default Entries