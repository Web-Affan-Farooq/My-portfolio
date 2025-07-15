import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis';
import "./style.css";

const Scroller = ({ children }: { children: React.ReactNode }) => {
    const mainElement = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!mainElement.current) return;

        // Initialize Lenis
        const lenis = new Lenis(
            {
                wrapper:mainElement.current,
                orientation:"horizontal",
            }
        );

        // Use requestAnimationFrame to continuously update the scroll
        function raf(time:any) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        
    }, []);

    return (
        <div className="scroll-container m-auto w-[96vw] overflow-x-auto overflow-y-hidden whitespace-nowrap px-4 py-8" ref={mainElement}>
            <div className="flex flex-row gap-6">
                {children}
            </div>
        </div>
    )
}


export default Scroller