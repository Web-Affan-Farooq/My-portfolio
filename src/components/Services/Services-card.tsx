import React from "react";

interface Card {
  cardTitle:string;
  cardDescription:string;
}
const Services_card = ({cardTitle, cardDescription}:Card) => {
  return (
    <div className="bg-glass px-5 py-10 w-[370px] rounded-lg text-center">
      <h1 className="text-primary text-[20px] font-bold text-center">
        {cardTitle}
      </h1>
       <br />
      <p className="text-gray-400">
        {cardDescription}
      </p>
    </div>
  );
};

export default Services_card;
