/* eslint-disable no-unused-vars */
import React from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import { styles } from "../constants/constants";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <header>
      {/* mobile */}
      <nav className="flex items-center justify-between w-full bg-white text-black p-4">
        <span>
          <MdMenu className={styles.icon} />
        </span>
        <span>
          <img src={logo} alt="" className="w-[30px]" />
        </span>
        <span>
          <MdSearch className={styles.icon} />
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
