"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";

const SlidingWindow = ({children}:{children:React.ReactNode}) => {
    
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

    return (
        <>
        {children}
        </>
    )
}
export default SlidingWindow;