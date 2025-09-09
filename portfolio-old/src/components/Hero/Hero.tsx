import React from "react";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <section className="bg-transparent flex flex-row flex-wrap w-full md:py-36 justify-evenly align-middle max-md:flex-col-reverse max-md:justify-start">
        <div className="p-5 text-white text-left w-[500px] max-md:w-full">
          <h1 className="font-bold text-[60px] text-[#698c6d] leading-[70px] tracking-[-2px]">
            I'm Muhammad Affan
          </h1>
          <br />
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem,
            possimus unde nobis itaque, ut quos eos iusto accusamus
            reprehenderit odit sed, corporis consectetur. Eos sint natus
            corrupti, minima optio quasi.
          </p>
          <br />
          <Button text="Hire me" />
        </div>
        <div className="p-5 w-[350px] max-md:w-full">
          <div className="hero-img bg-avatar bg-cover bg-center bg-no-repeat w-80 h-80 rounded-full m-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
