import React from "react";
import Button from "../Button/Button";

const About = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <section className="w-[85vw] mx-auto md:py-36">
        <h1 className="font-bold text-[60px] text-[#698c6d] leading-[70px] tracking-[-2px]">
          About me
        </h1>
        <br />
        <p className="text-gray-500 text-sm w-[75%]">
          I'm <strong>Muhammad Affan</strong> a Fullstack developer based in
          <strong> Pakistan</strong>
          <strong>
            <sub>PK</sub>
          </strong>{" "}
          worked with many domestic and international freelance clients . After
          resigned from <strong>@temu</strong> . I'm now fulltime{" "}
          <strong>Startup founder</strong>, and <strong>Enterpreneur</strong>
        </p>
        <br />
        <Button text="Hire me" />
      </section>
    </div>
  );
};

export default About;
