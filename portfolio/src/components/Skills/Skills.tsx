
import React from "react";
import Card from "./Card";

const Skills = () => {

  return (
    <section className="text-white p-5 w-[85vw] m-auto flex flex-col flex-nowrap justify-start items-start">
      <div >
      <h1 className='text-[100px] leading-[78px] font-semibold relative right-[10px] max-sm:text-[80px] max-sm:leading-[68px] max-md:text-[80px] max-md:leading-[68px] w-[70vw] max-lg:w-[80vw] max-md:w-full'>My <span className="text-greenlight">Toolbox</span></h1>
      <br />
      <h2 className="text-[24px] w-[500px] max-sm:w-[400px] max-[500px]:w-[350px]">From <span className="text-greenlight">Frontend Magic</span> to <span className="text-greenlight">Backend Logic</span>, here’s what I bring.</h2>
      </div>
      <br />
      <br />
      <div className=" flex flex-row flex-wrap justify-center items-center gap-4">
          <Card image={"/images/typescript.svg"} skillText={"Typescript"} name="typescript"/>
          <Card image={"/images/javascript.svg"} skillText={"Javascript"} name="javascript"/>
          <Card image={"/images/html.svg"} skillText={"HTML"} name="html"/>
          <Card image={"/images/css.svg"} skillText={"CSS"} name="css"/>
          <Card image={"/images/nextjs.svg"} skillText={"Next.JS"} name="nextjs"/>
          <Card image={"/images/nodejs.svg"} skillText={"Node.JS"} name="nodejs"/>
          <Card image={"/images/express.svg"} skillText={"Express.JS"} name="expressjs"/>
        <Card skillText={"React.JS"} image="/images/reactjs.svg" name="reactjs"/>
        <Card skillText="Canva" image="/images/canva.svg" name="canva"/>
        <Card skillText="Figma" image={"/images/figma.svg"} name="figma"/>
        <Card skillText="Git" image="/images/git.svg" name="git"/>
      </div>
    </section>
  );
};

export default Skills;