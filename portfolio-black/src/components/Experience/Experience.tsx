import React from 'react';
import ExperienceRows from './ExperienceRows';

const experiences = [
  {
    years: "2018 - 2020",
    time: "1 year 11 months",
    company: "Business up",
    role: "Fullstack developer | Javascript and Python",
  },
  {
    years: "2020 - 2021",
    time: "9 months",
    company: "SN Inc.",
    role: "Fullstack developer | Javascript and Python",
  },
  {
    years: "2021 - 2022",
    time: "8 months",
    company: "VK Development Lab",
    role: "Fullstack developer | Javascript and Python",
  },
  {
    years: "2022 - onwards",
    time: "1 year 5 months",
    company: "ITHUB",
    role: "Fullstack developer | Javascript and Python",
  },
]

const Experience = () => {
  return (
    <section className='text-white-custom 
    w-full'>
            <h1 className="px-4 md:px-10 lg:px-20 py-10 text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
                Work
            </h1>
      <div className='w-full'>
        {experiences.map((exp, idx) => {
          return <ExperienceRows years={exp.years} time={exp.time} role={exp.role} company={exp.company} key={idx} />
        })}
      </div>
    </section>

  )
}

export default Experience