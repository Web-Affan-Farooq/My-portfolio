import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ServicesSection,
} from "@/components/pages/";

const Home = () => {
  return (
    <main>
      <article>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
      </article>
    </main>
  );
};

export default Home;
