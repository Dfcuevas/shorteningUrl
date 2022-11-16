import React from "react";
import heroImg from "../../public/illustration-working.svg";

const Hero = () => {
  return (
    <div className="px-4 text-center relative max-[350px] overflow-hidden mb-10 xl:flex xl:items-center xl:px-24  xl:justify-between">
      <div className="relative left-2 w-[440px] xl:relative xl:left-32 xl:w-[550px]">
        <img src={heroImg} alt="Ilustration working" className="" />
      </div>
      <div className="xl:order-first xl:max-w-md xl:text-left mt-6">
        <h1 className="font-bold text-4xl text-veryDarkViolet mb-2">
          More than just shorter links
        </h1>
        <p className="text-grayishViolet mb-4">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-cyanCustom rounded-full px-6 py-2 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
