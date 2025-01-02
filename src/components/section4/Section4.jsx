import React from "react";
import { data } from "../../Static"; 

const Testimonial = () => {
  const testimonial = data.testimonial; 
  const blogs = data.blogs; 

  return (
    <div className="bg-gray-50 py-10 px-32">
      
      <div className="text-center mb-12">
       
        <div className="flex space-x-16 items-center justify-center mb-4">
          <div className="flex gap-5 py-4 md:py-2">
            <div className="flex">
              <div className="bg-purple-700 w-10 rounded-full">
                <div className="bg-white m-1 h-7 w-7 rounded-full"></div>
              </div>
            </div>
            <p className="font-semibold text-xl">Ed-Circle.</p>
          </div>
        </div>

        <p className="text-3xl font-bold text-gray-800 my-4">
          {testimonial.message}
        </p>
        <div className="flex justify-center items-center mt-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full "
          />
        </div>
        <p className="text-gray-600 mt-2">
          {testimonial.name}
          <br />
          {testimonial.position}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;

