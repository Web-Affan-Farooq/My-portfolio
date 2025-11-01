"use client";
import { useGSAP } from "@gsap/react";
import { CheckCircle2, Users, Zap, Trophy } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    icon: <Trophy size={28} className="stroke-green-light" />,
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    icon: <Users size={28} className="stroke-green-light" />,
  },
  {
    number: "3x",
    label: "Faster Delivery",
    icon: <Zap size={28} className="stroke-green-light" />,
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: <CheckCircle2 size={28} className="stroke-green-light" />,
  },
];

const Trust = () => {
  useGSAP(() => {
    const heading = document.querySelector(".trust-heading");
    gsap.fromTo(
      heading,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    const statCards = document.querySelectorAll(".stat-card");
    gsap.fromTo(
      statCards,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: statCards[0],
          start: "top 85%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="2xl:w-[85vw] w-full px-[18px]">
      <div className="px-[50px] max-md:px-[20px] max-sm:px-[0px] flex max-md:flex-col items-start justify-evenly">
        <div className="trust-heading">
          <h1 className="text-green-light w-full font-firacode font-bold text-5xl text-left max-sm:text-[30px] sm:text-[40px] md:text-[57px] lg:text-[80px] xl:text-[100px] 2xl:text-[110px]">
            Trusted
          </h1>
          <p className="font-firacode text-faun text-left text-sm mt-2 mx-1">
            By startups, agencies, and enterprises worldwide
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>

      <br />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-[50px] max-md:px-[20px] max-sm:px-[0px]">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="stat-card p-6 rounded-lg bg-faun/5 border border-faun/20 hover:border-green-light/50 hover:bg-faun/10 transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-3">
              {stat.icon}
            </div>
            <h2 className="text-green-light font-firacode font-bold text-3xl md:text-4xl mb-2">
              {stat.number}
            </h2>
            <p className="text-gray-400 font-firacode text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <br />

      <div className="px-[50px] max-md:px-[20px] max-sm:px-[0px]">
        <h3 className="text-green-light font-firacode font-semibold text-lg mb-4">
          Specializations:
        </h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {["Data Science", "Full-Stack Development", "Cloud Architecture", "AI/ML Integration", "Performance Optimization", "Enterprise Solutions"].map((spec, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-green-light/10 border border-green-light/30 rounded-full text-green-light text-sm font-firacode hover:bg-green-light/20 transition-colors"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
