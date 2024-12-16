import React from 'react';
import Button from '../Button/Button';

const About = () => {
  return (
    <div>
      <section className='p-5 text-white w-full py-20 text-center'>
        <h1 className='text-5xl font-bold text-center'>About <span className='text-primary'> me</span></h1>
        <br /><br /><br />
        <p className='text-gray-400 text-center tracking-wider text-[16px]'>
        I am Muhammad Affan, a passionate <span className='text-link font-bold'>Frontend</span>, and <span className='text-link font-bold'>Backend Developer</span>, skilled in various technologies like <span className='text-link font-bold'>Typescript</span> , <span className='text-link font-bold'>Node.JS</span> and <span className='text-link font-bold'>React.JS</span>. From designing to converting the ideas into reality, I am strongly focused on developing  <span className='text-link font-bold'>functional</span>,  <span className='text-link font-bold'>responsive</span>, and user-friendly web applications, I transform ideas into seamless digital experiences. My journey includes hands-on projects, hackathon participation, and ongoing learning in modern web technologies. Whether it's translating designs into code, creating interactive web components, or building scalable applications, I am dedicated to delivering high-quality solutions.
                </p>
        <br /><br />
        <Button text="Hire me"/>
      </section>
    </div>
  )
}

export default About