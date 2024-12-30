import React from "react";
import { MdOutlineComputer, MdWeb, MdOutlineCampaign } from "react-icons/md";

import {cardData1} from '../../Static';

const icons = {
    MdOutlineComputer: <MdOutlineComputer className="text-purple-400"size={30}/>,
    MdWeb: <MdWeb className="text-blue-400"size={30} />,
    MdOutlineCampaign: <MdOutlineCampaign className="text-red-400"size={30} />,
};

const Services = () => {
    return (
        <div className="bg-gray-50 py-16 px-8">
            <div className="text-center mb-12">
                <p className="text-purple-600 uppercase font-semibold">Our Services</p>
                <h2 className="text-3xl font-bold">
                    Fostering a playful & engaging learning environment
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cardData1.map((card, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${card.bgColor === "bg-white" ? "bg-white border" : `${card.bgColor} text-white`}`}
                    >
                        <div className="flex gap-2 mt-3 mb-4">
                            {/* Apply the icon's background color */}
                            <div className={`p-2 rounded-full ${card.iconBgColor}`}>
                                {icons[card.icon]}
                            </div>
                            <h3 className="flex text-lg font-bold mb-2">{card.title}</h3>
                        </div>
                        <p className="text-xl mb-4">{card.description}</p>
                        <a
                            href={card.link}
                            className="text-sm font-bold flex items-center text-purple-600 gap-1 hover"
                        >
                            Learn More <span>&rarr;</span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

