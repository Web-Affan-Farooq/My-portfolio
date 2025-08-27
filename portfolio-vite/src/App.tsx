import { HeroSection, AboutSection, SkillsSection, ServicesSection, ExperienceSection } from "./components/pages"
// import { ProjectsSection } from "./components/pages"
// import { ContactSection } from "./components/pages"

import Lenis from "lenis";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-black w-full h-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ExperienceSection />
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
    </div>
  )
}

export default App