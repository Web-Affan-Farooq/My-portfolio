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

          <div className="flex flex-row flex-nowrap ">
            <button className="bg-white-custom w-[170px] rounded-[40px] text-black lg:px-[100px] md:px-[80px] py-[13px]">
              <i>Submit</i>
            </button>
            <button className='text-center flex justify-center items-center bg-white-custom rounded-full w-[50px] h-[50px]'>
              <ArrowUp size={35} className='font-bold rotate-90' />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
