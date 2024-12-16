import React from 'react';
import Image from 'next/image';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Projects = () => {
  return (
    <div className="bg-desktop bg-no-repeat bg-center bg-cover max-md:bg-mobile w-full h-auto">
              <Header/>

      <br /><br /><br /><br />
      <div className=' flex flex-col flex-wrap gap-[50px]'>
        <div className='w-[270px] m-auto py-20'>
          <h1 className='text-3xl text-white font-bold'>Showcasing My <br /> <span className='text-primary'>Projects</span></h1>
        </div>
        <div className='flex flex-row flex-wrap gap-[30px] justify-center items-center'>
          <div>
            <Image src={"/images/calculator.png"} alt='project' width={270} height={160} className='object-cover rounded-[20px]' />
            <div className='relative text-white flex flex-row flex-nowrap justify-between items-center py-[15px] bottom-16 rounded-[20px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-85 backdrop-blur-3xl px-[10px] '>
              <span className='text-link font-bold text-[20px]'>Featured</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div>
            <Image src={"/images/calculator.png"} alt='project' width={270} height={160} className='object-cover rounded-[20px]' />
            <div className='relative text-white flex flex-row flex-nowrap justify-between items-center py-[15px] bottom-16 rounded-[20px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-85 backdrop-blur-3xl '>
              <span className='text-link font-bold text-[20px]'>Featured</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div>
            <Image src={"/images/calculator.png"} alt='project' width={270} height={160} className='object-cover rounded-[20px]' />
            <div className='relative text-white flex flex-row flex-nowrap justify-between items-center py-[15px] bottom-16 rounded-[20px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-85 backdrop-blur-3xl '>
              <span className='text-link font-bold text-[20px]'>Featured</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div>
            <Image src={"/images/calculator.png"} alt='project' width={270} height={160} className='object-cover rounded-[20px]' />
            <div className='relative text-white flex flex-row flex-nowrap justify-between items-center py-[15px] bottom-16 rounded-[20px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-85 backdrop-blur-3xl '>
              <span className='text-link font-bold text-[20px]'>Featured</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div>
            <Image src={"/images/calculator.png"} alt='project' width={270} height={160} className='object-cover rounded-[20px]' />
            <div className='relative text-white flex flex-row flex-nowrap justify-between items-center py-[15px] bottom-16 rounded-[20px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-85 backdrop-blur-3xl '>
              <span className='text-link font-bold text-[20px]'>Featured</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div>
            <Image src={"/images/calculator.png"} alt='project' width={270} height={160} className='object-cover rounded-[20px]' />
            <div className='relative text-white flex flex-row flex-nowrap justify-between items-center py-[15px] bottom-16 rounded-[20px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-85 backdrop-blur-3xl '>
              <span className='text-link font-bold text-[20px]'>Featured</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div>
            <Image src={"/images/calculator.png"} alt='project' width={270} height={160} className='object-cover rounded-[20px]' />
            <div className='relative text-white flex flex-row flex-nowrap justify-between items-center py-[15px] bottom-16 rounded-[20px] bg-[rgba(255,255,255,0.1)] backdrop-opacity-85 backdrop-blur-3xl '>
              <span className='text-link font-bold text-[20px]'>Featured</span>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>

        </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Projects