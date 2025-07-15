"use client";
import { useEffect } from 'react';
import Lenis from 'lenis';
import { HeroSection , AboutSection , SkillsSection , ServicesSection  } from '@/components/pages/';
    
const Home = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <article>
        <HeroSection />
        <AboutSection/>
        <SkillsSection/>
        <ServicesSection/>

        {/* <ProjectsScroll>
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
        </ProjectsScroll> */}
        {/* <Articles /> */}
      </article>
    </main>
  )
}

export default Home