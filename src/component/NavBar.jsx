import React from "react";
import logo from "../assets/logo.png";
import { NavbarMenu } from "./constant";
import { CiMenuFries } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <nav className="text-white py-9 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center "
      >
        {/* LOGO SECTION  */}
        <div>
          <img src={logo} alt="" className="max-w-[100px] invert " />
        </div>
        {/* MENU SECTION  */}
        <div className="hidden md:block ">
          <ul className="flex items-center gap-4 relative z-20 ">
            {NavbarMenu.map((items) => {
              return (
                <li key={items.id}>
                  <a
                    href={items.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase "
                  >
                    {items.title}
                  </a>
                </li>
              );
            })}
            <button className="text-xl px-14 ">
              <FaRegUser />
            </button>
          </ul>
        </div>
        {/* HUMBERGER ICON  */}
        <div className="md:hidden ">
          <CiMenuFries className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
