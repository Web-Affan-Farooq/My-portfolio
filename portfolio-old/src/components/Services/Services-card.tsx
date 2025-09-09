import React from "react";
import Link from "next/link";

interface Card {
  cardTitle: string;
  cardDescription: string;
}
const Services_card = ({ cardTitle, cardDescription }: Card) => {
  return (
    <div className="flex flex-col gap-[15px] bg-hue px-5 py-10 w-[370px] rounded-lg max-lg:w-[300px] max-[716px]:w-full max-[716px]:text-left">
      <h1 className="text-[20px] font-bold ">{cardTitle}</h1>
      <p className="text-gray-light">{cardDescription}</p>

      <Link href={"/"}>
        <div className="flex flex-row gap-[12px] items-center">
          <span>Talk with me</span>
          <i className="fa-solid fa-arrow-right mt-1"></i>
        </div>
      </Link>
    </div>
  );
};

export default Services_card;
