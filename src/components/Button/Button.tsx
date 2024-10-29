import React from 'react'

const Button = ({text}: {text:string}) => {
  return (
    <button type='button' className='border-solid border-primary border-[0.5px] py-2 font-bold rounded-lg px-5 transition-0.3 hover:bg-primary hover:text-white text-primary trans'>
        {text}
    </button>
  )
}

export default Button