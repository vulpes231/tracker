/* eslint-disable no-unused-vars */
import React from "react";
import { MdSearch } from "react-icons/md";

const Hero = () => {
  return (
    <section className="bgImg">
      <div className="flex flex-col gap-4 w-full md:w-[50%] bg-black text-white py-20 px-10">
        <h3 className="text-xl md:text-2xl font-semibold capitalize text-center md:text-left">
          search or track packages
        </h3>
        <span className="relative ">
          <input
            type="text"
            name=""
            placeholder="Enter tracking number(s) "
            className="border-2 border-black w-full p-2 placeholder:text-slate-800 outline-none text-black placeholder:text-sm"
          />
          <MdSearch className="absolute top-0 right-0" />
        </span>
      </div>
    </section>
  );
};

export default Hero;
