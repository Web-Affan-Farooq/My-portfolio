import React from 'react';
import Button from '../Button/Button';
import "./style.css";


const About = () => {
  return (
    <div className='flex flex-row flex-nowrap justify-center items-center'>
      <section className='section-2 text-white w-[85vw] py-20 flex flex-col flex-nowrap justify-start items-start'>
        <h1 className='text-[100px] leading-[80px] font-semibold relative right-[10px] max-sm:text-[80px] max-sm:leading-[68px] max-md:text-[80px] max-md:leading-[70px] w-[70vw] max-lg:w-[80vw] max-md:w-full'> Beyond The <span className='text-primary'> Resume</span></h1>
        <br />
      <div className='w-[500px] max-sm:w-[400px] max-[500px]:w-[350px]'>
      <h2 className='text-[26px]'> Here’s a bit <span className='text-greenlight font-normal'>About Me</span> and what I bring to the table .</h2>
      </div>
      <br />
        <p className='text-gray-400'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dolorum ullam inventore aliquid harum maiores sint quasi sunt ab, et esse neque natus odio. Mollitia accusantium provident velit asperiores facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam officiis ut veniam? Hic, minima vel eos, corporis autem nesciunt quas aliquid fuga ab quibusdam officiis. Dolorem nostrum voluptates laboriosam?
        </p>
        <br /><br />
        <div className='text-center'>
        <Button text="Hire me" className='m-auto'/>
        </div>
      </section>
    </div>
  )
}

export default About;