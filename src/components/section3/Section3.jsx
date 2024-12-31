import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import {tutorsData} from "../../Static";

const Tutors = () => {
  return (
    <div className="bg-white-50  py-10 mt-7 px-8">
      <div className="text-center mb-12">
        <p className="text-purple-600 uppercase font-semibold">Tutors</p>
        <h2 className="text-3xl font-bold">Meet the Heroes</h2>
        <p className="text-gray-600 mt-2">
          On Ed-Circle, instructors from all over the world instruct millions of students. We <br/>
           offer the knowledge and abilities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {tutorsData.map((tutor, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6  hover:shadow-lg "
          >
            
            <div className="flex justify-center mb-4">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-20 h-20 rounded-full"
              />
            </div>
          
            <h3 className="text-lg font-semibold text-center">{tutor.name}</h3>
            <p className="text-purple-600 text-center font-medium mb-1">
              {tutor.title}
            </p>
        
            <p className="text-sm text-gray-600 text-center mb-4">
              {tutor.description}
            </p>
        
            <div className="flex justify-center gap-4">
              <a
                href={tutor.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={tutor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutors;