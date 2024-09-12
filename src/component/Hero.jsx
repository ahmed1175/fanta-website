import React from "react";
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import NavBar from "./NavBar";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
const headphoneData = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Cola Zero",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];
const SlideBar = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};
const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  };
  return (
    <motion.section
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
      className="bg-brandDark "
    >
      <NavBar />
      <div className="container text-white grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
        {/* Data info  */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1  ">
          <div className="space-y-5 text-center md:text-left ">
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeData.id}
                variants={SlideBar(0.2)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-3xl lg:text-6xl xl:text-7xl font-bold text-shadow "
              >
                {activeData.title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                className="text-sm leading-loose text-white/80 "
                key={activeData.id}
                variants={SlideBar(0.4)}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {activeData.subtitle}
              </motion.p>
            </AnimatePresence>
            <AnimatePresence>
              <motion.button
                key={activeData.id}
                variants={SlideBar(0.6)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="px-2 py-3  bg-white inline-block font-normal rounded-md text-black hover:font-semibold   "
              >
                Order now
              </motion.button>
            </AnimatePresence>
            {/* list seperator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10 "
            >
              <div className="w-20 h-[1px] bg-white "></div>
              <p>TOP RECOMENDATION</p>
              <div className="w-20 h-[1px] bg-white "></div>
            </motion.div>
            {/* image section  */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="grid grid-cols-3  gap-10"
            >
              {headphoneData.map((items) => {
                return (
                  <div
                    key={items.id}
                    onClick={() => {
                      handleActiveData(items);
                    }}
                    className=" cursor-pointer space-y-3 hover:scale-105  transition-all"
                  >
                    <div className="flex justify-center ">
                      <img
                        src={items.image}
                        alt=""
                        className={`w-[80px] img-shadow ${
                          activeData.image === items.image
                            ? "opacity-100 scale-110 "
                            : "opacity-50"
                        } `}
                      />
                    </div>
                    <div className="text-center !mt-4 spave-y-1 ">
                      <p className="text-base line-through opacity-50 ">
                        {items.price}
                      </p>
                      <p className="text-xl font-bold ">{items.price}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        {/* hero images   */}
        <div className="flex flex-col justify-end items-center relative order-1 md:order-2 ">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeData.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
              exit={{
                opacity: 0,
                // scale: 0.9,
                x: -100,

                transition: {
                  duration: 0.4,
                },
              }}
              src={activeData.image}
              alt=""
              className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10  "
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,

                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/5 text-[300px] font-poppnis font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  "
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </AnimatePresence>
        </div>
        
      </div>
    </motion.section>
  );
};

export default Hero;
