/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { image1, image2, image3, image4 } from "../assets";

const Card = ({ img, title }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <img src={img} alt="" className="w-full sm:w-[380px] h-[300px] block" />
      <h4 className="capitalize font-semibold text-xl">{title}</h4>

      <Link className="bg-green-600 text-white capitalize p-2 w-full text-center rounded-3xl">
        Learn more
      </Link>
    </div>
  );
};

const Featured = () => {
  return (
    <section className="bg-black text-white py-20 px-10">
      <div className="flex flex-col gap-10">
        <h3 className="text-3xl md:text-5xl font-bold capitalize md:text-center">
          our product &amp; services
        </h3>
        <div className="grid gap-10 md:grid-cols-2 md:max-w-[1100px] md:mx-auto">
          <Card img={image1} title={"Informed Delivery"} />
          <Card img={image2} title={"Hold Mail"} />
          <Card img={image3} title={"Gift Return"} />
          <Card img={image4} title={"Package Tracking"} />
        </div>
      </div>
    </section>
  );
};

export default Featured;
