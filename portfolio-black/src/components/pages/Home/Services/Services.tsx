"use client";
import { useGSAP } from "@gsap/react";
import {
  LayoutPanelLeft,
  Server,
  Brain,
  Bot,
  Globe,
  Rocket,
  Zap,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting stunning, responsive, and interactive user interfaces using React, Next.js, and modern web technologies. SEO-optimized, accessible, and performance-driven.",
    icon: <LayoutPanelLeft size={25} className="stroke-green-light" />,
  },
  {
    title: "Backend Development",
    description:
      "Building robust, scalable, and secure backend systems with Node.js, Python, and cloud services. Database design, API development, and system architecture.",
    icon: <Server size={25} className="stroke-green-light" />,
  },
  {
    title: "Data Science & ML",
    description:
      "End-to-end data pipelines, machine learning models, data analysis, and predictive analytics. From data collection to deployment and monitoring.",
    icon: <Brain size={25} className="stroke-green-light" />,
  },
  {
    title: "AI & LLM Integration",
    description:
      "Integrating GPT, Claude, and other cutting-edge AI models. Chatbots, content generation, automation, and intelligent decision systems.",
    icon: <Bot size={25} className="stroke-green-light" />,
  },
  {
    title: "Full-Stack Solutions",
    description:
      "End-to-end web applications combining frontend excellence, backend power, and deployment expertise. MVPs to enterprise systems.",
    icon: <Globe size={25} className="stroke-green-light" />,
  },
  {
    icon: <Rocket size={25} className="stroke-green-light" />,
    title: "Performance & Optimization",
    description:
      "Lightning-fast load times, optimized database queries, efficient algorithms, and CDN integration. Core Web Vitals excellence.",
  },
  {
    icon: <Zap size={25} className="stroke-green-light" />,
    title: "Maintenance & Scaling",
    description:
      "Long-term support, continuous deployment, monitoring, scaling infrastructure, and feature enhancements as your business grows.",
  },
];

const Services = () => {
  useGSAP(() => {
    // ____ animate heading ...
    const servicesHeading = document.querySelector(".services-head");
    gsap.fromTo(
      servicesHeading,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: servicesHeading,
          start: "top 85%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    // ____ animate tagline ...
    const headLine = document.querySelector(".head-line-services");
    gsap.fromTo(
      headLine,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: headLine,
          start: "top 85%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    // ____ animate service cards ...
    const cards = document.querySelectorAll(".service-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cards[0],
          start: "top 85%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="px-[50px] max-md:px-[20px] flex max-md:flex-col items-start justify-evenly items-center">
        <div>
          <h1 className="text-green-light w-full font-firacode font-bold text-5xl text-left max-sm:text-[30px] sm:text-[40px] md:text-[57px] lg:text-[80px] xl:text-[100px] 2xl:text-[110px] about-head">
            Services
          </h1>
          <p className="font-firacode text-faun text-left text-sm mt-2 mx-1 head-line">
            Here's How can I help you in your business
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 max-sm:p-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card relative group w-full py-6 px-7 max-sm:px-5 rounded-lg bg-custom transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            <div className="flex w-1/2 flex-row flex-nowrap justify-start items-center gap-[10px]">
              <div className="bg-faun w-[7px] h-[44px] rounded-lg"></div>
              {service.icon}
            </div>
            <h2 className="group-hover:text-white my-4 text-xl font-firacode font-semibold text-[#e3cb8f] transition-colors">
              {service.title}
            </h2>
            <p className="font-firacode text-sm leading-[19px] text-gray-500/80">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="h-[100px]"></div>
    </div>
  );
};

export default Services;
