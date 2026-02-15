import React from "react";
import sideimage from "../assets/undraw_programming.svg";

const Hero = () => {
  return (
    <div className="mt-32 p-6">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-[90vw] sm:max-w-3xl m-auto">
        <div>
          <p className="font-ins text-[20px]">Hey. I'm Harshal,</p>
          <h1 className="text-5xl">
            A FULL
            <br /> <span className="font-ins italic">
              STACK WEB
            </span> <br /> DEVELOPER
          </h1>
          <p className="mt-2">
            I develop scalable and responsive web applications, focusing on
            clean design, usability, and efficient functionality.
          </p>
        </div>
        <div>
          <img src={sideimage} alt="Harshal" className=" " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
