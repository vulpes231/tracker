/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiPostStamp } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { MdMarkunreadMailbox } from "react-icons/md";
import { BsMailbox2Flag } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { GrScheduleNew } from "react-icons/gr";

const services = [
  "click & ship",
  "get stamps",
  "informed delivery",
  "P.O Boxes",
  "hold mail",
  "change of adrress",
  "pickup schedule",
];

const Services = () => {
  const myServices = services.map((serv, index) => {
    const icons = serv.includes("click") ? (
      <MdOutlineLocalShipping className="w-7 h-7" />
    ) : serv.includes("stamps") ? (
      <GiPostStamp className="w-7 h-7" />
    ) : serv.includes("informed") ? (
      <TbTruckDelivery className="w-7 h-7" />
    ) : serv.includes("Boxes") ? (
      <BsMailbox2Flag className="w-7 h-7" />
    ) : serv.includes("hold") ? (
      <MdMarkunreadMailbox className="w-7 h-7" />
    ) : serv.includes("address") ? (
      <FaAddressCard className="w-7 h-7" />
    ) : (
      <GrScheduleNew className="w-7 h-7" />
    );
    return (
      <div
        key={index}
        className="flex flex-col gap-2 items-center justify-center bg-white  h-[100px] p-6 rounded-lg"
      >
        <span>{icons}</span>
        <h4 className="capitalize font-medium md:font-semibold text-xs md:text-lg whitespace-nowrap">
          {" "}
          {serv}
        </h4>
      </div>
    );
  });
  return (
    <section className="lg:py-20 lg:px-10 bg-zinc-100">
      <div className="grid grid-cols-3 gap-6 p-6 md:max-w-[1100px] md:mx-auto">
        {myServices}
      </div>
    </section>
  );
};

export default Services;
