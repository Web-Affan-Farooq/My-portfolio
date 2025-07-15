import ExperienceRows from './ExperienceRows';

const experiences = [
  {
    years: "2024 - onwards",
    time: "1 year 5 months",
    company: "GIAIC",
    role: "Diploma Agentic AI development ",
  },
  // {
  //   years: "2020 - 2021",
  //   time: "9 months",
  //   company: "SN Inc.",
  //   role: "Fullstack developer | Javascript and Python",
  // },
  // {
  //   years: "2021 - 2022",
  //   time: "8 months",
  //   company: "VK Development Lab",
  //   role: "Fullstack developer | Javascript and Python",
  // },
  // {
  //   years: "2022 - onwards",
  //   time: "1 year 5 months",
  //   company: "ITHUB",
  //   role: "Fullstack developer | Javascript and Python",
  // },
]

const Experience = () => {
  return (
    <section className='text-white-custom 
    w-full'>
        <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
                        <h1 className='px-5 m-auto text-white-custom text-left w-full font-firacode font-bold 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px] 
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px]'>
                Experience
            </h1>
        </div>
            <br />

            {/* <h1 className="px-4 md:px-10 lg:px-20 py-10 text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
                Work
            </h1> */}
      <div className='w-full'>
        {experiences.map((exp, idx) => {
          return <ExperienceRows years={exp.years} time={exp.time} role={exp.role} company={exp.company} key={idx} />
        })}
      </div>
    </section>

  )
}

export default Experience