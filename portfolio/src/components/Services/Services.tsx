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
        Hire me and my team for:{" "}
      </h2>
      <div className="flex flex-row flex-wrap gap-5 justify-center align-middle p-5">
        <Services_card
          cardTitle="Design To Code"
          cardDescription="jhjhff efhjefef ef ehfejf ejhfjehf efjhejhfe fjkehjfhjekf jehfjkefe fhefjhe fhejfh jdjfds fskdjflkdsfjdfnd fdkjflkdf dsklfjsdlfjkds fdklfjdlkfjd fdjfkldjfk dsfhj jfhjdsf dfjhdsjf"
        />
        <Services_card
          cardTitle="Web Design"
          cardDescription="jhjhff efhjefef ef ehfejf ejhfjehf efjhejhfe fjkehjfhjekf jehfjkefe fhefjhe fhejfh jdjfds fskdjflkdsfjdfnd fdkjflkdf dsklfjsdlfjkds fdklfjdlkfjd fdjfkldjfk dsfhj jfhjdsf dfjhdsjf"
        />
        <Services_card
          cardTitle="Frontend Development"
          cardDescription="jhjhff efhjefef ef ehfejf ejhfjehf efjhejhfe fjkehjfhjekf jehfjkefe fhefjhe fhejfh jdjfds fskdjflkdsfjdfnd fdkjflkdf dsklfjsdlfjkds fdklfjdlkfjd fdjfkldjfk dsfhj jfhjdsf dfjhdsjf"
        />
        <Services_card
          cardTitle="Backend Development"
          cardDescription="jhjhff efhjefef ef ehfejf ejhfjehf efjhejhfe fjkehjfhjekf jehfjkefe fhefjhe fhejfh jdjfds fskdjflkdsfjdfnd fdkjflkdf dsklfjsdlfjkds fdklfjdlkfjd fdjfkldjfk dsfhj jfhjdsf dfjhdsjf"
        />
        <Services_card
          cardTitle="Customized Online Product Development"
          cardDescription="jhjhff efhjefef ef ehfejf ejhfjehf efjhejhfe fjkehjfhjekf jehfjkefe fhefjhe fhejfh jdjfds fskdjflkdsfjdfnd fdkjflkdf dsklfjsdlfjkds fdklfjdlkfjd fdjfkldjfk dsfhj jfhjdsf dfjhdsjf"
        />
        <Services_card
          cardTitle="Website Maintainance And Security"
          cardDescription="jhjhff efhjefef ef ehfejf ejhfjehf efjhejhfe fjkehjfhjekf jehfjkefe fhefjhe fhejfh jdjfds fskdjflkdsfjdfnd fdkjflkdf dsklfjsdlfjkds fdklfjdlkfjd fdjfkldjfk dsfhj jfhjdsf dfjhdsjf"
        />
        <Services_card
          cardTitle="Systems Design"
          cardDescription="jhjhff efhjefef ef ehfejf ejhfjehf efjhejhfe fjkehjfhjekf jehfjkefe fhefjhe fhejfh jdjfds fskdjflkdsfjdfnd fdkjflkdf dsklfjsdlfjkds fdklfjdlkfjd fdjfkldjfk dsfhj jfhjdsf dfjhdsjf"
        />
      </div>
    </section>
  );
};

export default Services;