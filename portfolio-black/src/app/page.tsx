import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ServicesSection,
} from "@/components/pages/";

const Home = () => {
  return (
    <main>
      <article className="flex flex-col flex-nowrap justify-center items-center gap-[200px]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
      </article>
    </main>
  );
};

export default Home;
