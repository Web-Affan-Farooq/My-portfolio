"use client";
import React, { useState, useEffect, useRef } from 'react';

const Ratings = () => {
  const [count_1, setCount_1] = useState(0);
  const [count_2, setCount_2] = useState(0);
  const [count_3, setCount_3] = useState(0);

  const rateBoxRef_1 = useRef(null);
  const rateBoxRef_2 = useRef(null);
  const rateBoxRef_3 = useRef(null);

  useEffect(() => {
    const observer_1 = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let counter = 0;
          const interval = setInterval(() => {
            if (counter <= 130) {
              setCount_1(counter);
              counter++;
            } else {
              clearInterval(interval);
            }
          }, 10); // Set interval for smooth counting
        } else {
          setCount_1(0);
        }
      });
    }, { threshold: 1 });

    const observer_2 = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let counter = 0;
          const interval = setInterval(() => {
            if (counter <= 15) {
              setCount_2(counter);
              counter++;
            } else {
              clearInterval(interval);
            }
          }, 10);
        } else {
          setCount_2(0);
        }
      });
    }, { threshold: 1 });

    const observer_3 = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let counter = 0;
          const interval = setInterval(() => {
            if (counter <= 1) {
              setCount_3(counter);
              counter++;
            } else {
              clearInterval(interval);
            }
          }, 2);
        } else {
          setCount_3(0);
        }
      });
    }, { threshold: 1 });

    // Observe the actual DOM elements
    if (rateBoxRef_1.current) observer_1.observe(rateBoxRef_1.current);
    if (rateBoxRef_2.current) observer_2.observe(rateBoxRef_2.current);
    if (rateBoxRef_3.current) observer_3.observe(rateBoxRef_3.current);

    // Cleanup on component unmount
    return () => {
      if (rateBoxRef_1.current) observer_1.unobserve(rateBoxRef_1.current);
      if (rateBoxRef_2.current) observer_2.unobserve(rateBoxRef_2.current);
      if (rateBoxRef_3.current) observer_3.unobserve(rateBoxRef_3.current);
    };
  }, []);

  return (
    <div>
      <br /><br />
      <section className='text-white p-5'>
        <h1 className='text-primary text-4xl font-bold text-center'>Ratings</h1>
        <br />
        <br />
        <div className="flex flex-row flex-wrap gap-5 justify-center align-middle">
          <div className="p-5 w-60 text-center" ref={rateBoxRef_1}>
            <div className="text-5xl font-bold text-link">{count_1}+</div>
            <div>
              <h1 className='text-gray-400'>Contributions</h1>
            </div>
          </div>
          <div className="p-5 w-60 text-center" ref={rateBoxRef_2}>
            <div className="text-5xl font-bold text-link">{count_2}+</div>
            <div>
              <h1 className='text-gray-400'>Completed Projects</h1>
            </div>
          </div>
          <div className="p-5 w-60 text-center" ref={rateBoxRef_3}>
            <div className="text-5xl font-bold text-link">{count_3}K+</div>
            <div>
              <h1 className='text-gray-400'>On Linkedin</h1>
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br /><br />
    </div>
  );
}

export default Ratings;
