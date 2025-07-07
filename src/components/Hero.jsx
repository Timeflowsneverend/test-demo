import React from "react";

const Hero = () => {
  return (
    // <div className="flex flex-row h-full">
    <div id="hero" className="grid grid-cols-2">
      <div className="bg-gray-500">
        {/* <div className="flex-1"> */}
        <img
          className="object-fit: cover  duration-400 hover:scale-110 p-6"
          src="https://cdn.pixabay.com/photo/2022/10/24/09/31/flower-7543035_960_720.jpg"
          alt="hero image"
        />
      </div>
      <div className="bg-black/60 flex justify-center items-center p-8 text-white ">
        {/* <div className="flex-1 bg-black/60 flex justify-center items-center p-8 text-white"> */}
        <p className="duration-300 hover:scale-105">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum a
          sequi minima quasi sed expedita eos nam consequatur enim distinctio.
        </p>
      </div>
    </div>
  );
};

export default Hero;
