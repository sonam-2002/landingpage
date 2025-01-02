import React from 'react';
import { FaChalkboardTeacher, FaVideo, FaUsers } from "react-icons/fa";

import { FaCode, FaDove, FaUsersCog, FaMagic } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="mt-10">
      <div className="md:flex space-x-40">
      
        <div className=''>
          <h1 className="text-5xl font-semibold w-full md:w-96 px-2 mt-10">
            Up Your <span className="text-purple-500">Skills</span> To
            <span className="text-purple-500 ml-3">Advance</span> Your
            <span className="text-purple-500"> Career</span>Path
          </h1>
          <div className="mt-4 space-y-10">
            <p className="md:w-[450px] text-gray-800">
              Provide you with the latest online learning system and material that help your knowledge growing.
            </p>
            <div className="flex gap-8">
              <button className="bg-purple-900 p-3 px-6 rounded-md text-white">Get Started</button>
              <button className="bg-purple-200 p-3 px-6 rounded-md text-purple-800 font-bold">Get free trial</button>
            </div>
            <div className="m-5 flex flex-wrap gap-8 ">
              <div className="flex gap-2 ">
                <FaChalkboardTeacher className="text-orange-500" size={25} />
                <p className="text-gray-700">Public Speaking</p>
              </div>
              <div className="flex gap-2">
                < FaVideo className="text-red-400" size={25} />
                <p className="text-gray-700">Career-Oriented</p>
              </div>
              <div className="flex gap-5">
                <FaUsers className="text-red-700" size={25} />
                <p className="text-gray-700">Creative Thinking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative h-96 w-96 mt-10 md:mt-0">
          <div className="absolute h-[200px] w-[200px] md:h-[300px] md:w-[300px] top-0 right-0 transform translate-x-16 -translate-y-10"></div>
          <img
            src="../src/assets/image.png"
            alt="Student"
            className="relative z-10 w-[400px] h-[400px] object-cover rounded-full shadow-lg"
          />

          <div className="absolute top-[100px] left-[-50px] bg-white shadow-md  border border-purple-300 rounded-lg p-4 flex items-center gap-4 z-20">
            <FaVideo className="text-purple-600 text-3xl" />
            <div>
              <p className="text-xl  font-bold text-gray-800">2K+</p>
              <p className="text-sm text-gray-500">Video Courses</p>
            </div>
          </div>


          <div className="absolute top-[50px] right-[-50px]  bg-white shadow-md border border-purple-300 rounded-lg p-4 flex items-center gap-4 z-20">
            <FaUsers className="text-purple-600 text-3xl" />
            <div>
              <p className="text-xl font-bold text-gray-800">250+</p>
              <p className="text-sm text-gray-500">Tutors</p>
            </div>
          </div>



          <div className="absolute bottom-[-50px] left-[30px] bg-white shadow-md border border-purple-300 rounded-lg p-4 flex items-center gap-4 z-20 ">

            <div className="relative w-16 h-16 flex justify-center items-center">
              <svg className="absolute top-0 left-0 w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  stroke="#E5E5E5"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="40%"
                  stroke="#6D28D9"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="200"
                  strokeLinecap="round"
                />
              </svg>
              <p className="absolute text-sm font-bold text-gray-800">5K+</p>
            </div>

            <div>
              <p className="text-sm font-bold text-gray-800">Online Courses</p>
              <p className="text-sm text-gray-500">Learn at your pace</p>
            </div>
          </div>


        </div>
      </div>


      <div className="mt-10 flex  mb-7 md:gap-20">
        <div className=''>
          <p className="text-3xl font-bold text-purple-600">250+</p>
          <p className="text-gray-800">Collaborations</p>
        </div>
        <div className="mt-4 flex  gap-10 flex-wrap">
          <div className="flex gap-1">
            <FaDove className="text-gray-500" size={20} />
            <p className="text-gray-700">Duolingo</p>
          </div>
          <div className="flex  gap-1">
            <FaCode className="text-gray-500" size={20} />
            <p className="text-gray-700">Codecov</p>
          </div>
          <div className="flex  gap-1">
            <FaUsersCog className="text-gray-500" size={20} />
            <p className="text-gray-700">User Testing</p>
          </div>
          <div className="flex   gap-1">
            <FaMagic className="text-gray-500" size={20} />
            <p className="text-gray-700">Magic Leap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

