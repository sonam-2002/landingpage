import React from "react";
import { cardData } from '../../Static';

const Cards = () => {
  return (
    <div className="w-full mx-auto px-5">
      <p className="text-purple-700 font-semibold">Explore Program</p>
      <h2 className="text-2xl font-bold mb-6 mt-3">Our Most Popular Class</h2>
      <p className="mt-2">Let’s join our famous class; the knowledge provided will definitely be useful to you.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-100 transition-transform"
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{card.description}</p>
              <div className="flex justify-between items-center mb-2">
                <span className="text-yellow-500 font-bold">
                  {Array(Math.round(card.rating))
                    .fill("★")
                    .join("")}
                  {Array(5 - Math.round(card.rating))
                    .fill("☆")
                    .join("")}
                </span>
                <span className="text-gray-500">{card.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                
                  <img src={card.logo} alt={card.instructor} className="w-8 h-8 rounded-full mr-2" />
                  <p className="text-gray-700 text-sm">{card.instructor}</p>
                </div>
                <span className="text-purple-800 font-bold">{card.price}</span>
              </div>
              <p className="text-gray-400 text-xs mt-1">{card.enrolled}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
