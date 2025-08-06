import { HeroSection , AboutSection , SkillsSection , ServicesSection  } from '@/components/pages/';    

const Home = () => {
  return (
    <main>
      <article>
        <HeroSection />
        <AboutSection/>
        <SkillsSection/>
        <ServicesSection/>

        {/* <ProjectsScroll>
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
          <ProjectScrollCard />
        </ProjectsScroll> */}
        {/* <Articles /> */}
      </article>
    </main>
  )
}

export default Home