import React from "react";
import bannerimg from "../assets/banner/juice.png";
import splash from "../assets/banner/splash.png";
import { motion } from "framer-motion";
import { fadeUp } from "./constant";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 md:space-y-0 space-y-6 gap-12  ">
        {/* Banner img section  */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={bannerimg}
            alt="Banner img"
            className=" w-[300px] md:w-[400px] mx-auto relative z-10 "
          />
          <motion.img
            initial={{ opacity: 0, y: -100, rotate: -180, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={splash}
            alt="splash"
            className=" absolute bottom-0 z-0 "
          />
        </div>
        {/* Banner Text section  */}
        <div className="flex flex-col justify-center ">
          <div className=" text-center md:text-left space-y-4 lg:max-w-[450px]   ">
            <motion.h1
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="show"
              className="text-3xl lg:text-4xl font-semibold "
            >
              Refresh Your World with Fanta
            </motion.h1>
            <motion.p
              variants={fadeUp(0.9)}
              initial="hidden"
              whileInView="show"
              className=" text-gray-500"
            >
              Fanta brings a burst of vibrant flavors and effervescent fun to
              your day! Whether you're looking to quench your thirst with a
              zesty orange, tangy lemon, or one of our many other fruit-inspired
              flavors, Fanta is your go-to drink for a refreshing and exciting
              experience. Dive into the world of Fanta and let every sip spark
              your senses with its bold, bubbly, and refreshing taste!
            </motion.p>
            <motion.button
              variants={fadeUp(1.1)}
              initial="hidden"
              whileInView="show"
              className="uppercase !mt-5 text-[#f97316] border-[#f97316]  duration-300 hover:text-white px-6 py-2 rounded-md hover:bg-[#f97316]"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
