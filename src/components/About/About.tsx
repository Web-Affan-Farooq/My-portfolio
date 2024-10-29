import React from 'react';
import Button from '../Button/Button';

const About = () => {
  return (
    <div>
        <section className='p-5 text-white w-full py-20 text-center'>
            <h1 className='text-5xl font-bold text-center'>About <span className='text-primary'>me</span></h1>
            <br />
            <br />
            <br />
            <p className='text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta ratione sunt non velit facere quas debitis et deleniti, eos, tenetur quasi ipsum reiciendis unde! Expedita qui adipisci voluptatibus quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum sunt culpa sed possimus quos minima suscipit exercitationem. Voluptatibus ea cumque esse id cum autem ipsa asperiores, aperiam unde rem?</p>
            <br />
            <br />
            <Button text='Hire me'/>
        </section>
    </div>
  )
}

export default About