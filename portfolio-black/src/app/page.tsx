import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ServicesSection,
} from "@/components/pages/";

const Home = () => {
  return (
    <main>
      <article className="max-sm:pt-[120px] sm:pt-[140px] flex flex-col flex-nowrap justify-center items-center gap-[100px]">
        <HeroSection />

        <div className="w-[80vw] border border-blue-500">
          <AboutSection />
          <SkillsSection />
        </div>

        {/* <ServicesSection /> */}
      </article>
    </main>
  );
};

export default Home;
