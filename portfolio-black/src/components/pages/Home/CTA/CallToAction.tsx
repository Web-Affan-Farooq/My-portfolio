"use client";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  useGSAP(() => {
    const heading = document.querySelector(".cta-main-heading");
    gsap.fromTo(
      heading,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 1.2,
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    const ctaButtons = document.querySelectorAll(".cta-action-btn");
    gsap.fromTo(
      ctaButtons,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.6,
        stagger: 0.2,
        delay: 0.5,
        scrollTrigger: {
          trigger: ctaButtons[0],
          start: "top 85%",
          end: "top 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="2xl:w-[85vw] w-full px-[18px] py-20">
      <div className="rounded-2xl bg-gradient-to-br from-faun/5 via-green-light/5 to-faun/5 border border-faun/20 px-8 md:px-16 py-12 md:py-16 text-center">
        <h2 className="cta-main-heading text-green-light font-firacode font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
          Let's Build Something
        </h2>
        <h3 className="cta-main-heading text-faun font-firacode font-semibold text-2xl md:text-3xl mb-6">
          Amazing Together
        </h3>

        <p className="text-gray-400 font-firacode text-sm md:text-base max-w-2xl mx-auto mb-10">
          Whether you need a freelance developer, looking to scale your startup, building a remote team, or seeking enterprise solutions—I'm ready to make your vision a reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <Link href="/contact">
            <button className="cta-action-btn flex items-center gap-2 px-8 py-3 bg-green-light hover:bg-green-light/90 text-black font-firacode font-semibold rounded-lg transition-all duration-300 hover:gap-3">
              Start a Project
              <ArrowRight size={20} />
            </button>
          </Link>

          <Link href="mailto:contact@example.com">
            <button className="cta-action-btn flex items-center gap-2 px-8 py-3 bg-faun/10 hover:bg-faun/20 border border-faun/50 text-faun font-firacode font-semibold rounded-lg transition-all duration-300 hover:gap-3">
              <Mail size={20} />
              Get in Touch
            </button>
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-faun/20">
          <p className="text-gray-500 text-sm font-firacode mb-4">
            Available for freelance, remote, startup, and corporate roles
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Responsive", "Scalable", "Production-Ready", "Documented", "Tested"].map((tag, idx) => (
              <span key={idx} className="text-xs bg-green-light/10 px-3 py-1 rounded-full text-green-light font-firacode">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
