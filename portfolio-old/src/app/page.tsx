import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects-showcase/Projects";
import Services from "@/components/Services/Services";
import SocialLinks from "@/components/SocialLinks";

const Home = () => {
  return (
    <div className="bg-desktop bg-no-repeat bg-center bg-cover max-md:bg-mobile w-full h-auto">
      <Header />
      <Hero />
      <SocialLinks />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
