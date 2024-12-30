import React from 'react';
import { herodata } from '../../Static';
import { FaChalkboardTeacher, FaVideo, FaUsers } from "react-icons/fa";
import { FaCode, FaDove, FaUsersCog, FaMagic } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="mt-5">
      <div className="md:flex justify-between items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-5xl font-semibold w-full md:w-96 px-2">
            Up Your <span className="text-purple-500">Skills</span> To
            <span className="text-purple-500 ml-3">Advance</span> Your
            <span className="text-purple-500"> Career </span>Path
          </h1>
          <div className="mt-4 space-y-5">
            <p className="md:w-[450px] text-gray-800">
              Provide you with the latest online learning system and material that help your knowledge growing.
            </p>
            <div className="flex gap-8">
              <button className="bg-purple-900 p-3 px-6 rounded-md text-white">Get Started</button>
              <button className="bg-purple-200 p-3 px-6 rounded-md text-purple-800 font-bold">Get free trial</button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {herodata.data1.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-red-500">
                    <FaChalkboardTeacher size={24} />
                  </div>
                  <p className="text-gray-700">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="absolute h-[200px] w-[200px] md:h-[300px] md:w-[300px] top-0 right-0 transform translate-x-16 -translate-y-10"></div>
          <img
            src="../src/assets/image.png"
            alt="Student"
            className="relative z-10 w-[300px] h-[300px] object-cover rounded-full bg-slate-50shadow-lg"
          />
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="mt-10 flex ">
        <p className="text-3xl font-bold text-purple-600">250+</p>
        <p className="text-gray-800">Collaborations</p>
        <div className="mt-8 flex  gap-6 flex-wrap">
          <div className="flex   gap-2">
            <FaDove className="text-gray-500" size={20} />
            <p className="text-gray-700">Duolingo</p>
          </div>
          <div className="flex  gap-2">
            <FaCode className="text-gray-500" size={20} />
            <p className="text-gray-700">Codecov</p>
          </div>
          <div className="flex  gap-2">
            <FaUsersCog className="text-gray-500" size={20} />
            <p className="text-gray-700">User Testing</p>
          </div>
          <div className="flex   gap-2">
            <FaMagic className="text-gray-500" size={20} />
            <p className="text-gray-700">Magic Leap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

