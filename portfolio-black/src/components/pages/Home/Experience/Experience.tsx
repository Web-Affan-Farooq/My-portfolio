import ExperienceRows from './ExperienceRows';

const experiences = [
  {
    years: "2024 - onwards",
    time: "1 year 5 months",
    company: "GIAIC",
    role: "Diploma Agentic AI development ",
  },
];

const specializations = [
  {
    category: "For Freelance Clients",
    description: "End-to-end project ownership, quick delivery, flexible engagement",
    highlights: ["Project-based delivery", "Direct communication", "Rapid prototyping", "Flexible scheduling"],
  },
  {
    category: "For Startups",
    description: "MVP development, scalable architecture, growth-ready infrastructure",
    highlights: ["Rapid MVP launch", "Scalable systems", "Cost-effective solutions", "Tech stack guidance"],
  },
  {
    category: "For Remote Teams",
    description: "Collaborative development, CI/CD integration, distributed teamwork",
    highlights: ["Code review expertise", "Git workflows", "Async communication", "Documentation"],
  },
  {
    category: "For Enterprises",
    description: "Enterprise-grade solutions, security compliance, long-term partnerships",
    highlights: ["Security standards", "Performance optimization", "System architecture", "Maintenance support"],
  },
];

const Experience = () => {
  return (
    <section className='text-white-custom w-full'>
      <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
        <h1 className='px-5 m-auto text-green-light text-left w-full font-firacode font-bold
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px]
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px]'>
          Experience
        </h1>
        <p className="font-firacode text-faun text-left text-sm mt-2 mx-1 px-4">
          Career journey and specializations
        </p>
      </div>
      <br />

      <div className='w-full'>
        {experiences.map((exp, idx) => {
          return <ExperienceRows years={exp.years} time={exp.time} role={exp.role} company={exp.company} key={idx} />
        })}
      </div>

      <br />
      <br />

      <div className="2xl:w-[85vw] xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto px-5">
        <h2 className="text-green-light font-firacode font-bold text-2xl md:text-3xl mb-8">
          How I Work With Different Partners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-lg bg-faun/5 border border-faun/20 hover:border-faun/50 hover:bg-faun/10 transition-all duration-300"
            >
              <h3 className="text-faun font-firacode font-semibold mb-2 group-hover:text-green-light transition-colors">
                {spec.category}
              </h3>
              <p className="text-gray-400 text-sm font-firacode mb-4">
                {spec.description}
              </p>
              <ul className="space-y-2">
                {spec.highlights.map((highlight, hidx) => (
                  <li key={hidx} className="text-xs text-gray-500 font-firacode flex items-start gap-2">
                    <span className="text-green-light mt-1">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;