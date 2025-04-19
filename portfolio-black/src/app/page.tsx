"use client";

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Articles from '@/components/Articles/Articles';
import { useEffect } from 'react';
import Lenis from 'lenis';

const Home = () => {
  useEffect(() => {
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time:any) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  },[]);

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