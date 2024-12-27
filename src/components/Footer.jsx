/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { logo } from "../assets";

const footerlinks = [
  {
    id: 1,
    name: "Helpful Links",
    links: ["Contact Us", "Site Index", "FAQs", "Feedback"],
  },
  {
    id: 2,
    name: "Jobs",
    links: ["Newsroom", "Career"],
  },
  {
    id: 3,
    name: "Legal ",
    links: ["Privacy Policy", "Term of use", "Fair Chance Act"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-100 p-6">
      <div className="flex flex-col gap-4">
        <figure className="flex items-center gap-1">
          <img src={logo} alt="" className="w-[30px]" />
          <h4 className="text-green-500 font-semibold text-2xl">
            Quick <span className="text-red-500">ship</span>
          </h4>
        </figure>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {footerlinks.map((lnk) => {
            return (
              <div key={lnk.id} className="flex flex-col gap-1">
                <h4 className="font-bold">{lnk.name}</h4>
                {lnk.links.map((ab, index) => {
                  return (
                    <p className="text-sm font-light" key={index}>
                      {ab}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        <small>Copyright &copy; 2024 USPS. All Rights Reserved</small>
        <hr />
        <span className="flex items-center gap-2">
          <FaFacebook className="w-7 h-7 text-blue-500" />
          <FaInstagram className="w-7 h-7 text-pink-500" />
          <FaPinterest className="w-7 h-7 text-red-500" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
