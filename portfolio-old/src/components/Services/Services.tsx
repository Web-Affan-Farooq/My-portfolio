import React from "react";
import Services_card from "./Services-card";
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="w-[85vw] mx-auto md:py-36">
      <br />
      <br />
      <h1 className="font-bold text-[60px] text-[#698c6d] leading-[70px] tracking-[-2px]">
        My Services
      </h1>
      <h2 className="mt-3 px-[20px]">What I'll do for you ? </h2>
      <br />
      <div className="flex flex-row flex-wrap gap-5 justify-center align-middle p-5">
        {services.map((service, idx) => (
          <Services_card
            key={idx}
            cardTitle={service.title}
            cardDescription={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
