import React, { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { AiFillRightCircle } from "react-icons/ai";

const images = [
  "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1629299342303-3f3622666c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://www.lexpress.fr/resizer/-kP23Ho-onNkniBc9DBm9D9nhiY=/970x548/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/HC7KGJNGDFHJ5ALQLJSRWIRPGI.jpg",
];
const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  function handlePreviousImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }

  function handleNextImage() {
    setCurrentImage((currentImage + 1) % images.length);
  }
  return (
    <div
      id="About"
      className="relative  h-[220px] sm:h-[620px] mx-auto bg-white "
    >
      <div className="absolute inset-0 w-full h-full">
        <img
          src={images[currentImage]}
          alt="Slider Image"
          className="w-full h-full  bg-cover bg-center "
        />
      </div>
      <div className="absolute inset-0 bg-[#03030321] bg-opacity-50 flex justify-center  items-center ">
        
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center justify-center w-16">
        <button
          onClick={handlePreviousImage}
          className="text-white focus:outline-none"
        >
          <IoIosArrowDropleftCircle size={35} className="hover:text-red-800" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-center w-16">
        <button
          onClick={handleNextImage}
          className="text-white focus:outline-none"
        >
          <AiFillRightCircle size={35} className="hover:text-red-800" />
        </button>
      </div>
      <div className="absolute -bottom-10 left-0 right-0 pb-12">
        <div className="flex items-center justify-center space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-4 h-4 rounded-full ${
                currentImage === index ? "bg-red-800 h-6 w-6" : "bg-red-300"
              } cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
