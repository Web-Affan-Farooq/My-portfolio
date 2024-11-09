import React from 'react';
import Button from '../Button/Button';

const About = () => {
  return (
    <div>
      <section className='p-5 text-white w-full py-20 text-center'>
        <h1 className='text-5xl font-bold text-center'>About <span className='text-primary'> me</span></h1>
        <br /><br /><br />
        <p className='text-gray-400 text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolorum ullam inventore aliquid harum maiores sint quasi sunt ab, et esse neque natus odio. Mollitia accusantium provident velit asperiores facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam officiis ut veniam? Hic, minima vel eos, corporis autem nesciunt quas aliquid fuga ab quibusdam officiis. Dolorem nostrum voluptates laboriosam?
        </p>
        <br /><br />
        <Button text="Hire me"/>
      </section>
    </div>
  )
}

export default About