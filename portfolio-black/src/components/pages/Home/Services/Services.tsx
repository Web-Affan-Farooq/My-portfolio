"use client";
import { useGSAP } from "@gsap/react";
import { LayoutPanelLeft, Server, Brain, Bot, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ServicesData = [
  {
    name: "Frontend Development",
    specs:
      "Crafting stunning, responsive, and interactive user interfaces using modern frameworks like React and Next.js.",
    icon: <LayoutPanelLeft size={25} />,
  },
  {
    name: "Fullstack Development",
    specs:
      "Building robust and scalable full-stack web applications from concept to deployment.",
    icon: <Server size={25} />,
  },
  {
    name: "AI Integration",
    specs:
      "Integrating cutting-edge AI functionalities into your products using APIs from OpenAI and other leading platforms.",
    icon: <Brain size={25} />,
  },
  {
    name: "Chatbot Development",
    specs:
      "Developing intelligent and conversational chatbots to automate customer support, sales, and internal processes.",
    icon: <Bot size={25} />,
  },
  {
    name: "JAMstack Development",
    specs:
      "Creating high-performance, secure, and scalable static websites leveraging the JAMstack architecture.",
    icon: <Globe size={25} />,
  },
];
const Services = () => {
  useGSAP(() => {
    // ____ animate headline...
    const headLine = document.querySelector(".head-line-services");
    gsap.fromTo(
      headLine,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.002,
        scrollTrigger: {
          trigger: headLine,
          start: "top center",
          end: "top 60%",
        },
      }
    );
    // ____ animate heading ...
    const servicesHeading = document.querySelector(".services-head");
    gsap.fromTo(
      servicesHeading,
      {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.3,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        // stagger: 0.8,
        scrollTrigger: {
          trigger: servicesHeading,
          start: "top center",
          end: "top 60%",
        },
      }
    );
  }, []);

  return (
    <div className="text-white selection:bg-faun selection:text-black">
      <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
        <div className="h-[80px] overflow-hidden">
          <h1
            className="text-5xl md:text-7xl font-bold px-5 m-auto text-white-custom text-left w-full font-firacode 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px] 
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px] services-head"
          >
            Services
          </h1>
        </div>
        <div className="h-[30px] overflow-hidden">
          <p className="font-firacode text-faun mt-2 mx-5 text-sm text-faun head-line-services">
            Here's how I can help your business succeed.
          </p>
        </div>
      </div>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 max-sm:p-2">
        {ServicesData.map((services, index) => (
          <div
            key={index}
            className="relative group w-full py-4 px-7 max-sm:px-5 rounded-lg bg-custom transition-all duration-200"
          >
            <div className="flex w-1/2 flex felx-row flex-nowrap justify-start items-center gap-[10px]">
              <div className="bg-faun w-[7px] h-[44px] rounded-lg"></div>
              {services.icon}
            </div>
            <h2 className="group-hover:text-white my-4 text-xl font-firacode font-semibold text-[#e3cb8f]">
              {services.name}
            </h2>
            <p className="font-firacode text-sm leading-[19px] text-gray-500/80">
              {services.specs}
            </p>
          </div>
        ))}
      </div>

      <div className="h-[100px]"></div>
    </div>
  );
};

export default Services;
