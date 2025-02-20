import React from 'react'

const Button = ({text, className}: {text:string; className?:string}) => {
  return (
    <button type='button' className={`${className} border-solid border-primary border-[0.5px] py-2 font-bold rounded-lg px-5 transition-0.3 hover:bg-primary hover:text-white text-primary trans`}>
        {text}
    </button>
  )
}

export default Button