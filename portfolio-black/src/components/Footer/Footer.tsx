import React from 'react'

const Footer = () => {
  return (
    <footer className=''>
      
      <div className='m-auto'>
        <div className='flex justify-start items-start'>
          <h1 className='text-white-custom
                          font-firacode font-bold 
                          2xl:text-[130px]
                          xl:text-[120px]
                          lg:text-[100px]
                          md:text-[77px]
                          sm:text-[50px]
                          max-sm:text-[40px]'>
            Full-stack
          </h1>

        </div>

        <div className='flex 
                      lg:justify-evenly
                      md:justify-evenly
                      items-center'>
          <div className='lg:w-[400px]
                           md:w-[300px]
                          text-left'>
            <p>
              Fullstack developer | T3 & Jamstack
            </p>
          </div>
          <h1 className='text-white-custom 
                          font-firacode font-bold 
                          2xl:text-[130px]
                          xl:text-[120px]
                          lg:text-[100px]
                          md:text-[77px]
                          sm:text-[50px]
                          max-sm:text-[40px]'>
            Developer
          </h1>
        </div>
      </div>

    </footer>
  )
}

export default Footer