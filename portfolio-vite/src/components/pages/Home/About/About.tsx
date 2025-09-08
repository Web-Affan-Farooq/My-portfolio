import { ArrowUp } from "lucide-react";

const MainAbout = () => {
  const aboutContent = ` I'm Muhammad Affan, a full-stack developer based in Pakistan with a passion
            for building clean, scalable, and efficient software solutions. I
            have a solid understanding of software design and architecture, and I love turning
            complex problems into elegant code. With strong capabilities, I am
            specializing in creating seamless user experiences and robust
            backend logic. I'm always exploring new technologies and sharpening
            my problem-solving abilities.`;
  return (
    <>
      <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto overflow-y-hidden flex flex-row flex-nowrap justify-between items-center ">
        <h1
          className="px-5 m-auto text-white-custom text-left w-full font-firacode font-bold
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px]
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px]"
        >
          About me
        </h1>

        <div className="flex justify-center items-center">
          <img
            src={"/icons/vite.svg"}
            alt="host-image"
            width={100}
            height={100}
            className="rounded-[40px] w-[100px] h-[100px] h-auto object-cover shadow-md shadow-gray-800"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 p-6 2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
        <p className="text-gray-400 max-sm:w-full">{aboutContent}</p>

        <div className="flex flex-row flex-nowrap">
          <button className="bg-white-custom rounded-[40px] text-black lg:px-[100px] md:px-[80px] sm:px-[40px] max-sm:px-[30px] py-[13px]">
            <i>Download CV</i>
          </button>

          <button className="text-center flex justify-center items-center bg-white-custom rounded-full w-[50px] h-[50px]">
            <ArrowUp size={35} className="font-bold rotate-90" />
          </button>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <section className="w-full">
      <MainAbout />
      <div className="h-[100px]"></div>
    </section>
  );
};

export default About;
