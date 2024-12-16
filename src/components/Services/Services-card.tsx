import React from "react";
import Link from "next/link";

interface Card {
  cardTitle:string;
  cardDescription:string;
}
const Services_card = ({cardTitle, cardDescription}:Card) => {
  return (
    <div className="bg-glass px-5 py-10 w-[370px] rounded-lg text-center max-lg:w-[300px] max-[716px]:w-full max-[716px]:text-left">
      <h1 className="text-primary text-[20px] font-bold text-center max-[716px]:text-left">
        {cardTitle}
      </h1>
       <br />
      <p className="text-gray-400">
        {cardDescription}
      </p>

      <div className="flex flex-row flex-nowrap justify-end items-center">
      <Link href={"/Projects"}>
            <span className='w-10 h-10 bg-black text-center font-bold rounded-full flex flex-col justify-center align-middle -rotate-45'>
            <i className="text-white fa-solid fa-arrow-right"></i>
            </span>
            </Link>
      </div>
    </div>
  );
};

export default Services_card;
