import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects-showcase/Projects';
import Services from '@/components/Services/Services';
import Ratings from '@/components/Ratings/Ratings';
import Follow from '@/components/Follow/Follow';

const Home = () => {
  return (
    <div className="bg-desktop bg-no-repeat bg-center bg-cover max-md:bg-mobile w-full h-auto">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <Feed/> */}
      <Services/>
      <Ratings/>
      <Follow/>
      <Footer/>
    </div>
  )
}

export default Home;