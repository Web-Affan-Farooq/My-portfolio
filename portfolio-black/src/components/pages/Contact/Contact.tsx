"use client"
import { ArrowUp } from "lucide-react"

const Contact = () => {
  return (
    <div className="h-screen pt-30 flex justify-center items-center">
      <div className="text-white flex flex-row flex-wrap gap-[30px] max-md:px-10 max-sm:px-1">
        <div className="flex justify-center items-center">
          <h1 className='px-5 m-auto text-white-custom text-left w-full font-firacode font-bold 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px]
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[40px]'>
            Contact me
          </h1>
        </div>
        <div className="flex flex-col flex-wrap justify-center items-center gap-5 md:w-1/2">
          <input type="text" name="name" placeholder="Name" className="border border-white px-[20px] w-[350px] max-sm:w-[300px] placeholder:text-gray-500 placeholder:text-sm py-[7px] w-[] rounded-[10px]" />
          <input type="email" name="email" placeholder="Email" className="border border-white px-[20px] w-[350px] max-sm:w-[300px] placeholder:text-gray-500 placeholder:text-sm py-[7px] w-[] rounded-[10px]" />
          <textarea name="message" id="message" placeholder="Message " className="border border-white w-[350px] max-sm:w-[300px] placeholder:text-gray-500 placeholder:text-sm rounded-[10px] px-[20px] py-[7px] h-[200px]"></textarea>

          <div className='button-container flex items-center gap-2'>
            <button
              className='
                    bg-white-custom text-black
                    2xl:px-[60px]
                    xl:px-[55px]
                    lg:px-[50px]
                    md:px-[45px]
                    sm:px-[40px] sm:py-[10px]
                    max-sm:px-[35px] max-sm:py-[8px]
                    text-[14px] max-sm:text-[12px]
                    rounded-[40px] py-[11px]'
            >
              <div className="font-italic flex flex-row flex-nowrap justify-center items-center gap-3">
                <span>Submit</span></div>
            </button>
            <button className='bg-white-custom rounded-full'>
              <ArrowUp
                size={38}
                className='text-black rotate-90'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
