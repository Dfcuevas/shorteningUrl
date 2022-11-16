import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Dropdown() {
  const [visibility, setVisibility] = useState(false);

  const handleVisibiity = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="flex text-gray-400 font-bold items-center relative z-10 xl:w-full xl:items-center">
      <AiOutlineMenu
        className=" cursor-pointer xl:hidden"
        onClick={handleVisibiity}
      />
      <div
        className={`${
          !visibility && "hidden"
        } absolute border-red-600 border flex flex-col top-8 -left-[310px] w-[320px] text-center p-4 rounded-lg bg-darkViolet text-white text-xs xl:flex xl:relative xl:left-0 xl:top-0 xl:text-grayishViolet xl:bg-white xl:border-0 xl:flex-row xl:p-0 xl:w-full xl:justify-between xl:items-center`}
      >
        <div className="flex flex-col py-2 border-b-[1px] xl:border-0 xl:p-0 border-grayCustom xl:flex-row">
          <a href="#" className="m-2 xl:mt-0">
            Features
          </a>
          <a href="#" className="m-2 xl:mt-0">
            Pricing
          </a>
          <a href="#" className="m-2 xl:mt-0">
            Resources
          </a>
        </div>
        <div className="flex flex-col py-2 xl:p-0 xl:flex-row xl:items-center">
          <a href="#" className="m-2 xl:mt-0">
            Login
          </a>
          <a
            href="#"
            className="m-2 bg-cyanCustom p-2 rounded-full xl:text-white xl:mt-0 "
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
