import React from "react";
import Services_card from "./Services-card";

const Services = () => {
  return (
    <section className="p-5">
      <h1 className="text-white text-center text-4xl font-bold">
        My<span className="text-primary"> Services</span>
      </h1>
      <br />
      <h2 className="text-center text-gray-400 text-2xl font-bold">
        Hire me and my team for:
      </h2>
      <div className="flex flex-row flex-wrap gap-5 justify-center align-middle p-5">
        <Services_card
          cardTitle="Design To Code"
          cardDescription="I transform creative designs into responsive, pixel-perfect websites, ensuring every detail is accurately translated into clean, scalable code for a flawless user experience."
        />
        <Services_card
          cardTitle="UI UX Design"
          cardDescription="I create stunning, user-centric designs tailored to your brand, blending aesthetics and functionality for seamless digital experiences across devices."
        />
        <Services_card
          cardTitle="Frontend Development"
          cardDescription="I craft engaging, responsive interfaces using modern tools like React and Next.js, delivering smooth navigation and visually appealing websites."
        />
        <Services_card
          cardTitle="Backend Development"
          cardDescription="jhjhff efhjefef ef ehfejf ejhfjehf efjhejhfe fjkehjfhjekf jehfjkefe fhefjhe fhejfh jdjfds fskdjflkdsfjdfnd fdkjflkdf dsklfjsdlfjkds fdklfjdlkfjd fdjfkldjfk dsfhj jfhjdsf dfjhdsjf"
        />
        <Services_card
          cardTitle="Online Maintanance And Management"
          cardDescription="I develop secure, scalable backend systems using Node.js, ensuring efficient data flow, robust integrations, and seamless functionality for your web applications."
        />

      </div>
    </section>
  );
};

export default Services;