import React from "react";

const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      type="button"
      className={`${className} cursor-pointer border-solid border-primary border-[0.5px] py-2 font-bold rounded-lg px-5 transition-0.3 hover:bg-primary hover:text-white text-primary transition-all duration-400 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;
