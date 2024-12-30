import React from "react";
import { footerData } from '../../Static';
import { FaTwitter, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 mt-5">
      <div className="container p-4 ">
        <div className="flex flex-col md:flex-row">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0 ">
            <div className="inline-flex gap-5">
            <div className='bg-purple-700 w-10 rounded-full'>
            <div className='bg-white m-1  h-7 w-7 rounded-full'></div>
          </div>
            <h1 className="text-xl font-semibold">{footerData.brand.name}</h1>
            </div>
            <p className="mt-2 md:mt-10 text-gray-400 w-full">{footerData.brand.description}</p>
          </div>

          {/* Links Section */}
          <div className="flex gap-16 w-full justify-center items-start ">
            {footerData.links.map((section, index) => (
              <div key={index} className="">
                <h2 className="text-gray-400 font-medium">{section.title}</h2>
                <ul className="mt-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="mt-1 text-white hover:text-gray-300 hover:cursor-pointer text-xl">
                      {item === "Press" ? (
                        <span className="relative inline-block">
                          {item}
                          <span className="text-xs bg-white text-black ml-2 px-1 rounded-full">New</span>
                        </span>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 p-2 flex justify-between md:flex md:space-x-[800px]">
          <p className="text-gray-400 text-sm">{footerData.brand.copyright}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaDribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
