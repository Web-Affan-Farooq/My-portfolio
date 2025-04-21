"use client";

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Articles from '@/components/Articles/Articles';
import { useEffect } from 'react';
import Lenis from 'lenis';

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
        <Hero />
        <About />
        <Articles />
      </article>
    </main>
  )
}

export default Home